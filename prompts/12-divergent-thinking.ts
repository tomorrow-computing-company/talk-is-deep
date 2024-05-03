import { getRandomValues } from "../logic/get-values";

export const divergent_thinking_pair_1 = (conversationSoFar: string) => `

# NOW: GENERATE MULTIPLE, DIVERSE IDEAS USING DIVERGENT THINKING

- Now generate a followup question where you employ divergent thinking to generate multiple, diverse ideas and perspectives on the research topic.
- Your question should demonstrate a willingness to explore the problem space from different angles and generate a wide range of potential solutions.
- Consider how different perspectives and approaches can lead to innovative and creative insights.
- The goal is to spark creative ideas that could lead to innovative solutions or a deeper understanding of the issue.
- Use something that was said in the conversation so far to generate your question.

## Inspirational Examples 
- In the following examples, observe how the student uses divergent thinking to generate multiple, diverse ideas and perspectives:
- Note the variety of approaches and the potential strengths and weaknesses of each.
- Most importantly, note how the student's question opens up new avenues for creative exploration.
- You can use these examples as inspiration for your divergent thinking question.

<example_divergent_questions>
${getRandomValues(approaches, 3).join("\n")}
</example_divergent_questions>

- These are just examples from different topic areas that are irrelevant to the current topic area. Consider their format and reasoning, but be sure to generate your own unique divergent thinking question given the conversation so far.

## CONVERSATION SO FAR:

- Here is the conversation so far:  
<conversation>  
    ${conversationSoFar}
</conversation>

- Think quietly about the last response from the professor and the overall conversation.
- You are now to generate a question that uses divergent thinking to generate multiple, diverse ideas and perspectives on the research topic.
- REMEMBER: The conversation must progress forward, so your question must elicit a thoughtful response from the professor. The goal is to open up new avenues for creative exploration.
- YOU MUST ASK A QUESTION. YOUR QUESTION MUST BE ON THE TOPIC OF THE CONVERSATION SO FAR. YOU MUST DEMONSTRATE DIVERGENT THINKING.

Now output the question, IN THE VOICE OF THE STUDENT, in the following format: <response>your divergent thinking question</response>
- YOU MUST Output your question in the following format, including the opening and closing tags: <response>your question</response>  
- Do not acknowledge the task or prompt in your response. Do not reflect on the question or create additional output outside of the response tags. Only content between the <response> tags will be scored.

Output your response now:
`;

const approaches = [
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

export const divergent_thinking_pair_2 = (conversationSoFar: string) => `
  # NOW: EXPLORE THE STRENGTHS AND WEAKNESSES OF EACH APPROACH
  
  - Your task is to provide a thoughtful response to the student's question, which used divergent thinking to generate multiple, diverse ideas and perspectives on the research topic.
  - Engage with the specifics of their question, exploring the implications of each approach they proposed.
  - Use this as an opportunity to explore the strengths and weaknesses of each approach, providing guidance on how to evaluate and refine them.
  - If the student's question makes leaps that are too far from the realm of plausibility, gently steer them back toward ideas that are innovative yet feasible.
  
  - Your response should move the conversation forward in a substantive way. Avoid simply repeating information already discussed.
  - The goal is to have a generative discussion that sparks creative insights, while still maintaining a focus on rigorous problem-solving.
  - If the student referenced an earlier message in the conversation, be sure to address that point directly.
  - Bonus points if you can reference a very early point in the conversation to show continuity.
  
  - Here is the conversation so far:
  
  <conversation>
  ${conversationSoFar}
  </conversation>
  
  - The last turn in the conversation is the student's divergent thinking question that you should address.
  
  # Your response:
  
  - YOU MUST move the conversation forward. Do not repeat points that have been already made, and try to vary the professor's sentence structure and style.
  - THE GOAL IS TO HAVE A GENERATIVE DISCUSSION ABOUT THE TOPIC AT HAND. ENGAGE WITH THE STUDENT'S QUESTION AND PROVIDE A THOUGHTFUL RESPONSE, RESPECTING THE STUDENT'S DESIRE TO EXPLORE MULTIPLE, DIVERSE IDEAS AND PERSPECTIVES.
  - EXPLORE THE STRENGTHS AND WEAKNESSES OF EACH APPROACH, PROVIDING GUIDANCE ON HOW TO EVALUATE AND REFINE THEM.
  - Do not acknowledge this task or prompt in your response. Only content between the <response> tags will be scored.
  - ALWAYS USE THE SECOND PERSON, NEVER REFER TO THE STUDENT IN THE THIRD PERSON.
  
  - Output your answer in the following format:<response> your-response-here </response>
  - YOUR OUTPUT MUST BE in the following format, including the opening and closing tags: <response> your-response-here </response>
  
  Output your response now:
`;
