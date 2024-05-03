import { getRandomValues } from "../logic/get-values";

export const convergent_thinking_pair_1 = (conversationSoFar: string) => `

# NOW: GENERATE A QUESTION USING CONVERGENT THINKING

- Now generate a followup question where you employ convergent thinking to synthesize multiple lines of evidence and arrive at a unified understanding of the research topic.
- Your question should demonstrate a willingness to integrate diverse perspectives and evidence to form a coherent understanding.
- Consider how different pieces of information fit together and what new insights can be gained from their combination.
- The goal is to synthesize the totality of the evidence to deepen the understanding of the research topic.
- Use something that was said in the conversation so far to generate your question.

## Inspirational Examples 
- In the following examples, observe how the student uses convergent thinking to synthesize multiple lines of evidence and arrive at a unified understanding of the research topic:
- Note the integration of diverse perspectives and evidence to form a coherent understanding.
- Most importantly, note how the student's question opens up new avenues for understanding the research topic.
- You can use these examples as inspiration for your convergent thinking question.

<example_convergent_questions>
${getRandomValues(approaches, 3).join("\n")}
</example_convergent_questions>

- These are just examples from different topic areas that are irrelevant to the current topic area. Consider their format and reasoning, but be sure to generate your own unique convergent thinking question given the conversation so far.
- Your example will not include placeholders like "..." but will be a complete question with detail filled in from the conversation.

## CONVERSATION SO FAR:

- Here is the conversation so far:  
<conversation>  
    ${conversationSoFar}
</conversation>

- Think quietly about the last response from the professor and the overall conversation.
- You are now to generate a question that uses convergent thinking to synthesize multiple lines of evidence and arrive at a unified understanding of the research topic.
- REMEMBER: The conversation must progress forward, so your question must elicit a thoughtful response from the professor. The goal is to open up new avenues for understanding the research topic.
- YOU MUST ASK A QUESTION. YOUR QUESTION MUST BE ON THE TOPIC OF THE CONVERSATION SO FAR. YOU MUST DEMONSTRATE CONVERGENT THINKING.

Now output the question, IN THE VOICE OF THE STUDENT, in the following format: <response>your convergent thinking question</response>
- YOU MUST Output your question in the following format, including the opening and closing tags: <response>your question</response>  
- Do not acknowledge the task or prompt in your response. Do not reflect on the question or create additional output outside of the response tags. Only content between the <response> tags will be scored.

Output your response now:
`;

const approaches = [
  "Given the data you presented earlier on ..., how might we integrate that with the findings from ... to form a more comprehensive understanding of the topic?",
  "In light of the research you discussed regarding ..., how could we combine that with the insights from ... to develop a unified perspective on the issue?",
  "Considering the implications of the study you mentioned about ..., how do you see that aligning with the conclusions drawn from ... to create a more nuanced understanding?",
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
];

export const convergent_thinking_pair_2 = (conversationSoFar: string) => `
  # NOW: EXPAND THE LINES OF EVIDENCE AND SYNTHESIZE THE TOTALITY
  
  - Your task is to provide a thoughtful response to the student's question, which used convergent thinking to synthesize multiple lines of evidence and arrive at a unified understanding of the research topic.
  - Engage with the specifics of their question, exploring the implications of the integrated perspectives and evidence they proposed.
  - Use this as an opportunity to expand the lines of evidence and synthesize the totality, incorporating deeper expertise and insights.
  - Provide guidance on how one could take the integrated perspectives and evidence and start to translate them into actionable solutions or new research directions.
  - If the student's question makes leaps that are too far from the realm of plausibility, gently steer them back toward ideas that are innovative yet feasible.
  
  - Your response should move the conversation forward in a substantive way. Avoid simply repeating information already discussed.
  - The goal is to have a generative discussion that sparks creative insights, while still maintaining a focus on rigorous problem-solving.
  - If the student referenced an earlier message in the conversation, be sure to address that point directly.
  - Bonus points if you can reference a very early point in the conversation to show continuity.
  
  - Here is the conversation so far:
  
  <conversation>
  ${conversationSoFar}
  </conversation>
  
  - The last turn in the conversation is the student's convergent thinking question that you should address.
  
  # Your response:
  
  - YOU MUST move the conversation forward. Do not repeat points that have been already made, and try to vary the professor's sentence structure and style.
  - THE GOAL IS TO HAVE A GENERATIVE DISCUSSION ABOUT THE TOPIC AT HAND. ENGAGE WITH THE STUDENT'S QUESTION AND PROVIDE A THOUGHTFUL RESPONSE, RESPECTING THE STUDENT'S DESIRE TO SYNTHESIZE MULTIPLE LINES OF EVIDENCE AND ARRIVE AT A UNIFIED UNDERSTANDING.
  - EXPAND THE LINES OF EVIDENCE AND SYNTHESIZE THE TOTALITY, INCORPORATING DEEPER EXPERTISE AND INSIGHTS.
  - Do not acknowledge this task or prompt in your response. Only content between the <response> tags will be scored.
  - ALWAYS USE THE SECOND PERSON, NEVER REFER TO THE STUDENT IN THE THIRD PERSON.
  
  - Output your answer in the following format:<response> your-response-here </response>
  - YOUR OUTPUT MUST BE in the following format, including the opening and closing tags: <response> your-response-here </response>
  
  Output your response now:
`;
