import { getRandomValues } from "../logic/get_values";

export const causal_reasoning_pair_1 = (conversationSoFar: string) => `

# NOW: GENERATE A QUESTION USING CAUSAL REASONING

- Now generate a followup question where you reason about the underlying causal mechanisms and relationships related to the topic at hand.  
- Your question should demonstrate an understanding of the importance of establishing causality rather than just observing correlations.
- Consider potential confounding variables, alternative explanations, or the need for controlled experiments to determine cause and effect.
- Speculate on what the key causal factors might be and how one could go about testing those hypotheses.
- Use something that was said in the conversation so far to generate your question.

## Inspirational Examples 
- In the following examples, observe how the student uses causal reasoning to dig deeper into the underlying mechanisms:
- Note the consideration of confounding variables, the proposal of experiments to test causality, and the attempt to explain observed phenomena.
- Most importantly, note how the student's question looks beyond surface-level correlations to uncover the true causal relationships.
- You can use these examples as inspiration for your causal reasoning question.

<example_causal_questions>
${getRandomValues(approaches, 3).join("\n")}
</example_causal_questions>

- These are just examples from different topic areas that are irrelevant to the current topic area. Consider their format and reasoning, but be sure to generate your own unique causal question given the conversation so far.

## CONVERSATION SO FAR:

- Here is the conversation so far:

<conversation>  
    ${conversationSoFar}
</conversation>

# Your Response
- Think quietly about the last response from the professor and the overall conversation.
- You are now to generate a question that uses causal reasoning to investigate the underlying mechanisms and relationships related to the topic at hand.
- REMEMBER: The conversation must progress forward, so your question must elicit a thoughtful response from the professor. The goal is to move beyond surface-level observations and dig into the true causal factors at play.
- YOU MUST ASK A QUESTION. YOUR QUESTION MUST BE ON THE TOPIC OF THE CONVERSATION SO FAR. YOU MUST DEMONSTRATE CAUSAL REASONING.

Now output the question, IN THE VOICE OF THE STUDENT, in the following format: <response>your causal question</response>
- YOU MUST Output your question in the following format, including the opening and closing tags: <response>your question</response>  
- Do not acknowledge the task or prompt in your response. Do not reflect on the question or create additional output outside of the response tags. Only content between the <response> tags will be scored.

Output your response now:
`;

const approaches = [
  "Given the observed correlation between meditation and reduced stress levels, what do you think are the key causal mechanisms at play? Is it the mindfulness aspect of meditation that directly reduces stress, or could there be confounding variables like the type of person who chooses to meditate regularly? How would you design an experiment to tease apart the causal relationships?",
  "I've been thinking about the link between social media use and decreased attention spans. Do you think there's a direct causal relationship there, or could there be other factors at play like the types of content people consume or preexisting individual differences? What kind of study could we conduct to establish the direction of causality and rule out confounds?",
  "Considering the finding that students who take notes by hand perform better than those who type notes, what do you think is the causal explanation? Is it something about the physical act of writing that enhances learning, or could it be that handwritten notes tend to be less verbatim? How could we test these competing hypotheses to determine the true cause of the performance difference?",
  "I've noticed that many successful startups were founded by people who dropped out of college. Do you think there's a causal link there, like dropping out makes one more likely to succeed as an entrepreneur? Or is it more likely that the type of person who drops out to start a company just tends to have traits that make them successful? What data would we need to collect to figure out the causal story?",
  "There's a lot of buzz about the idea that a diverse team leads to more innovation. But is diversity directly causing that innovation, or could it be that companies that prioritize diversity also tend to have cultures that foster innovative thinking? How would you go about untangling that causal web to see if increasing diversity has a direct causal impact on a team's innovativeness?",
  "I've read about studies showing a correlation between regularly eating dinner as a family and better academic outcomes for kids. Do you think having family dinners directly causes that improvement? Or could it be that families who prioritize dinners together also tend to prioritize academics in other ways? What additional variables would you want to measure and control for to establish the causal effect of family dinners on academic performance?",
  "Lots of studies have found a link between exposure to green space and better mental health. But is it the green space itself that's improving mental health, or could it be that people with better mental health are more likely to seek out parks and nature? Or maybe access to green space is correlated with other factors like higher socioeconomic status? How could we design a study to determine the causal direction and mechanism of that relationship?",
  "I've been wondering about the connection between bilingualism and delayed onset of Alzheimer's symptoms. Do you think speaking multiple languages directly protects the brain against Alzheimer's, or could it be that bilingual people tend to have other traits or habits that are actually responsible for the effect? What kind of experiment could tease apart those potential causes to home in on the true causal factor?",
  "Going back to your point about the correlation between coffee consumption and lower risk of Parkinson's disease - do you think there's a direct causal link there? Could it be that the antioxidants in coffee are protecting the brain, or might there be confounding factors like the socioeconomic status or lifestyle habits of regular coffee drinkers? How would you design a study to isolate the causal effect of coffee on Parkinson's risk?",
  "Earlier, you mentioned the observed link between childhood trauma and adult depression. I've been thinking about the potential causal pathways there. Do you think experiencing trauma directly causes changes in the brain that lead to depression, or could it be that trauma influences other factors like self-esteem or coping mechanisms that then contribute to depression? What kind of longitudinal study could we conduct to map out the causal chain?",
  "I've been reflecting on your comment about the gender gap in STEM fields. Some argue that innate differences between males and females are the root cause, while others point to societal factors like stereotype threat and lack of role models. How would you go about determining the relative causal contributions of biological vs. social factors in explaining the gender gap? What variables would you need to measure and control for?",
  "You brought up an intriguing point about the link between income inequality and lower life expectancy. But is income inequality directly causing those health disparities, or could it be that other factors associated with inequality, like access to healthcare or exposure to stress, are the true causal drivers? What kind of experiment or natural experiment could we look for to tease apart those causal relationships?",
  "I'm curious about your thoughts on the finding that people who volunteer regularly tend to report higher levels of happiness. Do you think volunteering directly causes that increased happiness, or could it be that happier people are just more likely to volunteer in the first place? How could we design an intervention study to test the causal effect of volunteering on happiness while accounting for potential self-selection bias?",
  "Earlier, you mentioned the correlation between social media use and political polarization. I've been thinking about the possible causal mechanisms underlying that relationship. Do you think exposure to polarizing content on social media directly causes people to become more extreme in their views, or could it be that people who are already polarized are more likely to seek out and engage with that kind of content? What kind of data would we need to collect to adjudicate between those competing causal hypotheses?",
  "You raised an interesting point about the association between growing up in a bilingual household and enhanced executive function skills. But is being bilingual itself causally improving executive function, or could it be that parents who choose to raise their kids bilingually also tend to engage in other parenting practices that support cognitive development? How would you design a study to isolate the causal effect of bilingualism while controlling for potential confounding factors?",
  "I've been pondering your comment about the link between air pollution and lower academic achievement in children. Do you think exposure to pollutants is directly impairing cognitive function, or could there be other factors at play, like the socioeconomic status of families living in more polluted areas? What kind of natural experiment could we look for to determine the causal impact of air pollution on academic outcomes?",
  "Going back to your point about the correlation between a country's chocolate consumption and its number of Nobel laureates - do you think there's a causal relationship there, or is it more likely that both variables are influenced by a third factor, like the country's wealth or investment in research? How would you go about ruling out potential confounds to determine if there's a direct causal link between chocolate and Nobel prizes?",
  "You mentioned the finding that people who make their beds in the morning tend to report higher levels of productivity and well-being. But do you think making your bed actually causes those positive outcomes, or could it be that people who are already more disciplined and mentally healthy are just more likely to have a bed-making habit? What sort of experiment could we conduct to establish the causal effect of bed-making on productivity and well-being?",
  "Earlier, you mentioned the correlation between gut microbiome diversity and obesity. Is the microbiome directly influencing weight, or could it be that diet and lifestyle factors are shaping both? How would you design a study to determine the causal role of the microbiome?",
  "I've been thinking about your point on the link between neurogenesis and memory formation. Is the birth of new neurons directly causing improved memory, or could it be that other factors like enriched environments are driving both? What kind of experiment could tease apart those causal pathways?",
  "You brought up the association between telomere length and aging. But are shorter telomeres directly causing the aging process, or are they just a byproduct of other cellular mechanisms? How would you differentiate between cause and effect in this relationship?",
  "Going back to your comment on the correlation between air pollution and respiratory illnesses - is pollution directly causing those health problems, or could it be that socioeconomic factors are influencing both? What sort of natural experiment could help clarify the causal link?",
  "I'm curious about your thoughts on the link between biodiversity and ecosystem stability. Is high biodiversity directly promoting stability, or could it be that stable environments just allow for more species to coexist? How would you determine the direction of causality?",
  "Earlier, you mentioned the finding that areas with higher rates of vaccination tend to have lower rates of disease outbreaks. But are vaccinations directly preventing those outbreaks, or could it be that areas with better healthcare access just tend to have both higher vaccination rates and lower disease incidence? What kind of study design could rule out confounding factors?",
  "You raised the point about the association between ocean acidification and coral bleaching. But is acidification directly causing the bleaching, or could it be that other factors like water temperature are driving both? How would you isolate the causal effect of acidification?",
  "I've been pondering your comment on the link between deforestation and species extinctions. Is habitat loss directly causing those extinctions, or could it be that other human activities like hunting or pollution are also contributing? What sort of controlled experiment could tease apart those causal factors?",
  "Going back to your point about the correlation between pesticide use and declining bee populations - are pesticides directly harming the bees, or could it be that other agricultural practices are influencing both? How would you design a study to determine the causal role of pesticides?",
  "You mentioned the association between climate change and more frequent extreme weather events. But is climate change directly causing those events to occur more often, or are there confounding factors like natural climate variability? What kind of data analysis could help attribute causality in this case?",
];

export const causal_reasoning_pair_2 = (conversationSoFar: string) => `
  # NOW: GUIDE THE STUDENT THROUGH ESTABLISHING CAUSALITY
  
  - Your task is to provide a thoughtful response to the student's question, which used causal reasoning to investigate the underlying mechanisms of the topic at hand.
  - Engage with the specifics of their question, addressing the potential causal factors and confounds they mentioned.
  - Use this as an opportunity to discuss the challenges of establishing causality and the importance of well-designed experiments.
  - Provide guidance on how one could go about testing the causal hypotheses the student proposed.
  - If the student's question contains assumptions, gently point them out and steer them toward a more rigorous approach.
  
  - Your response should move the conversation forward in a substantive way. Avoid simply repeating information already discussed.
  - The goal is to have a nuanced discussion about the underlying causal mechanisms, acknowledging both what we know and what we still need to figure out.
  - If the student referenced an earlier message in the conversation, be sure to address that point directly.
  - Bonus points if you can reference a very early point in the conversation to show continuity.
  
  - Here is the conversation so far:
  
  <conversation>
  ${conversationSoFar}
  </conversation>
  
  - The last turn in the conversation is the student's causal question that you should address.
  
  # Your response:
  
  - YOU MUST move the conversation forward. Do not repeat points that have been already made, and try to vary the professor's sentence structure and style.
  - THE GOAL IS TO HAVE A NUANCED DISCUSSION ABOUT THE TOPIC AT HAND. ENGAGE WITH THE STUDENT'S QUESTION AND PROVIDE A THOUGHTFUL RESPONSE, RESPECTING THE STUDENT'S DESIRE TO LEARN MORE.
  - GUIDE THE STUDENT THROUGH THE PROCESS OF ESTABLISHING CAUSALITY. POINT OUT POTENTIAL CONFOUNDS AND PROPOSE WAYS TO TEST CAUSAL HYPOTHESES.
  - Do not acknowledge this task or prompt in your response. Only content between the <response> tags will be scored.
  - ALWAYS USE THE SECOND PERSON, NEVER REFER TO THE STUDENT IN THE THIRD PERSON.
  
  - Output your answer in the following format:<response> your-response-here </response>
  - YOUR OUTPUT MUST BE in the following format, including the opening and closing tags: <response> your-response-here </response>
  
  Output your response now:
`;
