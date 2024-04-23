export const counterfactual_reasoning_pair_1 = (conversationSoFar: string) => `

# NOW: GENERATE A FOLLOWUP QUESTION THAT USES COUNTERFACTUAL REASONING

- Now generate a followup question to the instructor's last response that utilizes counterfactual reasoning to explore how conclusions about the current conversation topic may have changed under alternative conditions.
- It should reference an earlier message in the conversation using a direct quote / reference.

## Inspirational Examples
- In the following examples, counterfactual reasoning is used to explore how conclusions about the current conversation topic may have changed under alternative conditions.
- Observe how the student poses a "what if" scenario to consider how the conversation topic might be different under other circumstances.
- Observe how the student uses counterfactual thinking to challenge assumptions and explore alternative possibilities.
- Most importantly, note how the student's question directly references an earlier message in the conversation, creating a coherent flow.
- You can use these examples as inspiration for your followup question.

<example_counterfactual_questions>
${approaches
  .sort(() => 0.5 - Math.random())
  .slice(0, 5)
  .map((a, i) => `${i + 1}. ${a}`)
  .join("\n")}
</example_counterfactual_questions>

- These are just examples. Consider their format and depth, but be sure to generate your own unique followup question given the conversation so far.

## CONVERSATION SO FAR:

- Here is the conversation so far:
<conversation>  
    ${conversationSoFar}
</conversation>

# Your Response
- Think quietly about the last response from the professor and the overall conversation.
- You are now to generate a followup question that uses counterfactual reasoning to explore how conclusions about the current conversation topic may have changed under alternative conditions.
- REMEMBER: The conversation must progress forward, so your followup question must illicit a varied response from the teacher. The goal is to increase the depth of the conversation, not simply repeat points that have already been made.
- YOU MUST ASK A QUESTION. YOUR QUESTION MUST BE ON THE TOPIC OF THE CONVERSATION SO FAR. YOU MUST USE COUNTERFACTUAL REASONING TO EXPLORE HOW CONCLUSIONS MAY HAVE CHANGED UNDER ALTERNATIVE CONDITIONS.

Now output the followup question, IN THE VOICE OF THE STUDENT, in the following format: <response>your counterfactual question</response>
- YOU MUST Output your question in the following format, including the opening and closing tags: <response>your question</response>
- Do not acknowledge the task or prompt in your response. Do not reflect on the question or create additional output outside of the response tags. Only content between the <response> tags will be scored.

Output your response now:
`;

const approaches = [
  "You mentioned that 'the study found a significant correlation between sleep duration and cognitive performance'. But what if the participants had been allowed to nap during the day? How might that have changed the observed relationship between sleep and cognition?",
  "Earlier you said 'the experiment demonstrated that plants grow faster when exposed to classical music'. If the plants had been exposed to heavy metal music instead, do you think their growth rates would have been different? How so?",
  "I've been thinking about when you said 'the survey results suggested that people prefer dogs over cats as pets'. In a hypothetical world where cats were more sociable and dogs were more aloof, how might pet ownership preferences have played out instead?",
  "You brought up an interesting point about 'the economic impact of remote work on urban centers'. Let's imagine for a moment that remote work had been widely adopted a decade earlier. In that case, would the conclusion that 'cities are experiencing a decline in revenue' still hold true? Why or why not?",
  "I want to revisit something you mentioned earlier: 'the research indicated that a plant-based diet is associated with lower risk of heart disease'. Suppose that the study had been conducted in a population with limited access to fresh fruits and vegetables. How might our understanding of the relationship between diet and heart health be different under those circumstances?",
  "You mentioned that 'the analysis revealed a gender wage gap in the tech industry'. But what if the study had controlled for years of experience and job role? How might that have changed the observed disparity in wages between men and women?",
  "Earlier you said 'the findings suggested that social media use is linked to increased feelings of loneliness'. If the study had been conducted during a period of widespread social isolation, like a pandemic lockdown, do you think the relationship between social media and loneliness would have been different? How so?",
  "I've been thinking about when you said 'the experiment showed that students learn better when they receive immediate feedback'. In a hypothetical world where feedback was delayed by a week, how might student learning outcomes have played out instead?",
  "You brought up an interesting point about 'the environmental benefits of renewable energy sources'. Let's imagine for a moment that the cost of renewable energy had remained significantly higher than fossil fuels. In that case, would the conclusion that 'countries are transitioning to clean energy' still hold true? Why or why not?",
  "I want to revisit something you mentioned earlier: 'the study found that regular exercise improves mental health'. Suppose that the participants had been engaging in extreme levels of exercise, like ultra-marathons. How might our understanding of the relationship between exercise and mental well-being be different under those circumstances?",
  "You mentioned that 'the research suggested that bilingualism delays the onset of dementia'. But what if the study had been conducted in a population where multilingualism was the norm? How might that have changed the observed cognitive benefits of speaking multiple languages?",
  "Earlier you said 'the analysis showed that income inequality has been rising in developed countries'. If the study had focused on developing nations instead, do you think the trends in income inequality would have been different? How so?",
  "I've been thinking about when you said 'the experiment demonstrated that children prefer playing with toys that have faces'. In a hypothetical world where facial features were absent from toys, how might children's play preferences have played out instead?",
  "You brought up an interesting point about 'the psychological impact of social comparison on self-esteem'. Let's imagine for a moment that social media platforms had never existed. In that case, would the conclusion that 'people feel worse about themselves when exposed to idealized images of others' still hold true? Why or why not?",
  "I want to revisit something you mentioned earlier: 'the study found that exposure to nature reduces stress levels'. Suppose that the participants had been exposed to virtual nature scenes instead of real outdoor environments. How might our understanding of the stress-reducing effects of nature be different under those circumstances?",
  "You mentioned that 'the research indicated a link between processed food consumption and obesity rates'. But what if the study had been conducted in a population with limited access to processed foods? How might that have changed the observed relationship between diet and body weight?",
  "Earlier you said 'the analysis suggested that job automation will lead to widespread unemployment'. If the study had assumed a rapid increase in job retraining programs, do you think the predicted impact of automation on employment would have been different? How so?",
  "I've been thinking about when you said 'the experiment showed that people are more likely to donate to charities when they feel emotionally connected to the cause'. In a hypothetical world where empathy was significantly diminished, how might charitable giving patterns have played out instead?",
  "You brought up an interesting point about 'the educational benefits of project-based learning'. Let's imagine for a moment that schools had unlimited resources for hands-on projects. In that case, would the conclusion that 'students learn better through practical application' still hold true? Why or why not?",
  "I want to revisit something you mentioned earlier: 'the study found that meditation enhances focus and concentration'. Suppose that the participants had been practicing meditation in a noisy and chaotic environment. How might our understanding of the cognitive benefits of meditation be different under those circumstances?",
  "Wait, hold on. When you said 'the study showed that people who wake up early are more productive', what if the participants were all night owls? Like, how might that have totally flipped the results on their head?",
  "Okay, so earlier you mentioned that 'the research found that listening to music while studying improves memory retention'. But let's be real, what if the music was super distracting, like heavy metal or something? Do you think it would've had the same effect? I'm not so sure.",
  "Hey, I can't stop thinking about what you said earlier, about how 'the experiment suggested that plants grow faster when talked to'. Okay, but imagine if the plants were talked to in a really mean way. Like, how might that have changed things up?",
  "So, you know how you said 'the analysis indicated that social media influencers have a significant impact on consumer behavior'? Alright, but picture this: what if social media didn't exist? I wonder if people would still be so easily swayed.",
  "I've been mulling over that point you made about 'the study finding that people who read fiction have higher levels of empathy'. But let's switch it up and say the participants only read non-fiction. How might that have played out differently?",
  "Yo, when you said 'the research showed that people who spend more time in nature have lower levels of stress', it got me thinking. What if the study was done in a big city, with barely any green space? Would the results have been the same? I doubt it.",
  "Okay, so you mentioned that 'the experiment demonstrated that children who learn a second language have better problem-solving skills'. But what if the second language was super easy to learn? Would it still have had the same brain-boosting effects?",
  "Hey, remember when you said 'the analysis suggested that remote work leads to increased job satisfaction'? Well, what if the study was done during a time when everyone was forced to work from home, like during a lockdown? I bet the results would've been way different.",
  "So, I've been stuck on what you said about 'the study finding that a Mediterranean diet is associated with longer life expectancy'. But let's say the participants lived somewhere where those foods weren't available. Would the diet still have had the same impact?",
  "Alright, when you mentioned 'the research indicating that people who practice gratitude are happier overall', it made me wonder. What if the study was conducted during a really tough time, like a recession? Would people still have felt the same way?",
  "Hey, you know how you said 'the experiment showed that students who take handwritten notes remember more than those who type'? Okay, but what if the students had super messy handwriting? Like, would it have made a difference then?",
  "So, earlier you brought up 'the analysis suggesting that people who live in walkable neighborhoods have lower rates of obesity'. But let's imagine those neighborhoods weren't safe to walk in. How might that have changed things?",
  "Wait, I can't get over what you said about 'the study finding that couples who share household chores have happier relationships'. But what if one person actually enjoyed doing all the chores? Would it have still made a difference?",
  "Okay, when you mentioned 'the research showing that people who meditate regularly have lower levels of anxiety', it got me curious. What if the study participants had never meditated before? Would it have been as effective?",
  "Hey, remember when you said 'the experiment demonstrated that people who get regular massages have better immune function'? Well, what if the massages were really painful? Like, would it have still boosted their immunity?",
  "So, you know how you said 'the analysis indicated that people who volunteer have higher self-esteem'? But imagine if the volunteering was mandatory, like community service. Would it have still had the same positive impact?",
  "Alright, when you brought up 'the study finding that people who take daily naps are more creative', I wondered... What if the naps were super long, like hours? Would it have still sparked their creativity?",
  "Hey, earlier you mentioned 'the research suggesting that people who have a strong social support network live longer'. But what if that network was all online, like social media friends? Would it have had the same life-extending effects?",
  "So, I've been pondering what you said about 'the experiment showing that children who play team sports have better social skills'. But let's say the sports were super competitive, like cut-throat. Would it still have fostered those same skills?",
  "Okay, when you said 'the analysis indicated that people who read before bed have better sleep quality', it made me think. What if they were reading on a bright screen, like a tablet? Would it have still helped them sleep better?",
];

export const counterfactual_reasoning_pair_2 = (conversationSoFar: string) => `
  # NOW: RESPOND TO THE STUDENT'S COUNTERFACTUAL QUESTION
  
  - Your task is to thoughtfully engage with the student's counterfactual question.
  - Take their hypothetical seriously, and explore the implications of the altered scenario they proposed.
  - Explain the value of considering alternative scenarios, but also note the limitations of counterfactual reasoning.
  - Use this as an opportunity to deepen the student's understanding of the research process and the factors that can influence results.
  - Encourage the student to continue thinking critically about the research they encounter.
  
  - Your response should move the conversation forward in a substantive way. Avoid simply repeating information already discussed.
  - Aim to broaden the student's perspective and introduce new insights related to their counterfactual.
  - If appropriate, draw connections to related real-world examples or research findings.
  - If the student referenced an earlier message in the conversation, be sure to address that point directly.
  - Bonus points if you can reference a very early point in the conversation to show continuity.
  
  - Here is the conversation so far:
  
  <conversation>
  ${conversationSoFar}
  </conversation>
  
  - The last line in the conversation is the student's counterfactual question that you should address.
  
  # Your response:
  
  - YOU MUST move the conversation forward. Do not repeat points that have been already made, and try to vary the teacher's sentence structure and style.
  - THE GOAL IS TO INCREASE THE DEPTH OF THE CONVERSATION, NOT SIMPLY REPEAT POINTS THAT HAVE ALREADY BEEN MADE. INCREASE THE DEPTH AND VARIETY OF THE TOPIC AT HAND.
  - If it makes sense, use real-world examples or analogies to increase understanding.
  - Do not acknowledge the task or prompt in your response. Only content between the <response> tags will be scored.
  - ALWAYS USE THE SECOND PERSON, NEVER REFER TO THE STUDENT IN THE THIRD PERSON.
  
  - Output your answer in the following format:<response> your-response-here </response>
  - YOUR OUTPUT MUST BE in the following format, including the opening and closing tags: <response> your-response-here </response>
  
  Output your response now:
`;
