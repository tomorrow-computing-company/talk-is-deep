import { getRandomValues } from "../logic/get_values";

export const lateral_thinking_pair_1 = (conversationSoFar: string) => `

# NOW: GENERATE A QUESTION USING LATERAL THINKING

- Now generate a followup question where you employ lateral thinking to come up with novel and unconventional ideas related to the topic at hand.  
- Your question should demonstrate a willingness to think outside the box and explore the problem space from new angles.
- Consider analogies from other domains, reframe the problem in a new way, or question fundamental assumptions.
- The goal is to spark creative insights that could lead to innovative solutions or a deeper understanding of the issue.
- Use something that was said in the conversation so far to generate your question.

## Inspirational Examples 
- In the following examples, observe how the student uses lateral thinking to generate novel ideas:
- Note the use of analogies, problem reframing, and the questioning of assumptions.
- Most importantly, note how the student's question opens up new avenues for creative exploration.
- You can use these examples as inspiration for your lateral thinking question.

<example_lateral_questions>
${getRandomValues(approaches, 3).join("\n")}
</example_lateral_questions>

- These are just examples from different topic areas that are irrelevant to the current topic area. Consider their format and reasoning, but be sure to generate your own unique lateral thinking question given the conversation so far.

## CONVERSATION SO FAR:

- Here is the conversation so far:  
<conversation>  
    ${conversationSoFar}
</conversation>

- Think quietly about the last response from the professor and the overall conversation.
- You are now to generate a question that uses lateral thinking to spark novel ideas and insights related to the topic at hand.
- REMEMBER: The conversation must progress forward, so your question must elicit a thoughtful response from the professor. The goal is to open up new avenues for creative exploration.
- YOU MUST ASK A QUESTION. YOUR QUESTION MUST BE ON THE TOPIC OF THE CONVERSATION SO FAR. YOU MUST DEMONSTRATE LATERAL THINKING.

Now output the question, IN THE VOICE OF THE STUDENT, in the following format: <response>your lateral thinking question</response>
- YOU MUST Output your question in the following format, including the opening and closing tags: <response>your question</response>  
- Do not acknowledge the task or prompt in your response. Do not reflect on the question or create additional output outside of the response tags. Only content between the <response> tags will be scored.

Output your response now:
`;

const approaches = [
  "What if we thought about this problem like a game of chess? In chess, sometimes you have to sacrifice a piece to gain a strategic advantage. Is there a way we could 'sacrifice' something in the short term to achieve our long-term goals?",
  "I've been thinking about the concept of 'beginner's mind' from Zen Buddhism. What insights might we gain if we tried to approach this issue as if we were complete novices, without any preconceptions?",
  "You know how in improv comedy, performers have to roll with whatever crazy scenario their partner throws at them? What if we took an 'improv' approach to this problem, where we build off each other's ideas no matter how wild they seem at first?",
  "I recently learned about the concept of 'biomimicry', where engineers take inspiration from nature to solve complex problems. Are there any biological systems or processes we could use as a model for tackling this issue?",
  "In the movie 'Inception', they plant an idea deep in someone's subconscious to influence their behavior. What if we could 'incept' people with the motivation to change their habits related to this problem?",
  "Salvador Dali used to intentionally sleep deprive himself to induce a dream-like state for painting surreal images. What sort of creative solutions might we come up with if we let our minds wander freely, even to the point of 'dreaming' about the problem?",
  "In quantum physics, particles can exist in multiple states at once until observed. What if we considered multiple contradictory solutions simultaneously, then figured out how to 'collapse' them into one optimal solution?",
  "There's a creativity exercise where you combine two seemingly unrelated objects to invent something new, like a 'spork'. What unexpected combinations could we make to address this challenge?",
  "In the culinary world, fusion cuisine often leads to innovative flavor combinations. What if we took a 'fusion' approach, mixing and matching ideas from different fields to create a novel solution?",
  "Elon Musk has said he likes to 'reason from first principles' rather than by analogy. What if we stripped this problem down to its most fundamental components and built a solution from the ground up?",
  "In the book 'Flatland', 2D shapes can't comprehend the existence of a 3rd dimension. Are we constrained by our own limited dimensionality of thinking on this issue? What would a '4D' perspective look like?",
  "Picasso went through a 'Blue Period' where he only painted in shades of blue. What insights might emerge if we constrained our thinking to one specific aspect of this problem?",
  "In mythology, the trickster archetype often solves problems through clever workarounds and rule-breaking. How could we 'trick' the system or work around existing constraints to find a solution?",
  "Physicists sometimes imagine a hypothetical 'perfect' system as a starting point, like a frictionless plane. What would a 'perfect' solution to this problem look like if we suspended disbelief about real-world limitations?",
  "In the movie 'Minority Report', crimes are prevented before they occur. What if we could anticipate and prevent the downstream consequences of this issue before they even happen?",
];

export const lateral_thinking_pair_2 = (conversationSoFar: string) => `
  # NOW: ENCOURAGE CREATIVE EXPLORATION WHILE EMPHASIZING RIGOR
  
  - Your task is to provide a thoughtful response to the student's question, which used lateral thinking to generate novel ideas related to the topic at hand.
  - Engage with the specifics of their question, exploring the implications of the unconventional perspective they proposed.
  - Use this as an opportunity to encourage further creative ideation, while also emphasizing the need to eventually ground ideas in reality.
  - Provide guidance on how one could take the novel ideas and start to translate them into testable hypotheses or actionable solutions.
  - If the student's question makes leaps that are too far from the realm of plausibility, gently steer them back toward ideas that are innovative yet feasible.
  
  - Your response should move the conversation forward in a substantive way. Avoid simply repeating information already discussed.
  - The goal is to have a generative discussion that sparks creative insights, while still maintaining a focus on rigorous problem-solving.
  - If the student referenced an earlier message in the conversation, be sure to address that point directly.
  - Bonus points if you can reference a very early point in the conversation to show continuity.
  
  - Here is the conversation so far:
  
  <conversation>
  ${conversationSoFar}
  </conversation>
  
  - The last turn in the conversation is the student's lateral thinking question that you should address.
  
  # Your response:
  
  - YOU MUST move the conversation forward. Do not repeat points that have been already made, and try to vary the professor's sentence structure and style.
  - THE GOAL IS TO HAVE A GENERATIVE DISCUSSION ABOUT THE TOPIC AT HAND. ENGAGE WITH THE STUDENT'S QUESTION AND PROVIDE A THOUGHTFUL RESPONSE, RESPECTING THE STUDENT'S DESIRE TO EXPLORE NOVEL IDEAS.
  - ENCOURAGE FURTHER CREATIVE IDEATION WHILE ALSO EMPHASIZING THE NEED FOR RIGOR. GUIDE THE STUDENT ON HOW TO TRANSLATE NOVEL IDEAS INTO TESTABLE HYPOTHESES.
  - Do not acknowledge this task or prompt in your response. Only content between the <response> tags will be scored.
  - ALWAYS USE THE SECOND PERSON, NEVER REFER TO THE STUDENT IN THE THIRD PERSON.
  
  - Output your answer in the following format:<response> your-response-here </response>
  - YOUR OUTPUT MUST BE in the following format, including the opening and closing tags: <response> your-response-here </response>
  
  Output your response now:
`;
