import { getRandomValues } from "../logic/get-values";

export const probabalistic_thinking_pair_1 = (conversationSoFar: string) => `

# NOW: GENERATE A QUESTION USING PROBABILISTIC THINKING

- Now generate a followup question where you reason about the likelihood of different future outcomes or scenarios related to the topic at hand.  
- Your question should demonstrate an understanding of uncertainty and an ability to think in terms of probabilities rather than certainties.
- Consider potential risks, challenges, or unintended consequences that may arise in the future development of this field.
- Speculate on which directions the research might take and assign rough probabilities to different paths forward.

## Inspirational Examples 
- In the following examples, observe how the student uses probabilistic language and reasoning:
- Note the consideration of multiple potential outcomes and the acknowledgement of uncertainty.
- Most importantly, note how the student's question looks toward the future and tries to anticipate the trajectory of the field.
- You can use these examples as inspiration for your probabilistic question.

<example_probabilistic_questions>
${getRandomValues(approaches, 3).join("\n")}
</example_probabilistic_questions>

- These are just examples from different topic areas that are irrelevant to the current topic area. Consider their format and reasoning, but be sure to generate your own unique probabilistic question given the conversation so far.

## CONVERSATION SO FAR:

- Here is the conversation so far:  
<conversation>  
    ${conversationSoFar}
</conversation>

# Your Response
- Think quietly about the last response from the professor and the overall conversation.
- You are now to generate a question that uses probabilistic thinking to reason about uncertain future outcomes related to the topic at hand.
- REMEMBER: The conversation must progress forward, so your question must illicit a thoughtful response from the professor. The goal is to introduce a future-oriented perspective and grapple with the inherent uncertainty in how the field will develop.
- YOU MUST ASK A QUESTION. YOUR QUESTION MUST BE ON THE TOPIC OF THE CONVERSATION SO FAR. YOU MUST DEMONSTRATE PROBABILISTIC REASONING.

Now output the question, IN THE VOICE OF THE STUDENT, in the following format: <response>your probabilistic question</response>
- YOU MUST Output your question in the following format, including the opening and closing tags: <response>your question</response>  
- Do not acknowledge the task or prompt in your response. Do not reflect on the question or create additional output outside of the response tags. Only content between the <response> tags will be scored.

Output your response now:
`;

const approaches = [
  "Given the current state of research on quantum computing algorithms, what do you think is the probability that we'll see a quantum speedup for a practically relevant problem within the next 5 years? 10 years? 20 years? And if we do achieve that, how likely do you think it is that it will be for an optimization problem versus a machine learning or cryptography problem?",
  "Considering the challenges that still remain in developing safe and effective gene therapies, what would you estimate is the likelihood that gene editing will become a frontline treatment for most cancers within the next two decades? And if gene editing does become widely used, do you think there's a significant risk of unintended consequences like off-target effects causing new health issues down the line?",
  "Based on the current trajectory of AI development and the hurdles that still need to be overcome, what probability would you assign to us achieving artificial general intelligence within the next 25 years? 50 years? 100 years? And if we do manage to create AGI, how likely do you think it is that it will be developed by a private company versus an academic institution or government initiative?",
  "Given the rapid progress in quantum computing hardware and the increasing number of quantum algorithms being developed, what do you think is the likelihood that quantum computing will become a standard tool for scientific research within the next 10 years? 20 years? 50 years? And if quantum computing does become widely used, what are the chances that it will lead to new breakthroughs in fields like materials science, drug discovery, or climate modeling?",
  "Considering the recent advances in neural interfaces and brain-computer interfaces, what probability would you assign to us developing a brain-to-brain communication system within the next 15 years? 30 years? 50 years? And if we do achieve that, how likely do you think it is that it will be used primarily for medical applications like treating neurological disorders or for broader social applications like enhancing human communication and collaboration?",
  "Given the increasing interest in synthetic biology and the growing number of bioengineering startups, what do you think is the likelihood that we'll see a commercially available synthetic organism within the next 5 years? 10 years? 20 years? And if we do achieve that, how likely do you think it is that it will be used primarily for industrial applications like biofuels or for environmental applications like bioremediation and pollution control?",
  "Considering the current state of research on exoplanets, what probability would you assign to discovering a potentially habitable Earth-like planet within the next decade using current or planned telescopes? And if we do discover such a planet, how likely do you think it is that it will be orbiting a red dwarf star versus a solar-type star or a binary system?",
  "Given the recent advances in natural language processing and language models, what do you think is the likelihood that we'll be able to develop an AI system that can engage in open-ended conversation indistinguishable from a human within the next 5 years? And if we do develop such a system, what are the chances that it will be based on a large-scale transformer architecture versus a more biologically-inspired approach or a hybrid system?",
  "Based on the current understanding of the neurobiological basis of memory, what probability would you assign to developing a drug that can selectively enhance or erase specific memories within the next 20 years? And if we do develop such a drug, how likely do you think it is that it will target the consolidation process versus the retrieval process or the reconsolidation process?",
  "Considering the progress in developing quantum algorithms for machine learning, what do you think is the likelihood that quantum computers will outperform classical computers on a real-world machine learning task within the next 10 years? And if they do outperform classical computers, what are the chances that it will be for a supervised learning problem versus an unsupervised learning problem or a reinforcement learning problem?",
  "Given the recent advances in 3D bioprinting and tissue engineering, what probability would you assign to being able to print a fully functional human organ suitable for transplantation within the next 15 years? And if we can print a functional organ, how likely do you think it is that it will be a relatively simple organ like a cornea or a bladder versus a more complex organ like a heart or a liver?",
  "Based on the current understanding of the genetics of aging, what do you think is the likelihood that we'll identify a single gene variant that accounts for at least 10% of the variation in human lifespan within the next 10 years? And if we do identify such a variant, what are the chances that it will be a common variant with a relatively small effect size versus a rare variant with a larger effect size?",
  "Considering the current state of research on the human brain connectome, what probability would you assign to mapping the complete connectome of a single human brain at the level of individual synapses within the next 20 years? And if we do map a complete connectome, how likely do you think it is that it will be for a healthy adult brain versus a developing brain or a brain from a person with a neurological disorder?",
  "Given the recent progress in developing brain-machine interfaces, what do you think is the likelihood that we'll be able to develop a prosthetic limb that can be controlled with the same speed and dexterity as a natural limb within the next 10 years? And if we do develop such a prosthetic, what are the chances that it will be controlled using a non-invasive EEG interface versus an invasive brain implant or a peripheral nerve interface?",
  "Based on the current understanding of the molecular basis of cancer, what probability would you assign to developing a targeted therapy that can effectively treat or prevent the majority of cancers within the next 25 years? And if we do develop such a therapy, how likely do you think it is that it will target a specific oncogenic pathway like p53 or Ras versus a more general process like angiogenesis or immune evasion?",
  "Considering the progress in developing machine learning algorithms for drug discovery, what do you think is the likelihood that an AI-designed drug will enter clinical trials within the next 5 years? And if an AI-designed drug does enter clinical trials, what are the chances that it will be for a rare or orphan disease versus a more common condition like diabetes or Alzheimer's disease?",
  "I've been thinking about the current state of research on dark energy. What probability would you assign to discovering the true nature of dark energy within the next 20 years using current or planned experiments? And if we do uncover its true nature, how likely do you think it is that it will be a cosmological constant versus a dynamical field or something even more exotic?",
  "So, given the recent advances in gene editing and stem cell biology, what do you reckon is the likelihood that we'll be able to regenerate an entire human limb from scratch within the next 30 years? And if we can regenerate a limb, what are the chances that it will involve using the patient's own cells versus a universal donor cell line or some kind of synthetic biomaterial scaffold?",
  "I can't stop thinking about the progress in developing brain-computer interfaces. What probability would you assign to being able to control a computer or a robot using only your thoughts within the next 15 years? And if we can achieve that, how likely do you think it is that it will be used primarily for medical applications like restoring mobility to paralyzed patients versus general-purpose human augmentation or even brain-to-brain communication?",
  "Alright, considering the current understanding of the origin and evolution of language, what do you think is the likelihood that we'll discover a universal grammar that underlies all human languages within the next 25 years? And if we do discover such a grammar, what are the chances that it will be based on innate brain structures versus learned cultural conventions or a combination of both?",
  "Okay, given the recent advances in quantum sensing and metrology, what probability would you assign to developing a portable quantum sensor that can detect gravitational waves in real-time within the next 15 years? And if we do develop such a sensor, how likely do you think it is that it will be based on atom interferometry versus optomechanical systems or some other quantum sensing modality?",
  "Picture this: based on the current understanding of the neurobiology of emotion, what do you think is the likelihood that we'll be able to develop a drug that can selectively modulate specific emotions like fear or happiness within the next 20 years? And if we do develop such a drug, what are the chances that it will target a specific neurotransmitter system like serotonin or dopamine versus a more general mechanism like neuroplasticity or epigenetic regulation?",
  "Here's a wild one: considering the progress in developing advanced materials and nanofabrication techniques, what probability would you assign to creating an invisibility cloak that can hide macroscopic objects from view within the next 30 years? And if we can create an invisibility cloak, how likely do you think it is that it will be based on metamaterials that manipulate light waves versus some kind of active camouflage system that dynamically matches the background?",
  "Okay, bear with me on this one. Given the recent advances in artificial intelligence and robotics, what do you think is the likelihood that we'll develop a robot that can pass the Turing test within the next 20 years? And if we do develop such a robot, what are the chances that it will be based on a rule-based expert system versus a more flexible machine learning approach or even a neuromorphic computing architecture?",
  "I've been pondering the current state of research on astrobiology. What probability would you assign to discovering definitive evidence of extraterrestrial life within the next 30 years using current or planned space missions? And if we do discover extraterrestrial life, how likely do you think it is that it will be microbial life on a solar system body like Europa or Enceladus versus a more complex life form on an exoplanet or even an intelligent civilization?",
  "You know, I've been thinking about the progress in developing quantum algorithms for optimization problems. What do you think is the likelihood that a quantum computer will be used to solve a practically relevant optimization problem faster than any classical computer within the next 10 years? And if a quantum computer does solve such a problem, what are the chances that it will be a problem in logistics or supply chain management versus a more specialized problem in finance or drug discovery?",
];

export const probabalistic_thinking_pair_2 = (conversationSoFar: string) => `
  # NOW: RESPOND TO THE STUDENT'S PROBABILISTIC QUESTION
  
  - Your task is to provide a thoughtful response to the student's question, which used probabilistic reasoning to consider uncertain future outcomes.
  - Engage with the specifics of their question, addressing the potential scenarios and probabilities they mentioned.
  - Use this as an opportunity to discuss the inherent uncertainty in scientific research and the importance of thinking in terms of likelihoods and risks.
  - Provide your own expert perspective on which future paths you think are more or less probable, and why.
  - If you are asked to assign probabilities, DO SO, but make sure to justify your reasoning.
  
  - Your response should move the conversation forward in a substantive way. Avoid simply repeating information already discussed.
  - The goal is to have a nuanced discussion about the future of the field, acknowledging both the exciting possibilities and the significant challenges and uncertainties.
  - If the student referenced an earlier message in the conversation, be sure to address that point directly.
  - Bonus points if you can reference a very early point in the conversation to show continuity.
  
  - Here is the conversation so far:
  
  <conversation>
  ${conversationSoFar}
  </conversation>
  
  - The last turn in the conversation is the student's probabilistic question that you should address.
  
  # Your response:
  
  - YOU MUST move the conversation forward. Do not repeat points that have been already made, and try to vary the professor's sentence structure and style.
  - THE GOAL IS TO HAVE A NUANCED DISCUSSION ABOUT THE TOPIC AT HAND. ENGAGE WITH THE STUDENT'S QUESTION AND PROVIDE A THOUGHTFUL RESPONSE, RESPECTING THE STUDENT'S DESIRE TO LEARN MORE.
  - IF THE STUDENT ASKED YOU TO ASSIGN PROBABILITIES, DO SO, BUT MAKE SURE TO JUSTIFY YOUR REASONING.
  - Do not acknowledge this task or prompt in your response. Only content between the <response> tags will be scored.
  - ALWAYS USE THE SECOND PERSON, NEVER REFER TO THE STUDENT IN THE THIRD PERSON.
  
  - Output your answer in the following format:<response> your-response-here </response>
  - YOUR OUTPUT MUST BE in the following format, including the opening and closing tags: <response> your-response-here </response>
  
  Output your response now:
`;
