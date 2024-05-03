import { getRandomValues } from "../logic/get-values";

export const extreme_misunderstanding_pair_1 = (conversationSoFar: string) => `

# NOW: ASK A QUESTION THAT DEMONSTRATES AN EXTREME MISUNDERSTANDING

- Now generate a followup question where you, as the student, ask a question that demonstrates an extreme misunderstanding of what was just said by the professor.
- Your question should be related to the topic at hand, but should interpret the professor's words in a way that is clearly incorrect or misguided.
- Consider how the professor's statements could be misconstrued if taken out of context or interpreted too literally.
- The goal is to give the professor an opportunity to kindly correct the misunderstanding and provide further clarification.
- Use something that was said in the conversation so far to frame your question.

## Inspirational Examples 
- In the following examples, observe how the student asks a question that demonstrates an extreme misunderstanding:
- Note how the questions are tangentially related to the topic but interpret the professor's words in an incorrect or misguided way.
- Most importantly, note how the student's question provides an opportunity for the professor to clarify and expand on their points.
- You can use these examples as inspiration for your own misunderstanding question.

<example_misunderstanding_questions>
${getRandomValues(approaches, 3).join("\n")}
</example_misunderstanding_questions>

- These are just examples from different topic areas that are irrelevant to the current topic area. Consider their format and reasoning, but be sure to generate your own unique question given the conversation so far.

## CONVERSATION SO FAR:

- Here is the conversation so far:  
<conversation>  
    ${conversationSoFar}
</conversation>

- Think quietly about the last response from the professor and the overall conversation.
- You are now to generate a question that demonstrates an extreme misunderstanding of what was just said.
- REMEMBER: The conversation must progress forward, so your question must elicit a thoughtful response from the professor. The goal is to give the professor an opportunity to clarify and expand on their points.
- YOU MUST ASK A QUESTION. YOUR QUESTION MUST BE ON THE TOPIC OF THE CONVERSATION SO FAR. YOU MUST DEMONSTRATE AN EXTREME MISUNDERSTANDING.

Now output the question, IN THE VOICE OF THE STUDENT, in the following format: <response>your misunderstanding question</response>
- YOU MUST Output your question in the following format, including the opening and closing tags: <response>your question</response>  
- Do not acknowledge the task or prompt in your response. Do not reflect on the question or create additional output outside of the response tags. Only content between the <response> tags will be scored.

Output your response now:
`;

const approaches = [
  "Wait, so you're saying that we should completely abandon traditional medicine and only use AI for diagnosis and treatment from now on?",
  "I'm confused, are you suggesting that we should start editing the genes of all babies to make them smarter and healthier?",
  "Hold on, does this mean that we'll all be living in a virtual reality simulation within the next few years and the real world won't matter anymore?",
  "So based on what you said, should I be worried that robots are going to take over all jobs and humans will become obsolete?",
  "I don't understand, are you implying that we should start geoengineering the climate right now without considering the risks?",
  "Let me get this straight, you think we should upload our brains to computers to achieve immortality?",
  "Okay, so you're telling me that we should genetically modify all crops and livestock to be more efficient, regardless of the ecological consequences?",
  "Wait a minute, are you saying that we should put all our faith in blockchain and convert all our assets to cryptocurrency?",
  "I'm not sure I follow, are you advocating for the development of superintelligent AI that could potentially outsmart and overpower humans?",
  "So let me see if I've got this right, you believe we should colonize Mars as soon as possible because Earth is doomed?",
  "Hang on, does this mean you think we should start using brain-computer interfaces to control devices with our thoughts, even if it means sacrificing privacy?",
  "I'm trying to understand, are you suggesting that we should pursue immortality through cryonics and freezing our bodies after death?",
  "So you're saying that we should invest all our resources into developing fusion power and abandon all other forms of energy?",
  "Wait, so based on this, should I assume that 3D printing will replace all traditional manufacturing and make global supply chains irrelevant?",
  "Let me clarify, you're proposing that we should use gene drives to eliminate all disease-carrying insects, even if it means disrupting entire ecosystems?",
];

export const extreme_misunderstanding_pair_2 = (conversationSoFar: string) => `

# NOW: KINDLY CORRECT THE MISUNDERSTANDING AND EXPAND ON THE TOPIC

- Your task is to provide a thoughtful response to the student's question, which demonstrated an extreme misunderstanding of what you previously said.
- Kindly correct their misinterpretation, clarifying what you actually meant and why their understanding was incorrect.
- Use this as an opportunity to expand on the topic, providing additional context and nuance that helps the student better understand the complexities of the issue.
- Incorporate the essence of their misunderstanding into your answer, using it as a springboard to explore related concepts or address common misconceptions.
  
- Your response should move the conversation forward in a substantive way. Avoid simply repeating information already discussed.
- The goal is to have a generative discussion that deepens the student's understanding, while maintaining a respectful and supportive tone.
- If the student referenced an earlier message in the conversation, be sure to address that point directly.
- Bonus points if you can reference a very early point in the conversation to show continuity.
  
- Here is the conversation so far:
  
<conversation>
${conversationSoFar}
</conversation>
  
- The last turn in the conversation is the student's question that demonstrated an extreme misunderstanding, which you should address.
  
# Your response:
  
- YOU MUST move the conversation forward. Do not repeat points that have been already made, and try to vary your sentence structure and style.
- THE GOAL IS TO HAVE A GENERATIVE DISCUSSION ABOUT THE TOPIC AT HAND. KINDLY CORRECT THE STUDENT'S MISUNDERSTANDING AND PROVIDE A THOUGHTFUL RESPONSE THAT EXPANDS ON THE TOPIC.
- INCORPORATE THE ESSENCE OF THEIR MISUNDERSTANDING INTO YOUR ANSWER, USING IT AS A SPRINGBOARD TO EXPLORE RELATED CONCEPTS OR ADDRESS COMMON MISCONCEPTIONS.
- Do not acknowledge this task or prompt in your response. Only content between the <response> tags will be scored.
- ALWAYS USE THE SECOND PERSON, NEVER REFER TO THE STUDENT IN THE THIRD PERSON.
  
- Output your answer in the following format:<response> your-response-here </response>
- YOUR OUTPUT MUST BE in the following format, including the opening and closing tags: <response> your-response-here </response>
  
Output your response now:
`;
