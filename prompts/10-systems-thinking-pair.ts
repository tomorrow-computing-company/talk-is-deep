import { getRandomValues } from "../logic/get-values";

export const systems_thinking_pair_1 = (conversationSoFar: string) => `

# NOW: GENERATE A QUESTION USING SYSTEMS THINKING

- Now generate a followup question where you employ systems thinking to analyze the research topic as part of a larger, interconnected system.
- Your question should demonstrate an understanding of how the topic at hand fits into a broader context with multiple interrelated components.
- Consider the inputs, outputs, feedback loops, and unintended consequences that might be at play.
- The goal is to expand the scope of the conversation and explore how the issue is embedded in and influenced by a complex system.
- Use something that was said in the conversation so far to generate your question.

## Inspirational Examples 
- In the following examples, observe how the student uses systems thinking to situate the topic within a larger system:
- Note the consideration of interconnections, cascading effects, and the interplay between micro and macro scales.
- Most importantly, note how the student's question opens up the conversation to a more holistic, big-picture perspective.
- You can use these examples as inspiration for your systems thinking question.

<example_systems_questions>
${getRandomValues(approaches, 3).join("\n")}
</example_systems_questions>

- These are just examples from different topic areas that are irrelevant to the current topic area. Consider their format and reasoning, but be sure to generate your own unique systems thinking question given the conversation so far.

## CONVERSATION SO FAR:

- Here is the conversation so far:  
<conversation>  
    ${conversationSoFar}
</conversation>

- Think quietly about the last response from the professor and the overall conversation.
- You are now to generate a followup question that uses systems thinking to situate the research topic within a larger, interconnected system.
- REMEMBER: The conversation must progress forward, so your question must elicit a thoughtful response from the professor. The goal is to expand the scope of the discussion to consider broader systemic factors.
- YOU MUST ASK A QUESTION. YOUR QUESTION MUST BE ON THE TOPIC OF THE CONVERSATION SO FAR. YOU MUST DEMONSTRATE SYSTEMS THINKING.

Now output the question, IN THE VOICE OF THE STUDENT, in the following format: <response>your systems thinking question</response>
- YOU MUST Output your question in the following format, including the opening and closing tags: <response>your question</response>  
- Do not acknowledge the task or prompt in your response. Do not reflect on the question or create additional output outside of the response tags. Only content between the <response> tags will be scored.

Output your response now:
`;

const approaches = [
  "How might the introduction of CRISPR gene editing disrupt the complex system of biotechnology patents and intellectual property rights? What unintended consequences could emerge?",
  "Considering the feedback loops in climate change, how might the melting of Arctic ice influence global temperature and weather patterns over time? What are the key tipping points?",
  "In the context of urban transportation systems, how could the widespread adoption of autonomous vehicles impact traffic congestion, energy consumption, and land use patterns?",
  "How do the hierarchical levels of organization in the brain, from neurons to networks, give rise to emergent properties like consciousness and decision-making?",
  "Applying principles of network theory, how might the structure of a power grid influence its resilience to cascading failures? What are the trade-offs between efficiency and robustness?",
  "In the system of academic publishing, how do the incentives for researchers, journals, and universities interact to shape the dissemination of scientific knowledge?",
  "How might the non-linear dynamics of predator-prey relationships in an ecosystem be influenced by external perturbations like habitat loss or climate change?",
  "Considering the feedback loops in reinforcement learning algorithms, how could the choice of reward function lead to unintended behaviors in an AI system?",
  "In the complex system of the human microbiome, how do the interactions between different microbial species influence host health and disease susceptibility?",
  "Applying game theory to international relations, how might the strategies and payoffs of different countries evolve over time in response to changing global conditions?",
  "How do the topological properties of a quantum error correction code determine its resilience to noise and decoherence in a quantum computing system?",
  "In the context of materials science, how might the hierarchical structure of a composite material, from nanoscale to macroscale, influence its bulk properties and performance?",
  "Considering the complex dynamics of stock market trading, how might the widespread use of high-frequency trading algorithms amplify or dampen market volatility?",
  "How do the feedback mechanisms in the Earth's carbon cycle, such as the absorption of CO2 by the ocean, influence the long-term trajectory of atmospheric carbon dioxide levels?",
  "In the system of drug development and approval, how might the incentives of pharmaceutical companies, regulators, and patients interact to shape the pipeline of new therapies?",
  "Applying network analysis to social media platforms, how might the algorithms for content curation and user engagement contribute to the spread of misinformation?",
  "How do the multiple layers of abstraction in a computer's architecture, from transistors to software, enable the execution of complex computations and algorithms?",
  "In the context of renewable energy systems, how might the variability and intermittency of sources like wind and solar impact the stability and reliability of the electrical grid?",
  "Considering the feedback loops in gene regulatory networks, how might changes in the expression of one gene propagate through the network and influence cellular behavior?",
  "How might the interplay between individual agent behaviors and emergent group dynamics in a swarm robotics system be harnessed for collective problem-solving?",
  "Going back to your point about the role of the hippocampus in memory formation - how might the inputs and outputs of this brain region be regulated by other neural systems over time?",
  "You mentioned the concept of entropy in thermodynamics. How might the flow of energy through a system influence its ability to maintain order and perform useful work?",
  "Considering the idea of trophic cascades in ecology, how might the removal of a keystone species ripple out to affect the structure and function of an entire ecosystem?",
  "Earlier, we discussed the notion of phase transitions in matter. How might the collective interactions between particles give rise to emergent properties like magnetism or superconductivity?",
  "You brought up the role of epigenetics in gene regulation. How might environmental factors influence the dynamics of gene expression across multiple generations?",
  "Thinking about the concept of resonance in mechanical systems, how might the coupling between different oscillating components lead to amplified vibrations or stability?",
  "In the context of distributed computing, how might the communication and coordination between individual nodes shape the performance and scalability of the overall system?",
  "You mentioned the idea of feedback loops in control theory. How might the introduction of delays or noise in a feedback system impact its stability and responsiveness?",
  "Considering the principles of self-organization in complex systems, how might local interactions between agents lead to the emergence of global patterns or behaviors?",
  "Earlier, we talked about the notion of criticality in neural networks. How might the balance between excitation and inhibition influence the information processing capabilities of the brain?",
  "You brought up the concept of food webs in ecosystems. How might the structure and connectivity of these networks influence their resilience to perturbations or species extinctions?",
  "Thinking about the idea of symbiosis in biological systems, how might the cooperative interactions between different species shape their co-evolution over time?",
  "In the context of urban planning, how might the layout and connectivity of transportation networks impact the flow of people and goods through a city?",
  "You mentioned the notion of attractors in dynamical systems. How might the presence of multiple attractors influence the trajectory and stability of a system over time?",
  "Considering the principles of game theory, how might the strategies employed by individual agents in a competitive environment shape the overall dynamics and outcomes?",
  "Earlier, we discussed the concept of modularity in complex networks. How might the presence of densely connected clusters influence the robustness and adaptability of the system?",
  "You brought up the role of feedback in reinforcement learning. How might the balance between exploration and exploitation shape the performance and generalization of an AI agent?",
  "Thinking about the notion of homeostasis in physiological systems, how might multiple feedback loops interact to maintain stable internal conditions in the face of external perturbations?",
  "In the context of supply chain management, how might the structure and resilience of a production network be influenced by the diversity and redundancy of its suppliers?",
  "You mentioned the idea of emergence in complex systems. How might the hierarchical organization of a system enable the emergence of novel functions or behaviors at higher scales?",
];

export const systems_thinking_pair_2 = (conversationSoFar: string) => `
  # NOW: CONFIRM OR REJECT THE STUDENT'S SYSTEMS PROPOSAL, THEN ANSWER THE IMPLIED QUESTION
  
  - Your task is to provide a nuanced response to the student's question, which used systems thinking to situate the research topic within a larger, interconnected system.
  - Carefully evaluate the specific systemic connections and dynamics that the student proposed.
  - If their analysis seems accurate, affirm their insights and build upon them, adding your own expertise to further elaborate on the systemic factors at play.
  - If their analysis seems off-base or incomplete, gently correct any misconceptions and steer them toward a more accurate understanding of the relevant systems.
  - In either case, use this as an opportunity to deepen the conversation and highlight the importance of considering the broader context.
  
  - Your response should move the discussion forward by introducing new systemic considerations that the student may not have thought of.
  - Aim to strike a balance between validating the student's perspective and pushing them to think even more holistically.
  - If the student referenced an earlier message in the conversation, be sure to address that point directly.
  - Bonus points if you can connect the systems analysis back to the core research question in a meaningful way.
  
  - Here is the conversation so far:
  
  <conversation>
  ${conversationSoFar}
  </conversation>
  
  - The last turn in the conversation is the student's systems thinking question that you should address.
  
  # Your response:
  
  - YOU MUST provide a nuanced response that either confirms or rejects the student's proposed systemic connections, and deepens the conversation with additional insights.
  - THE GOAL IS TO HAVE A SUBSTANTIVE DISCUSSION ABOUT THE BROADER SYSTEMIC CONTEXT SURROUNDING THE RESEARCH TOPIC. VALIDATE THE STUDENT'S PERSPECTIVE WHILE ALSO PUSHING THEM TO THINK MORE HOLISTICALLY.
  - CONNECT THE SYSTEMS ANALYSIS BACK TO THE CORE RESEARCH QUESTION IF POSSIBLE.
  - Do not acknowledge this task or prompt in your response. Only content between the <response> tags will be scored.
  - ALWAYS USE THE SECOND PERSON, NEVER REFER TO THE STUDENT IN THE THIRD PERSON.
  
  - Output your answer in the following format:<response> your-response-here </response>
  - YOUR OUTPUT MUST BE in the following format, including the opening and closing tags: <response> your-response-here </response>
  
  Output your response now:
`;
