import { getRandomValues } from "../logic/get-values";

export const abductive_reasoning_pair_1 = (conversationSoFar: string) => `

# NOW: GENERATE PLAUSIBLE EXPLANATIONS FOR UNEXPECTED FINDINGS USING ABDUCTIVE REASONING

- Now generate a followup question where you employ abductive reasoning to generate plausible explanations for unexpected findings in the research topic.
- Your question should demonstrate a willingness to explore the problem space and generate a wide range of potential explanations.
- Consider how different perspectives and approaches can lead to plausible and creative insights.
- The goal is to spark creative ideas that could lead to a deeper understanding of the unexpected findings.
- Use something that was said in the conversation so far to generate your question.

## Inspirational Examples 
- In the following examples, observe how the student uses abductive reasoning to generate plausible explanations for unexpected findings:
- Note the variety of approaches and the potential strengths and weaknesses of each.
- Most importantly, note how the student's question opens up new avenues for creative exploration.
- You can use these examples as inspiration for your abductive reasoning question.

<example_abductive_questions>
${getRandomValues(approaches, 3).join("\n")}
</example_abductive_questions>

- These are just examples from different topic areas that are irrelevant to the current topic area. Consider their format and reasoning, but be sure to generate your own unique abductive reasoning question given the conversation so far.
- Your example will not include placeholders like "..." but will be a complete question with detail filled in from the conversation.

## CONVERSATION SO FAR:

- Here is the conversation so far:  
<conversation>  
    ${conversationSoFar}
</conversation>

- Think quietly about the last response from the professor and the overall conversation.
- You are now to generate a question that uses abductive reasoning to generate plausible explanations for unexpected findings in the research topic.
- REMEMBER: The conversation must progress forward, so your question must elicit a thoughtful response from the professor. The goal is to open up new avenues for creative exploration.
- YOU MUST ASK A QUESTION. YOUR QUESTION MUST BE ON THE TOPIC OF THE CONVERSATION SO FAR. YOU MUST DEMONSTRATE ABDUCTIVE REASONING.

Now output the question, IN THE VOICE OF THE STUDENT, in the following format: <response>your abductive reasoning question</response>
- YOU MUST Output your question in the following format, including the opening and closing tags: <response>your question</response>  
- Do not acknowledge the task or prompt in your response. Do not reflect on the question or create additional output outside of the response tags. Only content between the <response> tags will be scored.

Output your response now:
`;

const approaches = [
  "Given the unexpected findings you presented earlier on ..., how might we integrate that with the insights from ... to form a more comprehensive understanding of the topic?",
  "In light of the research you discussed regarding ..., how could we combine that with the conclusions drawn from ... to develop a unified perspective on the issue?",
  "Considering the implications of the study you mentioned about ..., how do you see that aligning with the hypotheses from ... to create a more nuanced understanding?",
  "With the evidence you provided on ..., how might we reconcile that with the data from ... to construct a more holistic view of the subject?",
  "Given the various perspectives you shared about ..., how can we synthesize those with the information from ... to deepen our understanding of the topic?",
  "Incorporating the results of the experiment you referenced on ..., how do you envision that intersecting with the outcomes from ... to form a more cohesive interpretation?",
  "Based on the conclusions you drew from the analysis of ..., how could we merge that with the insights from ... to arrive at a more integrated understanding of the research?",
  "Considering the implications of the theory you discussed about ..., how might that intersect with the hypotheses from ... to create a more unified framework for understanding the topic?",
  "Given the diverse viewpoints you presented on ..., how do you see those converging with the perspectives from ... to generate a more comprehensive analysis of the subject?",
  "In light of the case studies you mentioned regarding ..., how could we combine those with the examples from ... to develop a more nuanced perspective on the issue?",
  "Considering the implications of the model you shared about ..., how might that align with the frameworks from ... to create a more holistic understanding of the topic?",
  "With the insights you provided on ..., how might we reconcile those with the observations from ... to construct a more cohesive view of the subject?",
  "Given the various methodologies you discussed for ..., how can we synthesize those with the approaches from ... to deepen our understanding of the topic?",
  "Incorporating the perspectives you referenced on ..., how do you envision those intersecting with the viewpoints from ... to form a more integrated interpretation?",
  "Based on the conclusions you drew from the literature review of ..., how could we merge those with the findings from ... to arrive at a more comprehensive understanding of the research?",
  "Building on your point about the potential of gene editing - what if we could use CRISPR to not just treat diseases, but enhance human capabilities? What might be the implications?",
  "You mentioned the concept of neuroplasticity. How could we leverage this to radically redesign education and learning? What would a 'brain-optimized' school look like?",
  "Considering the idea of quantum computing, what if we could harness quantum entanglement for instant communication across vast distances? How might this change space exploration?",
  "Earlier, we discussed the notion of 3D printing. What if we could 3D print entire buildings or even cities? How might this transform architecture and urban planning?",
  "You brought up the role of artificial intelligence in healthcare. What if we could create AI doctors that could diagnose and treat patients autonomously? Would this be desirable?",
  "Thinking about the concept of renewable energy, what if we could develop a way to harness energy from Earth's magnetic field? How would this change the global energy landscape?",
  "In the context of nanotechnology, what if we could create self-replicating nanobots that could repair and regenerate human tissues? What safeguards would we need?",
  "You mentioned the idea of brain-computer interfaces. What if we could upload human consciousness into a digital realm? Would this be a form of immortality?",
  "Considering the principles of biomimicry, what if we could engineer buildings that could 'grow' and adapt like living organisms? How would this change construction?",
  "Earlier, we talked about the notion of space tourism. What if we could establish permanent human colonies on other planets? What challenges would need to be overcome?",
  "You brought up the concept of lab-grown meat. What if we could create any food we wanted from scratch, molecule by molecule? How might this impact global food security?",
  "Thinking about the idea of autonomous vehicles, what if we could create a fully automated transportation network that could predict and prevent accidents? What would be the ripple effects?",
  "In the context of virtual reality, what if we could create fully immersive simulations that were indistinguishable from reality? How might this be used or abused?",
  "You mentioned the notion of gene drives in biology. What if we could use this to eliminate all mosquito-borne diseases? What ecological consequences might there be?",
  "Considering the principles of terraforming, what if we could engineer Earth's climate to reverse global warming? What risks and trade-offs would be involved?",
  "Earlier, we discussed the concept of the Internet of Things. What if every object in the world was connected and communicating? How might this transform daily life?",
  "You brought up the role of blockchain in finance. What if we could create a global, decentralized currency that was immune to inflation or manipulation? What would be the geopolitical implications?",
  "Thinking about the notion of augmented reality, what if we could overlay digital information onto the real world seamlessly? How would this change education, navigation, or social interaction?",
  "In the context of regenerative medicine, what if we could induce the human body to regenerate any tissue or organ at will? Would this lead to longer lifespans?",
  "You mentioned the idea of fusion power. What if we could create miniature fusion reactors that could power individual homes or vehicles? How would this change energy distribution?",
];

export const abductive_reasoning_pair_2 = (conversationSoFar: string) => `
  # NOW: EVALUATE AND REFINE THE EXPLANATIONS BASED ON EVIDENCE
  
  - Your task is to provide a thoughtful response to the student's question, which used abductive reasoning to generate plausible explanations for unexpected findings in the research topic.
  - Engage with the specifics of their question, exploring the implications of the explanations they proposed.
  - Use this as an opportunity to evaluate and refine the explanations based on evidence, providing guidance on how to test and validate them.
  - If the student's question makes leaps that are too far from the realm of plausibility, gently steer them back toward ideas that are innovative yet feasible.
  
  - Your response should move the conversation forward in a substantive way. Avoid simply repeating information already discussed.
  - The goal is to have a generative discussion that sparks creative insights, while still maintaining a focus on rigorous problem-solving.
  - If the student referenced an earlier message in the conversation, be sure to address that point directly.
  - Bonus points if you can reference a very early point in the conversation to show continuity.
  
  - Here is the conversation so far:
  
  <conversation>
  ${conversationSoFar}
  </conversation>
  
  - The last turn in the conversation is the student's abductive reasoning question that you should address.
  
  # Your response:
  
  - YOU MUST move the conversation forward. Do not repeat points that have been already made, and try to vary the professor's sentence structure and style.
  - THE GOAL IS TO HAVE A GENERATIVE DISCUSSION ABOUT THE TOPIC AT HAND. ENGAGE WITH THE STUDENT'S QUESTION AND PROVIDE A THOUGHTFUL RESPONSE, RESPECTING THE STUDENT'S DESIRE TO GENERATE PLAUSIBLE EXPLANATIONS FOR UNEXPECTED FINDINGS.
  - EVALUATE AND REFINE THE EXPLANATIONS BASED ON EVIDENCE, PROVIDING GUIDANCE ON HOW TO TEST AND VALIDATE THEM.
  - Do not acknowledge this task or prompt in your response. Only content between the <response> tags will be scored.
  - ALWAYS USE THE SECOND PERSON, NEVER REFER TO THE STUDENT IN THE THIRD PERSON.
  
  - Output your answer in the following format:<response> your-response-here </response>
  - YOUR OUTPUT MUST BE in the following format, including the opening and closing tags: <response> your-response-here </response>
  
  Output your response now:
`;
