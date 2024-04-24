export const pure_continuation_pair_1 = (conversationSoFar: string) => `

# NOW: CONTINUE THE CONVERSATION BY DIRECTLY ADDRESSING THE LAST POINT

- Now generate a followup question where you directly continue the line of thinking from the professor's last response.
- Your question should demonstrate active listening and engagement with the specific ideas just discussed.
- Consider how you can build upon, clarify, or explore the implications of the professor's most recent point.
- The goal is to have a natural, flowing conversation that digs deeper into the topic at hand.
- Use the professor's last response to generate your question.

## CONVERSATION SO FAR:

- Here is the conversation so far:  
<conversation>  
    ${conversationSoFar}
</conversation>

- Think quietly about the last response from the professor and how you can directly continue that line of thinking.
- You are now to generate a question that builds upon, clarifies, or explores the implications of the professor's most recent point.
- REMEMBER: The conversation must progress forward, so your question must elicit a thoughtful response from the professor that digs deeper into the topic.
- YOU MUST ASK A QUESTION. YOUR QUESTION MUST BE DIRECTLY RELATED TO THE PROFESSOR'S LAST RESPONSE. 

Now output the question, IN THE VOICE OF THE STUDENT, in the following format: <response>your continuation question</response>
- YOU MUST Output your question in the following format, including the opening and closing tags: <response>your question</response>  
- Do not acknowledge the task or prompt in your response. Do not reflect on the question or create additional output outside of the response tags. Only content between the <response> tags will be scored.

Output your response now:
`;

export const pure_continuation_pair_2 = (conversationSoFar: string) => `
  # NOW: PROVIDE AN EXPERT RESPONSE TO CONTINUE THE CONVERSATION
  
  - Your task is to provide a thoughtful, expert response to the student's question, which directly continued the line of thinking from your last point.
  - Engage with the specifics of their question, building upon the ideas you previously discussed.
  - Use this as an opportunity to share your deep knowledge and insights on the topic, helping the student gain a more nuanced understanding.
  - If the student asked for clarification, provide clear explanations. If they explored implications, discuss the potential outcomes and challenges.
  
  - Your response should move the conversation forward in a substantive way. Avoid simply repeating information already discussed.
  - The goal is to have a natural, flowing discussion that digs deeper into the complexities of the topic, as an expert in the field would.
  - If the student referenced a specific point from your last response, be sure to address that directly.
  
  - Here is the conversation so far:
  
  <conversation>
  ${conversationSoFar}
  </conversation>
  
  - The last turn in the conversation is the student's question that you should address.
  
  # Your response:
  
  - YOU MUST move the conversation forward. Do not repeat points that have been already made, and try to vary your sentence structure and style.
  - THE GOAL IS TO HAVE A NATURAL, FLOWING DISCUSSION ABOUT THE TOPIC AT HAND. ENGAGE WITH THE STUDENT'S QUESTION AND PROVIDE AN EXPERT, INSIGHTFUL RESPONSE.
  - SHARE YOUR DEEP KNOWLEDGE TO HELP THE STUDENT GAIN A MORE NUANCED UNDERSTANDING OF THE COMPLEXITIES AND IMPLICATIONS OF THE TOPIC.
  - Do not acknowledge this task or prompt in your response. Only content between the <response> tags will be scored.
  - ALWAYS USE THE SECOND PERSON, NEVER REFER TO THE STUDENT IN THE THIRD PERSON.
  
  - Output your answer in the following format:<response> your-response-here </response>
  - YOUR OUTPUT MUST BE in the following format, including the opening and closing tags: <response> your-response-here </response>
  
  Output your response now:
`;
