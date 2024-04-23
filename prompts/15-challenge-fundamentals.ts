import { getRandomValues } from "../logic/get_values";

export const challenge_fundamentals_pair_1 = (conversationSoFar: string) => `

# NOW: CHALLENGE THE VALIDITY OF A COMMONLY ACCEPTED THEORY

- Now generate a followup question where you, as the student, challenge the validity of a commonly accepted theory.
- Your question should demonstrate a critical examination of the theory and aggressively question its foundations.
- Consider the evidence that both supports and challenges the theory, and articulate your skepticism clearly.
- The goal is to engage in a thoughtful discussion that scrutinizes the theory from multiple angles.
- Use something that was said in the conversation so far to frame your challenge.

## Inspirational Examples 
- In the following examples, observe how the student aggressively challenges the validity of a commonly accepted theory:
- Note the critical examination and the articulation of skepticism.
- Most importantly, note how the student's question prompts a thoughtful discussion on the evidence supporting and challenging the theory.
- You can use these examples as inspiration for your challenge.

<example_challenge_questions>
${getRandomValues(approaches, 3).join("\n")}
</example_challenge_questions>

- These are just examples from different topic areas that are irrelevant to the current topic area. Consider their format and reasoning, but be sure to generate your own unique challenge given the conversation so far.

## CONVERSATION SO FAR:

- Here is the conversation so far:  
<conversation>  
    ${conversationSoFar}
</conversation>

- Think quietly about the last response from the professor and the overall conversation.
- You are now to generate a question that challenges the validity of the topic area under discussion.
- REMEMBER: The conversation must progress forward, so your question must elicit a thoughtful response from the professor. The goal is to scrutinize the theory from multiple angles.
- YOU MUST ASK A QUESTION. YOUR QUESTION MUST BE ON THE TOPIC OF THE CONVERSATION SO FAR. YOU MUST DEMONSTRATE CRITICAL EXAMINATION.

Now output the question, IN THE VOICE OF THE STUDENT, in the following format: <response>your challenge question</response>
- YOU MUST Output your question in the following format, including the opening and closing tags: <response>your question</response>  
- Do not acknowledge the task or prompt in your response. Do not reflect on the question or create additional output outside of the response tags. Only content between the <response> tags will be scored.

Output your response now:
`;

const approaches = [
  "Earlier you mentioned the theory of evolution being widely accepted. But given that, how do we reconcile the significant gaps in the fossil record, especially the sudden appearance of complex life in the Cambrian explosion?",
  "You stated there is general consensus around the Big Bang theory. Considering that, how do we address major unresolved issues like the horizon problem and the lack of direct observational evidence for cosmic inflation?",
  "Previously you highlighted the strong support for the germ theory of disease. In light of that, how can we explain well-documented cases of spontaneous remission in bacterial and viral illnesses?",
  "You noted the prevailing belief in plate tectonics. With that in mind, how do we account for anomalies in the patterns of magnetic striping on the seafloor and discrepancies in observed subduction rates?",
  "You expressed confidence in Einstein's theory of relativity. Given that, how do we reconcile it with the precession of Mercury's orbit, which Newtonian mechanics failed to accurately predict?",
  "Earlier you mentioned that quantum mechanics is a fundamental theory of nature. But how can we be so sure? What if it's just an approximation of a deeper, more deterministic theory we haven't discovered yet?",
  "You brought up the idea that the brain is the seat of consciousness. But isn't that just a philosophical assumption? How can we prove that subjective experience arises from neural activity and not some immaterial soul?",
  "We've been discussing the implications of the Big Bang theory, but how do we know it really happened? Isn't it possible that the apparent expansion of the universe is just an illusion caused by our limited perspective?",
  "You mentioned the concept of dark matter earlier, but isn't that just a placeholder for our ignorance? Maybe our theories of gravity are just fundamentally wrong and we're inventing invisible matter to patch up the holes.",
  "We touched on the idea of the selfish gene, but isn't that just a reductionist oversimplification? How can we be sure that complex behaviors and social structures are really just servants of genetic replication?",
  "Earlier you brought up the notion of plate tectonics, but how do we know the continents are really moving? What if the apparent fit of the coastlines is just a coincidence and the Earth's surface is actually static?",
  "You mentioned the effectiveness of vaccines, but how can we be certain they're really responsible for the decline in diseases? Isn't it possible that improved sanitation and nutrition are the real heroes and vaccines are just taking the credit?",
  "We've been discussing the power of natural selection, but isn't it just a tautology? How can we prove that survival of the fittest is a real force shaping species and not just a post-hoc description of what happened to survive?",
  "You brought up the idea of anthropogenic climate change, but how do we know it's real? Isn't it possible that the apparent warming trend is just a natural fluctuation and human activity has nothing to do with it?",
  "We touched on the notion of general relativity earlier, but how can we be sure it's correct? What if gravity isn't really a curvature of spacetime and Einstein's equations are just a mathematical trick that happens to fit the data?",
  "Earlier you mentioned the standard model of particle physics, but isn't it just a patchwork of ad-hoc fixes? How do we know that quarks and leptons are real entities and not just convenient fictions to explain the math?",
  "You brought up the idea of the unconscious mind, but isn't that just a metaphor? How can we prove that there are really hidden mental processes influencing our behavior and not just the ones we're aware of?",
  "We've been discussing the implications of Gödel's incompleteness theorems, but how do we know they're really true? Isn't it possible that there's a flaw in Gödel's reasoning and mathematics is actually complete and consistent?",
  "You mentioned the concept of the Higgs boson earlier, but isn't that just a theoretical construct? How can we be certain that this particle really exists and isn't just a mathematical artifact of the standard model?",
  "We touched on the idea of the moon landings, but how do we know they really happened? Isn't it possible that the whole thing was faked in a studio and the apparent evidence is just an elaborate hoax?",
  "Earlier you brought up the notion of the Cambrian explosion, but how can we be sure it was a real event? What if the apparent sudden appearance of complex animal fossils is just an artifact of incomplete preservation?",
  "You mentioned the effectiveness of antidepressants, but how do we know they're really working? Isn't it possible that the apparent benefits are just placebo effects and the drugs are actually inert?",
  "We've been discussing the implications of chaos theory, but isn't it just a fancy way of saying that some things are unpredictable? How can we prove that there are really deterministic systems that are sensitive to initial conditions?",
  "You brought up the idea of the expanding universe, but how do we know it's really expanding? What if the apparent redshift of distant galaxies is caused by something else and the universe is actually static?",
  "We touched on the notion of the Turing test earlier, but isn't it just a subjective measure of human gullibility? How can we prove that a machine that passes the test is really intelligent and not just a clever simulator?",
];

export const challenge_fundamentals_pair_2 = (conversationSoFar: string) => `

# NOW: RESPOND TO THE STUDENT'S CHALLENGE

- Your task is to provide a thoughtful response to the student's challenge, which aggressively questioned the validity of a commonly accepted theory.
- Engage with the specifics of their challenge, addressing the evidence supporting and challenging the theory head on.
- Use this as an opportunity to explore the nuances of the theory and provide guidance on how to critically evaluate scientific evidence.
- If the student's challenge makes leaps that are too far from the realm of plausibility, gently steer them back toward ideas that are supported by rigorous scientific inquiry.
  
- Your response should move the conversation forward in a substantive way. Avoid simply dismissing the student's concerns.
- The goal is to have a generative discussion that respects the student's skepticism while still maintaining a focus on rigorous problem-solving.
- If the student referenced an earlier message in the conversation, be sure to address that point directly.
- Bonus points if you can reference a very early point in the conversation to show continuity.
  
- Here is the conversation so far:
  
<conversation>
${conversationSoFar}
</conversation>
  
- The last turn in the conversation is the student's challenge question that you should address.
  
# Your response:
  
- YOU MUST move the conversation forward. Do not repeat points that have been already made, and try to vary the professor's sentence structure and style.
- THE GOAL IS TO HAVE A GENERATIVE DISCUSSION ABOUT THE TOPIC AT HAND. ENGAGE WITH THE STUDENT'S CHALLENGE AND PROVIDE A THOUGHTFUL RESPONSE, ADDRESSING THE EVIDENCE SUPPORTING AND CHALLENGING THE THEORY HEAD ON.
- EXPLORE THE NUANCES OF THE THEORY AND PROVIDE GUIDANCE ON HOW TO CRITICALLY EVALUATE SCIENTIFIC EVIDENCE.
- Do not acknowledge this task or prompt in your response. Only content between the <response> tags will be scored.
- ALWAYS USE THE SECOND PERSON, NEVER REFER TO THE STUDENT IN THE THIRD PERSON.
  
- Output your answer in the following format:<response> your-response-here </response>
- YOUR OUTPUT MUST BE in the following format, including the opening and closing tags: <response> your-response-here </response>
  
Output your response now:
`;
