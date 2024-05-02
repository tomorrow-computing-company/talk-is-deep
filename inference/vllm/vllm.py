import subprocess
import time
import re
import signal
import sys
import select
import os

def start_server(model_path=None):
    if model_path is None:
        model_path = "hf-models/Meta-Llama-3-8B-Instruct"
    command = [
        "/usr/bin/python3", "-m", "vllm.entrypoints.openai.api_server",
        "--model", model_path,
        "--max-model-len", "8192",
        "--kv-cache-dtype", "fp8_e5m2",
        '--tensor-parallel-size', '2',
        "--enforce-eager",
        "--port", "5000"
    ]
    return subprocess.Popen(command, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True, preexec_fn=os.setsid)

def read_output(process):
    error_pattern = re.compile(r"AsyncEngineDeadError: Task finished unexpectedly\.")
    while True:
        ready, _, _ = select.select([process.stdout, sys.stdin], [], [])
        if process.stdout in ready:
            output = process.stdout.readline()
            if output == '' and process.poll() is not None:
                break
            if output:
                print(output.strip())
                if error_pattern.search(output):
                    print("Error detected. Restarting the server...")
                    terminate_process(process)
                    return True
        if sys.stdin in ready:
            input()  # Consume the input to prevent blocking
            print("Keyboard interrupt received. Terminating the server...")
            terminate_process(process)
            return False
    return False

def terminate_process(process):
    os.killpg(os.getpgid(process.pid), signal.SIGTERM)
    time.sleep(5)  # Wait for a short duration to allow the process to terminate
    if process.poll() is None:
        os.killpg(os.getpgid(process.pid), signal.SIGKILL)

def main(model_path=None):
    while True:
        process = start_server(model_path)
        restart = read_output(process)
        if not restart:
            break
        time.sleep(5)  # Wait for 5 seconds before restarting

if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser(description="Run the VLLM server.")
    parser.add_argument("--model-path", type=str, default=None, help="Path to the model directory.")
    args = parser.parse_args()

    main(args.model_path)
