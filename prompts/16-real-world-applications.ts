import { getRandomValues } from "../logic/get_values";

export const real_world_applications_pair_1 = (conversationSoFar: string) => `

# NOW: ASK ABOUT THE REAL-WORLD APPLICATIONS OF THE RESEARCH

- Now generate a followup question where you, as the student, ask about the real-world applications and practical implications of the research topic being discussed.
- Your question should demonstrate a curiosity about how the theoretical concepts translate into tangible impacts on society, technology, medicine, etc. 
- Consider the potential benefits, risks, and ethical considerations of applying the research findings in the real world.
- The goal is to engage in a thoughtful discussion about the broader relevance and significance of the research beyond just academic interest.
- Use something that was said in the conversation so far to frame your question.

## Inspirational Examples 
- In the following examples, observe how the student asks insightful questions about the real-world applications of the research:
- Note the focus on translating theoretical concepts into practical implications.
- Most importantly, note how the student's question prompts a nuanced discussion of the benefits, risks, and ethical considerations.
- You can use these examples as inspiration for your own question.

<example_application_questions>
${getRandomValues(approaches, 3).join("\n")}
</example_application_questions>

- These are just examples from different topic areas that are irrelevant to the current topic area. Consider their format and reasoning, but be sure to generate your own unique question given the conversation so far.

## CONVERSATION SO FAR:

- Here is the conversation so far:  
<conversation>  
    ${conversationSoFar}
</conversation>

- Think quietly about the last response from the professor and the overall conversation.
- You are now to generate a question that asks about the real-world applications and practical implications of the research topic.
- REMEMBER: The conversation must progress forward, so your question must elicit a thoughtful response from the professor. The goal is to discuss the broader relevance and significance of the research.
- YOU MUST ASK A QUESTION. YOUR QUESTION MUST BE ON THE TOPIC OF THE CONVERSATION SO FAR. YOU MUST DEMONSTRATE CURIOSITY ABOUT REAL-WORLD APPLICATIONS.

Now output the question, IN THE VOICE OF THE STUDENT, in the following format: <response>your real-world applications question</response>
- YOU MUST Output your question in the following format, including the opening and closing tags: <response>your question</response>  
- Do not acknowledge the task or prompt in your response. Do not reflect on the question or create additional output outside of the response tags. Only content between the <response> tags will be scored.

Output your response now:
`;

const approaches = [
  "Earlier you mentioned the potential of CRISPR gene editing. How close are we to being able to use this technology to cure genetic diseases in humans? What are the biggest hurdles that still need to be overcome?",
  "You talked about the development of quantum computers. What kinds of real-world problems do you think quantum computing will be most useful for solving? Are there any applications that are particularly exciting or transformative?",
  "We discussed the concept of brain-computer interfaces. What do you think are the most promising near-term applications of this technology? Could it be used to treat neurological conditions or enhance human cognition?",
  "You brought up the idea of using AI for drug discovery. How is this approach currently being used by pharmaceutical companies? What are the advantages over traditional methods of drug development?",
  "Earlier you mentioned the notion of 3D printing organs. How far away are we from being able to 3D print fully functional human organs for transplantation? What are the main technical and regulatory challenges?",
  "We talked about the potential of renewable energy. What do you think it will take for renewables to fully replace fossil fuels? Are there any promising new technologies or policies that could accelerate this transition?",
  "You highlighted the concept of precision medicine. How is genetic data currently being used to personalize treatments for patients? What needs to happen for this approach to become the standard of care?",
  "We discussed the idea of self-driving cars. When do you think fully autonomous vehicles will be widely available to consumers? What impact could they have on things like urban planning and public transportation?",
  "Earlier you mentioned the development of advanced prosthetics. How are technologies like robotics and neural interfaces being used to create more naturalistic and responsive prosthetic limbs? What are the limitations?",
  "You brought up the notion of geoengineering to combat climate change. What are some of the most promising geoengineering approaches being researched? What are the potential risks and ethical considerations?",
  "We talked about the concept of lab-grown meat. How close are we to being able to produce lab-grown meat at a scale and cost that could make it a viable alternative to traditional animal agriculture? What are the biggest obstacles?",
  "You mentioned the potential of virtual and augmented reality. Beyond gaming and entertainment, what are some of the most impactful applications of VR/AR technology? Could it revolutionize fields like education or job training?",
  "Earlier you highlighted the idea of using AI to detect and prevent cyberattacks. How are machine learning algorithms currently being used in cybersecurity? What are the advantages and potential drawbacks of relying on AI for this purpose?",
  "We discussed the development of advanced materials. What are some of the most exciting new materials being researched, and what unique properties do they have? How could they be used to enable new technologies or solve engineering challenges?",
  "You brought up the concept of personalized learning. How is AI currently being used to create adaptive educational experiences? What needs to happen for personalized learning to become widely accessible?",
];

export const real_world_applications_pair_2 = (conversationSoFar: string) => `

# NOW: EXPLAIN THE PRACTICAL APPLICATIONS WITH NUANCE AND EXPERTISE

- Your task is to provide a thoughtful response to the student's question, which asked about the real-world applications and practical uses of the research topic.
- Engage with the specifics of their question, exploring the potential applications, benefits, and challenges in detail.
- Use this as an opportunity to showcase your deep expertise on the topic, providing insights and nuances that demonstrate a sophisticated understanding of the real-world applications.
- If the student's question makes assumptions that are not entirely accurate, gently clarify and provide the correct information.
  
- Your response should move the conversation forward in a substantive way. Avoid simply repeating information already discussed.
- The goal is to have a generative discussion that dives deep into the practical relevance and potential uses of the research.
- If the student referenced an earlier message in the conversation, be sure to address that point directly.
- Bonus points if you can reference a very early point in the conversation to show continuity.
  
- Here is the conversation so far:
  
<conversation>
${conversationSoFar}
</conversation>
  
- The last turn in the conversation is the student's question about real-world applications that you should address.
  
# Your response:
  
- YOU MUST move the conversation forward. Do not repeat points that have been already made, and try to vary the professor's sentence structure and style.
- THE GOAL IS TO HAVE A GENERATIVE DISCUSSION ABOUT THE TOPIC AT HAND. ENGAGE WITH THE STUDENT'S QUESTION AND PROVIDE A THOUGHTFUL RESPONSE, SHOWCASING YOUR DEEP EXPERTISE ON THE REAL-WORLD APPLICATIONS.
- EXPLORE THE POTENTIAL APPLICATIONS, BENEFITS, AND CHALLENGES IN DETAIL, PROVIDING INSIGHTS AND NUANCES THAT DEMONSTRATE A SOPHISTICATED UNDERSTANDING.
- Do not acknowledge this task or prompt in your response. Only content between the <response> tags will be scored.
- ALWAYS USE THE SECOND PERSON, NEVER REFER TO THE STUDENT IN THE THIRD PERSON.
  
- Output your answer in the following format:<response> your-response-here </response>
- YOUR OUTPUT MUST BE in the following format, including the opening and closing tags: <response> your-response-here </response>
  
Output your response now:
`;
