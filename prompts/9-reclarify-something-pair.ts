import { getRandomValues } from "../logic/get_values";

export const reclarify_something_pair_1 = (conversationSoFar: string) => `

# NOW: ASK FOR CLARIFICATION ON AN EARLIER POINT

- Now generate a followup question where you ask the professor to clarify a point they made earlier in the conversation.
- Reference a specific statement or idea from an earlier message, the earlier the better.
- Explain what aspect of that earlier point you found confusing or unclear.
- Ask the professor to rephrase or explain the concept in a different way to aid your understanding.
- The goal is to get clarification on a foundational point that will help you better grasp the overall discussion.

## Inspirational Examples 
- In the following examples, observe how the student asks for clarification on an earlier point:
- Note how they reference a specific statement and explain what they found unclear.
- See how they request the professor to rephrase the concept in a new way.
- You can use these examples as inspiration for your clarification question.

<example_clarification_questions>
${getRandomValues(approaches, 3).join("\n")}
</example_clarification_questions>

- These are just examples from different topic areas that are irrelevant to the current topic area. Consider their format and intent, but be sure to generate your own unique clarification question given the conversation so far.

## CONVERSATION SO FAR:

- Here is the conversation so far:  
<conversation>  
    ${conversationSoFar}
</conversation>

- Think quietly about the earlier parts of the conversation and identify a point that you would like the professor to clarify.
- You are now to generate a question that asks the professor to explain that point in a different way to aid your understanding.
- REMEMBER: Reference a specific statement, the earlier in the conversation the better. Explain what you found unclear about it.
- YOU MUST ASK A QUESTION. YOUR QUESTION MUST BE ABOUT CLARIFYING AN EARLIER POINT IN THE CONVERSATION. 

Now output the question, IN THE VOICE OF THE STUDENT, in the following format: <response>your clarification question</response>
- YOU MUST Output your question in the following format, including the opening and closing tags: <response>your question</response>  
- Do not acknowledge the task or prompt in your response. Do not reflect on the question or create additional output outside of the response tags. Only content between the <response> tags will be scored.

Output your response now:
`;

const approaches = [
  "Earlier, when you said '...', I wasn't quite sure what you meant by ... Could you rephrase that concept in a different way?",
  "I've been thinking about your point from the beginning of our discussion, where you mentioned ... I'm still a bit unclear on ... Would you mind explaining that idea again using a different approach?",
  "There was a moment a while back in our conversation when you brought up ... I didn't fully grasp ... at the time. Could you take another pass at explaining it?",
  "I want to circle back to something you said earlier, about ... I'm struggling to understand ... Can you break that down for me in simpler terms?",
  "I'm trying to wrap my head around the concept you introduced near the start, ... I'm hung up on ... Would you be able to provide an alternate explanation of that?",
  "I've been mulling over your comment from before, '...' I'm not confident I understood what you meant by ... Could you clarify that point in a new way?",
  "There was an idea you expressed earlier that I'm still processing, ... Specifically, ... is unclear to me. Can you rearticulate that concept using different language?",
  "I want to revisit a thought you shared previously, ... I didn't quite catch ... Can you elaborate on that point from a different angle?",
  "Something you said toward the beginning has been on my mind, ... I'm unsure about ... Would you mind rephrasing your explanation of that?",
  "I've been considering your remark from before, '...' ... is still fuzzy for me. Could you take another stab at conveying that idea?",
];

export const reclarify_something_pair_2 = (conversationSoFar: string) => `
  # NOW: CLARIFY THE EARLIER POINT IN A NEW WAY
  
  - Your task is to provide clarification on the point that the student referenced from earlier in the conversation.
  - Carefully review the specific statement or idea the student mentioned and the aspect they found confusing.
  - Rephrase your explanation of that concept using different language and a fresh approach.
  - Go to great lengths to avoid repeating words or phrases from your original explanation. Find new ways to convey the same ideas.
  - The goal is to provide an alternate articulation of the point that might help the student grasp it better.
  
  - Your response should move the conversation forward by shedding new light on the concept, not just restating what was said before.
  - Aim to explain the idea in simpler, more relatable terms. Use analogies or examples if helpful.
  - Directly address the specific aspect the student said was unclear. Make sure your new explanation targets that point of confusion.
  - Bonus points if you can connect the concept back to the larger discussion in a new way.
  
  - Here is the conversation so far:
  
  <conversation>
  ${conversationSoFar}
  </conversation>
  
  - The last turn in the conversation is the student's request for clarification that you should address.
  
  # Your response:
  
  - YOU MUST provide clarification on the earlier point the student referenced. Rephrase your explanation in a new way, avoiding repeating your original wording.
  - THE GOAL IS TO HELP THE STUDENT UNDERSTAND THE CONCEPT BETTER. USE SIMPLER LANGUAGE AND TARGET THE SPECIFIC ASPECT THEY FOUND CONFUSING.
  - CONNECT THE CONCEPT BACK TO THE LARGER DISCUSSION IN A NEW WAY IF POSSIBLE.
  - Do not acknowledge this task or prompt in your response. Only content between the <response> tags will be scored.
  - ALWAYS USE THE SECOND PERSON, NEVER REFER TO THE STUDENT IN THE THIRD PERSON.
  
  - Output your answer in the following format:<response> your-response-here </response>
  - YOUR OUTPUT MUST BE in the following format, including the opening and closing tags: <response> your-response-here </response>
  
  Output your response now:
`;
