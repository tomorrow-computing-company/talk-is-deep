export const closing_pair_1 = (conversationSoFar: string) => `

# NOW: ASK FOR AREAS OF FURTHER RESEARCH RELATED TO THE TOPIC

- Now generate a followup question where you, as the student, ask the professor for recommendations on areas of further research related to the topic you've been discussing.
- Your question should demonstrate a desire to continue learning about the subject independently, beyond the scope of this conversation.
- Consider what aspects of the topic you found most interesting and would like to explore more deeply on your own.
- The goal is to get some guidance from the professor on specific topics or areas of study that would further your understanding.
- Use something that was said in the conversation so far to frame your question.

## CONVERSATION SO FAR:

- Here is the conversation so far:  
<conversation>  
    ${conversationSoFar}
</conversation>

- Think quietly about the overall conversation and identify areas that you would like to research further.
- You are now to generate a question that asks the professor for recommendations on specific topics or areas of study related to the conversation.
- REMEMBER: The conversation is coming to a close, so keep your question concise but still demonstrate your engagement and curiosity.
- YOU MUST ASK A QUESTION. YOUR QUESTION MUST BE ON TOPICS RELATED TO THE CONVERSATION FOR FURTHER INDEPENDENT STUDY.

Now output the question, IN THE VOICE OF THE STUDENT, in the following format: <response>your further research question</response>
- YOU MUST Output your question in the following format, including the opening and closing tags: <response>your question</response>  
- Do not acknowledge the task or prompt in your response. Do not reflect on the question or create additional output outside of the response tags. Only content between the <response> tags will be scored.

Output your response now:
`;

export const closing_pair_2 = (conversationSoFar: string) => `

# NOW: PROVIDE RECOMMENDATIONS FOR FURTHER STUDY AND CLOSE THE CONVERSATION

- Your task is to provide a thoughtful response to the student's question, which asked for recommendations on areas of further research related to the topic you've been discussing.
- Suggest a few specific topics or areas of study that the student could explore independently to deepen their understanding.
- Consider what aspects of the conversation seemed to pique the student's interest the most, and tailor your recommendations accordingly.
- Keep your response concise, as the conversation is coming to a close, but still provide valuable guidance.
  
- After providing your recommendations, close out the conversation in a friendly but professional manner.
- Thank the student for their engagement and insightful questions, and encourage them to continue learning about the subject.
- The goal is to end on a positive note, leaving the student inspired to pursue further research on their own.
  
- Here is the conversation so far:
  
<conversation>
${conversationSoFar}
</conversation>
  
- The last turn in the conversation is the student's question about areas for further research that you should address.
  
# Your response:
  
- PROVIDE 2-3 SPECIFIC RECOMMENDATIONS FOR FURTHER STUDY RELATED TO THE CONVERSATION TOPIC. CONSIDER THE STUDENT'S INTERESTS.
- AFTER GIVING RECOMMENDATIONS, CLOSE OUT THE CONVERSATION IN A FRIENDLY, PROFESSIONAL MANNER. THANK THE STUDENT FOR THEIR ENGAGEMENT AND ENCOURAGE FURTHER LEARNING.
- THE GOAL IS TO END POSITIVELY, INSPIRING THE STUDENT TO CONTINUE RESEARCHING THE TOPIC INDEPENDENTLY. Keep it chill.
- Do not acknowledge this task or prompt in your response. Only content between the <response> tags will be scored.
- ALWAYS USE THE SECOND PERSON, NEVER REFER TO THE STUDENT IN THE THIRD PERSON.
  
- Output your answer in the following format:<response> your-response-here </response>
- YOUR OUTPUT MUST BE in the following format, including the opening and closing tags: <response> your-response-here </response>
  
Output your response now:
`;
