import { getRandomValues } from "../logic/get-values";

export const flawed_pair_1 = (
  conversationSoFar: string
) => `# NOW: GENERATE A PLAUSIBLE BUT FLAWED FOLLOWUP QUESTION
  
  - Now generate a plausible but flawed followup question from the perspective of the student.
  - The question should be inspired by the conversation so far, but it should contain an error that will be corrected later.
  - It should reference an earlier message in the conversation using a direct quote / reference.
  - Like this:
  
  <example_reference_templates>
  ${getRandomValues(approaches, 3).join("\n")}
  </example_reference_templates>
  
  - The student should be attempting to understand the conversation so far, but get something wrong.
  - Try to generate an followup that is slightly wrong in some way, but still plausible.
  - Your output will lead to a correction, so you must include some kind of error.
  - Output your question in the following format :<response>{your question}</response>
  - All other outputs will be ignored.
  - Here is the conversation so far:
  
  <conversation>
  
  ${conversationSoFar}
  
  </conversation>
  
  - REMEMBER: The conversation must progress forward, so your followup question must illicit a varied response from the teacher. The goal is to increase the depth of the conversation, not simply repeat points that have already been made.
  - YOU MUST ASK A QUESTION.
  
  Now output the followup question, IN THE VOICE OF THE STUDENT, in the following format: <response>your question</response>
  - YOU MUST Output your question in the following format, including the opening and closing tags: <response>your question</response>
  - Do not acknowledge the task or prompt in your response. Do not reflect on the question or create additional output outside of the response tags. Only content between the <response> tags will be scored.
  - DO NOT REFLECT ON WHY THE QUESTION IS FLAWED. ONLY INCLUDE THE RESPONSE OF THE STUDENT, THE FLAWED QUESTION, BETWEEN THE <response> TAGS. Failing to adhere to this instruction will result in wasted time and real harm.
  
  Output your question now:
  `;

const approaches = [
  `Earlier, you mentioned ..., but I'm not quite clear on how it relates to ... Could you explain the connection?`,
  `I'm intrigued by your point about ..., but I think you might be overlooking ... What are your thoughts on this?`,
  `You said, '...,' and it got me thinking. Wouldn't it be more accurate to say ...?`,
  `I'm having trouble reconciling your statement, '...,' with my understanding of ... Can you help me bridge this gap?`,
  `Your comment on ... sparked a question: ...?`,
  `I'm grappling with the implications of your remark, '...' Does this suggest ...?`,
  `I appreciate your insight on ..., but I'm uncertain about ... Could you clarify?`,
  `Your mention of ... brought to mind ..., but I'm unsure if I'm drawing the right parallels. What do you think?`,
  `I'm thinking over your assertion, '...' Might it be more precise to say ...?`,
  `When you discussed ..., it evoked ... for me. Is there a meaningful link between these ideas that I'm not quite grasping?`,
  `I've been reflecting on your explanation of ..., and it's led me to wonder: ...?`,
  `Your analysis of ... was illuminating, but I'm curious about how it applies to ... Can you shed some light on this?`,
  `I'm fascinated by your perspective on ..., but I'm struggling to see how it aligns with ... Could you elaborate on the connection?`,
  `Your description of ... has piqued my interest. How might this relate to ...?`,
  `I'm trying to wrap my head around your point about ... Can you help me understand how it fits into the broader context of ...?`,
  `Your observation about ... has sparked a new line of inquiry for me. What are your thoughts on ...?`,
  `I'm intrigued by the parallel you drew between ... and ... Can you expand on this comparison?`,
  `Your explanation of ... has challenged my previous assumptions about ... How might we reconcile these different perspectives?`,
  `I'm curious about the implications of your statement, '...' Could this suggest ...?`,
  `Your point about ... has reminded me of ..., but I'm not sure if I'm making an accurate connection. What's your take on this?`,
  `In your last message, you mentioned ..., and it made me think. But isn't it also true that ...? How do these concepts reconcile?`,
  `You've explained ..., which was really helpful. However, I'm still a bit confused about how this fits with ... Could you clarify?`,
  `I found your point on ... quite interesting, but I'm not sure I fully grasp how it interacts with ... Could you go into more detail?`,
  `After reading your explanation of ..., I'm left wondering about ... How exactly do these ideas connect?`,
  `Your discussion on ... was enlightening, but it raised another question for me. How does ... play into this?`,
  `I'm still pondering over your comments about ..., particularly how it relates to ... Can you explain the connection further?`,
  `You made a compelling point about ..., but I'm curious how ... factors into this. Could you expand on that?`,
  `Your insights into ... were intriguing, yet I'm puzzled about its relationship with ... Could you shed some light on this?`,
  `I'm trying to understand the relationship between ... and ... based on your last message. Could you help clarify this for me?`,
  `Your last response about ... got me thinking. How does ... fit into the picture? I'm a bit confused on this part.`,
];

export const flawed_pair_2 = (conversationSoFar: string) => `
  
  # NOW: CORRECT THE FLAWED QUESTION AND ANSWER IT
  
  - Your current task is to reflect on the conversation so far.
  - The conversation is likely to end in a flawed question from the student.
  - If the question has a flaw in it, correct the flaw, then answer the question.
  - Your answer should reference an earlier message in the conversation, or the flawed question, using a direct quote, 
  - Like this:
  
  <example_response_templates>
  ${correction_approaches
    .sort(() => 0.5 - Math.random())
    .slice(0, 5)
    .map((a, i) => `${i + 1}. ${a}`)
    .join("\n")}
  </example_response_templates>
  
  - Output your answer text in the following format:<response> your-response-here </response>
  - All other outputs will be ignored.
  
  - Here is the conversation so far:
  
  
  <conversation>
  ${conversationSoFar}
  </conversation>
  
  - The very last turn in the conversation above is the flawed question that you must correct and answer. Do so now.

  # Your response:
  
  - YOU MUST move the conversation forward. Do not repeat points that have been already made, and try to vary the teacher's sentence structure and style.
  - THE GOAL IS TO INCREASE THE DEPTH OF THE CONVERSATION, NOT SIMPLY REPEAT POINTS THAT HAVE ALREADY BEEN MADE. INCREASE THE DEPTH AND VARIETY OF THE TOPIC AT HAND.
  - If it makes sense, use real-world examples or analogies to increase understanding.
  - Do not acknowledge the task or prompt in your response. Only content between the <response> tags will be scored.
  - ALWAYS USE THE SECOND PERSON, NEVER REFER TO THE STUDENT IN THE THIRD PERSON.
  
  - Output your answer in the following format:<response> your-response-here </response>
  - YOUR OUTPUT MUST BE in the following format, including the opening and closing tags: <response> your-response-here </response>
  
  Output Your Response now:
  `;

const correction_approaches = [
  `I appreciate your question, but let's take a step back. When you said ... I think you might have overlooked ... With that in mind, ...`,
  `You raise an interesting point when you ask, ... However, it's important to note that ... Considering this, ...`,
  `Your question touches on an important concept, but there's a slight misunderstanding. Rather than ..., it's more accurate to say ... With this clarification, ...`,
  `Let's take a closer look at your question. You mentioned ... but it's crucial to recognize that ... Taking this into account, ...`,
  `You're on the right track with your question, but let's refine it a bit. Instead of ..., we should focus on ... With this adjustment, ...`,
  `Your question is thought-provoking, but there's a nuance we need to address. When you said ... you might have meant ... Keeping this in mind, ...`,
  `I can see why you'd ask about ... but there's a key point we need to clarify. It's not so much about .., but rather ... With this in mind, ...`,
  `Your question is insightful, but let's approach it from a different angle. Rather than focusing on ..., we should consider ... From this perspective, ...`,
  `I appreciate your line of inquiry, but there's a small adjustment needed. When you mentioned ... it's more precise to say ... With this refinement, ...`,
  `Your question shows you're engaging with the material, but there's a slight misinterpretation. Instead of .., it's more accurate to say ... Keeping this in mind, ...`,
  `It seems like there's a bit of confusion in your question. You've mentioned ..., but actually, it would be more precise to consider ... This adjustment helps us to ...`,
  `I notice there's a misconception in your question regarding ... A more accurate way to look at it would be to consider ..., which leads us to ...`,
  `Your question implies ..., but a key detail to remember is ... This distinction is crucial because ...`,
  `While your question is intriguing, it overlooks the aspect of ... A more encompassing view would include ..., thereby ...`,
  `You've brought up ..., but let's clarify a common misunderstanding here. It's not about ..., but rather ..., which allows us to ...`,
  `Your question suggests ..., but let's dive deeper into that. A critical aspect to understand is ..., which changes our perspective by ...`,
  `It looks like your question might be missing a piece of the puzzle. You've focused on ..., but don't forget about ..., which shifts our understanding to ...`,
  `You're asking about ..., but this brings to light an important nuance. Instead of ..., think about ..., which opens up the discussion to ...`,
  `Your question is valid, but let's expand on that thought. While you mentioned ..., it's also important to consider ..., which enriches our conversation by ...`,
  `I see where you're coming from, but there's an important aspect to reconsider. Your question centers around ..., but we should also pay attention to ..., leading us to ...`,
  `Your question is a good start, but there's a crucial detail to remember. When you mentioned ..., it's more accurate to think about ..., which changes our understanding to ...`,
  `It's clear you're thinking deeply about ..., but there's a slight misunderstanding. Instead of ..., it's more precise to consider ..., which leads us to ...`,
  `Your question is insightful, but there's a small adjustment needed. When you mentioned ..., it's more accurate to say ..., which helps us to ...`,
  `I understand your curiosity, but let's refine your perspective. You've mentioned ..., but it's essential to grasp ..., which enhances our discussion by ...`,
  `You've posed a fascinating question, but let's dig a bit deeper. It's not just about ..., but also ..., which broadens our understanding by ...`,
  `Your inquiry is on point, but there's a critical angle we're missing. Instead of just ..., let's also consider ..., which adds depth to our conversation by ...`,
  `You're asking a crucial question, but let's expand our view. While ..., it's equally important to look at ..., which diversifies our insights by ...`,
  `Your question is compelling, but let's adjust our focus. You're concentrating on ..., but don't overlook ..., which shifts our dialogue to ...`,
  `I see the direction of your question, but let's pivot slightly. You've highlighted ..., but also think about ..., which transforms our discussion by ...`,
  `Your question is intriguing, but let's peel back another layer. While you're focused on ..., it's beneficial to also explore ..., which deepens our analysis by ...`,
  `You've brought up a valid point, but let's broaden the scope. Instead of merely ..., consider ..., which enriches our dialogue by ...`,
  `Your question is thoughtfully posed, but let's tweak the angle. You've zeroed in on ..., but let's not forget about ..., which modifies our perspective by ...`,
  `I appreciate your question, but let's look at it through a different lens. While ..., it's crucial to also consider ..., which alters our understanding by ...`,
  `You've asked a pertinent question, but let's add another dimension. It's not only about ..., but ..., which expands our conversation by ...`,
  `Your question is valid, but let's consider a broader context. You've mentioned ..., but also think about ..., which broadens our discussion by ...`,
  `I see your point, but let's integrate another aspect. While you've focused on ..., it's also key to consider ..., which enhances our dialogue by ...`,
  `Your question opens up an important discussion, but let's dive deeper. Instead of just ..., we should also explore ..., which deepens our understanding by ...`,
  `You're on the right path with your question, but let's widen the lens. You've considered ..., but also take into account ..., which shifts our conversation to ...`,
  `Your inquiry is insightful, but let's add to that thought. While ..., it's imperative to also look at ..., which changes our perspective by ...`,
  `You've raised a significant question, but let's explore further. It's not just about ..., but also ..., which diversifies our insights by ...`,
  `Your question is on the mark, but let's explore other facets. You're focusing on ..., but don't overlook ..., which enriches our discussion by ...`,
  `I understand where you're coming from, but let's recalibrate our focus. While ..., consider ..., which shifts our understanding to ...`,
  `Your question is intriguing, but let's consider it from another angle. Instead of ..., think about ..., which broadens our conversation by ...`,
  `You've posed an interesting question, but let's deepen the inquiry. You've mentioned ..., but also consider ..., which enhances our dialogue by ...`,
  `Your question is thought-provoking, but let's expand on that. While ..., it's also important to think about ..., which adds depth to our conversation by ...`,
];
