import { getRandomValues } from "../logic/get_values";

export const historical_context_pair_1 = (conversationSoFar: string) => `

# NOW: EXPLORE THE HISTORICAL CONTEXT OF THE RESEARCH

- Now generate a followup question where you ask for the historical context of the research problem.
- Your question should demonstrate a willingness to explore the problem space and generate a wide range of potential historical insights.
- Consider how different historical perspectives and approaches can lead to a deeper understanding of the research.
- The goal is to spark creative ideas that could lead to a deeper understanding of the research.
- Use something that was said in the conversation so far to generate your question.

## Inspirational Examples 
- In the following examples, observe how the student asks for historical context to understand the research topic.
- Note the variety of approaches and the potential strengths and weaknesses of each.
- Most importantly, note how the student's question guides the conversation towards a historical perspective.
- You can use these examples as inspiration for your historical context question.

<example_historical_questions>
${getRandomValues(approaches, 3).join("\n")}
</example_historical_questions>

- These are just examples from different topic areas that are irrelevant to the current topic area. Consider their format and reasoning, but be sure to generate your own unique historical context question given the conversation so far.
- Your example will not include placeholders like "..." but will be a complete question with detail filled in from the conversation.

## CONVERSATION SO FAR:

- Here is the conversation so far:  
<conversation>  
    ${conversationSoFar}
</conversation>

- Think quietly about the last response from the professor and the overall conversation.
- You are now to generate a question that asks for the historical context of the topic area under discussion.
- REMEMBER: The conversation must progress forward, so your question must elicit a thoughtful response from the professor. The goal is to deepen the understanding of the research topic through historical insights.
- YOU MUST ASK A QUESTION. YOUR QUESTION MUST BE ON THE TOPIC OF THE CONVERSATION SO FAR. YOU MUST DEMONSTRATE HISTORICAL CONTEXT.

Now output the question, IN THE VOICE OF THE STUDENT, in the following format: <response>your historical context question</response>
- YOU MUST Output your question in the following format, including the opening and closing tags: <response>your question</response>  
- Do not acknowledge the task or prompt in your response. Do not reflect on the question or create additional output outside of the response tags. Only content between the <response> tags will be scored.

Output your response now:
`;

const approaches = [
  "Given the research you mentioned earlier on ..., how might we explore the historical context of that topic to gain a deeper understanding?",
  "In light of the studies you discussed regarding ..., how could we investigate the historical background of those findings to provide more insights?",
  "Considering the implications of the theory you mentioned about ..., how do you see that aligning with the historical perspectives from ... to create a more nuanced understanding?",
  "With the evidence you provided on ..., how might we delve into the historical context of those data points to construct a more holistic view of the subject?",
  "Given the various viewpoints you shared about ..., how can we explore the historical narratives of those perspectives to deepen our understanding of the topic?",
  "Incorporating the results of the experiment you referenced on ..., how do you envision that intersecting with the historical accounts from ... to form a more cohesive interpretation?",
  "Based on the conclusions you drew from the analysis of ..., how could we merge that with the historical insights from ... to arrive at a more integrated understanding of the research?",
  "Considering the implications of the model you shared about ..., how might that intersect with the historical frameworks from ... to create a more unified framework for understanding the topic?",
  "Given the diverse viewpoints you presented on ..., how do you see those converging with the historical perspectives from ... to generate a more comprehensive analysis of the subject?",
  "In light of the case studies you mentioned regarding ..., how could we combine those with the historical examples from ... to develop a more nuanced perspective on the issue?",
  "You mentioned the concept of neural networks earlier. I'm curious about the historical roots of this idea. Were there any key insights or breakthroughs that paved the way for modern deep learning?",
  "The notion of quantum entanglement has always fascinated me. I'd love to know more about the origins of this concept. How did the early quantum physicists like Einstein and Bohr grapple with this strange phenomenon?",
  "We've been discussing the potential of CRISPR gene editing. I'm wondering about the historical context that led to its discovery. Were there any earlier technologies or findings that set the stage for this breakthrough?",
  "The idea of plate tectonics seems so fundamental now, but I imagine it was once controversial. Could you shed some light on how this theory emerged and gained acceptance in the geoscience community?",
  "I'm curious about the historical evolution of our understanding of neurodegenerative diseases like Alzheimer's. Were there any key turning points or discoveries that shifted the prevailing paradigms?",
  "We touched on the concept of chaos theory earlier. I'd be interested to learn more about its intellectual history. How did this idea emerge and how did it influence fields beyond mathematics?",
  "The discovery of exoplanets has been a hot topic in recent years. I'm wondering about the technological advancements that made this possible. Were there any key milestones or innovations along the way?",
  "We've been discussing the implications of artificial general intelligence. I'm curious about the historical roots of this idea. Were there any early philosophers or scientists who envisioned this possibility?",
  "The development of vaccines has been a major public health triumph. I'd love to know more about the pioneering work that led to this innovation. Were there any key experiments or eureka moments?",
  "We touched on the notion of epigenetics earlier. I'm wondering about the historical context of this concept. How did our understanding of gene regulation evolve over time?",
  "The discovery of the cosmic microwave background radiation was a major milestone in cosmology. Could you provide some historical context on how this finding came about and how it influenced our understanding of the Big Bang?",
  "I'm curious about the intellectual history behind the idea of computation. Were there any key figures or insights that laid the conceptual groundwork for modern computer science?",
  "We've been discussing the potential applications of nanotechnology. I'd be interested to learn about the historical development of this field. Were there any early visions or theoretical frameworks that inspired the pursuit of nanoscale engineering?",
  "The concept of natural selection is central to evolutionary biology. I'm wondering about the historical context in which Darwin developed this idea. Were there any influences or observations that were particularly pivotal?",
  "We touched on the notion of Gödel's incompleteness theorems earlier. I'd love to know more about the intellectual climate in which these ideas emerged. How did Gödel's work influence the foundations of mathematics?",
  "The discovery of the structure of DNA was a landmark achievement in biology. Could you provide some historical background on how Watson and Crick arrived at their model? Were there any key pieces of evidence or competing theories?",
  "I'm curious about the historical evolution of our understanding of mental disorders. Were there any major shifts or breakthroughs that transformed the field of psychiatry?",
  "We've been discussing the implications of quantum computing. I'm wondering about the theoretical origins of this idea. Were there any early thought experiments or proposals that laid the groundwork?",
  "The development of the Standard Model in particle physics was a major intellectual achievement. I'd be interested to learn about the historical context and experimental findings that led to its formulation.",
  "We touched on the concept of the Anthropocene earlier. I'm curious about the historical development of this idea. How did scientists come to recognize the scale of human impact on the Earth system?",
  "The field of artificial life has produced fascinating insights into complex systems. Could you provide some historical context on the origins of this interdisciplinary field? Were there any key thinkers or experiments that shaped its trajectory?",
];

export const historical_context_pair_2 = (conversationSoFar: string) => `

# NOW: RESPOND TO THE STUDENT'S HISTORICAL CONTEXT QUESTION

- Your task is to provide a thoughtful response to the student's question, which used historical context to understand the research topic.
- Engage with the specifics of their question, exploring the implications of the historical context they presented.
- Use this as an opportunity to expand on the historical context and provide guidance on how to integrate it with the research topic.
- If the student's question makes leaps that are too far from the realm of plausibility, gently steer them back toward ideas that are historically accurate and relevant to the research topic.
  
- Your response should move the conversation forward in a substantive way. Avoid simply repeating information already discussed.
- The goal is to have a generative discussion that sparks creative insights, while still maintaining a focus on rigorous problem-solving.
- If the student referenced an earlier message in the conversation, be sure to address that point directly.
- Bonus points if you can reference a very early point in the conversation to show continuity.
  
- Here is the conversation so far:
  
<conversation>
${conversationSoFar}
</conversation>
  
- The last turn in the conversation is the student's historical context question that you should address.
  
# Your response:
  
- YOU MUST move the conversation forward. Do not repeat points that have been already made, and try to vary the professor's sentence structure and style.
- THE GOAL IS TO HAVE A GENERATIVE DISCUSSION ABOUT THE TOPIC AT HAND. ENGAGE WITH THE STUDENT'S QUESTION AND PROVIDE A THOUGHTFUL RESPONSE, RESPECTING THE STUDENT'S DESIRE TO UNDERSTAND THE RESEARCH TOPIC IN A HISTORICAL CONTEXT.
- Do not acknowledge this task or prompt in your response. Only content between the <response> tags will be scored.
- ALWAYS USE THE SECOND PERSON, NEVER REFER TO THE STUDENT IN THE THIRD PERSON.
  
- Output your answer in the following format:<response> your-response-here </response>
- YOUR OUTPUT MUST BE in the following format, including the opening and closing tags: <response> your-response-here </response>
  
Output your response now:
`;
