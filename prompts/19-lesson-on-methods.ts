export const lesson_on_methods_pair_1 = (conversationSoFar: string) => `

# NOW: ASK ABOUT A SPECIFIC METHODOLOGY OR TECHNIQUE RELATED TO THE TOPIC

- Now generate a followup question where you, as the student, ask about a specific methodology, technique, or implementation related to the research topic being discussed.
- Your question should demonstrate a desire to understand the nuances and details of how the research is actually conducted or applied in practice.
- Consider the key methods, heuristics, algorithms, or protocols that are commonly used in this field of study.
- The goal is to engage in a technical discussion about the specifics of how the work is done, beyond just the high-level concepts.
- Use something that was said in the conversation so far to frame your question.

## CONVERSATION SO FAR:

- Here is the conversation so far:  
<conversation>  
    ${conversationSoFar}
</conversation>

- Think quietly about the overall conversation and identify a specific methodology or technique that you could ask about.
- You are now to generate a question that asks for more details about how that methodology or technique works in the context of the research being discussed.
- REMEMBER: The conversation must progress forward, so your question must elicit an in-depth, technical response from the professor about the specifics of the methodology. 
- YOU MUST ASK A QUESTION. YOUR QUESTION MUST BE ON THE TOPIC OF THE CONVERSATION SO FAR AND RELATE TO A SPECIFIC METHODOLOGY OR TECHNIQUE.

Now output the question, IN THE VOICE OF THE STUDENT, in the following format: <response>your methodology question</response>
- YOU MUST Output your question in the following format, including the opening and closing tags: <response>your question</response>  
- Do not acknowledge the task or prompt in your response. Do not reflect on the question or create additional output outside of the response tags. Only content between the <response> tags will be scored.

Output your response now:
`;

export const lesson_on_methods_pair_2 = (conversationSoFar: string) => `

# NOW: PROVIDE AN EXPERT LESSON ON THE SPECIFIC METHODOLOGY OR TECHNIQUE

- Your task is to provide a detailed, technical response to the student's question, which asked about a specific methodology or technique related to the research topic.
- Engage with the specifics of their question, explaining the nuances and details of how that methodology or technique is implemented and used in practice.
- Use this as an opportunity to give an in-depth lesson on the topic, showcasing your expert knowledge of the technical aspects of the research.
- If the student's question makes assumptions that are not entirely accurate, gently clarify and provide the correct information.
  
- Your response should move the conversation forward in a substantive way. Avoid simply repeating information already discussed.
- The goal is to have a technical discussion that dives deep into the specifics of how the research is actually conducted, beyond just the high-level concepts.
- If the student referenced an earlier message in the conversation, be sure to address that point directly.
  
- Here is the conversation so far:
  
<conversation>
${conversationSoFar}
</conversation>
  
- The last turn in the conversation is the student's question about a specific methodology that you should address in detail.
  
# Your response:
  
- YOU MUST move the conversation forward. Do not repeat points that have been already made, and try to vary the professor's sentence structure and style.
- THE GOAL IS TO HAVE AN IN-DEPTH TECHNICAL DISCUSSION ABOUT THE SPECIFIC METHODOLOGY OR TECHNIQUE. ENGAGE WITH THE STUDENT'S QUESTION AND PROVIDE AN EXPERT LESSON ON THE TOPIC.
- EXPLAIN THE NUANCES AND DETAILS OF HOW THE METHODOLOGY IS IMPLEMENTED AND USED IN PRACTICE, SHOWCASING YOUR DEEP TECHNICAL KNOWLEDGE.
- Do not acknowledge this task or prompt in your response. Only content between the <response> tags will be scored.
- ALWAYS USE THE SECOND PERSON, NEVER REFER TO THE STUDENT IN THE THIRD PERSON.
  
- Output your answer in the following format:<response> your-response-here </response>
- YOUR OUTPUT MUST BE in the following format, including the opening and closing tags: <response> your-response-here </response>
  
Output your response now:
`;
