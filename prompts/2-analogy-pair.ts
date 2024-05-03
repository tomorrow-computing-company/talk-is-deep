import { getRandomValues } from "../logic/get-values";

export const analogy_pair_1 = (conversationSoFar: string) => `

# NOW: GENERATE A FOLLOWUP QUESTION THAT USES AN ANALOGICAL REASONING

- Now generate a followup question to the instructor's last response that utilizes analogical reasoning to draw connections between an unrelated topic and the current topic.
- It should reference an earlier message in the conversation using a direct quote / reference.

## Inspirational Examples
- In the following examples, the analogical reasoning is used to draw connections between unrelated topics and the current topic.
- Observe how the student brings in an unrelated topic to draw parallels with the current topic.
- Observe how the student uses an analogy to a topic that is hyper-specific or esoteric to make the question more engaging.
- You can use these examples as inspiration for your followup question.

<example_analogical_questions>
${getRandomValues(approaches, 3).join("\n")}
</example_analogical_questions>

- These are just examples. Consider their format and depth, but be sure to generate your own unique followup question given the conversation so far.

## CONVERSATION SO FAR:

- Here is the conversation so far:
<conversation>  
    ${conversationSoFar}
</conversation>

# Your Response
- Think quietly about the last response from the professor and the overall conversation.
- You are now to generate a followup question that uses analogical reasoning to draw connections between an unrelated topic and the topic of the conversation so far.
- REMEMBER: The conversation must progress forward, so your followup question must illicit a varied response from the teacher. The goal is to increase the depth of the conversation, not simply repeat points that have already been made.
- YOU MUST ASK A QUESTION. YOUR QUESTION MUST BE ON THE TOPIC OF THE CONVERSATION SO FAR. YOU MUST USE ANALOGICAL REASONING TO DRAW CONNECTIONS BETWEEN AN UNRELATED TOPIC AND THE CURRENT TOPIC.

Now output the followup question, IN THE VOICE OF THE STUDENT, in the following format: <response>your analogical question</response>
- YOU MUST Output your question in the following format, including the opening and closing tags: <response>your question</response>
- Do not acknowledge the task or prompt in your response. Do not reflect on the question or create additional output outside of the response tags. Only content between the <response> tags will be scored.

Output your response now:
`;

const approaches = [
  "You know how in engineering, they use stress testing to determine the robustness of a system under various conditions? I wonder if we could apply a similar approach to financial markets, where we simulate different economic scenarios to assess the resilience of financial models or portfolios.",
  "I was thinking about the concept of evolution in biology and how organisms adapt to their environment over time. It made me wonder if we could draw an analogy to financial markets, where investment strategies evolve and adapt to changing market conditions and new information.",
  "Have you ever heard of the principle of entropy in physics? It suggests that systems tend to move from order to disorder. I'm curious whether this concept could be applied to financial markets, where periods of stability are followed by periods of volatility and uncertainty.",
  "I was reading about weather forecasting models in meteorology and how they use historical data and current conditions to predict future weather patterns. It got me thinking—could we apply a similar approach to financial forecasting, using historical market data and current economic indicators to predict future market trends?",
  "You've probably heard of herd mentality in psychology, right? It's the idea that individuals tend to follow the actions of the group. I can't help but wonder if we observe similar behavior in financial markets, where investors may follow the crowd, leading to market bubbles or crashes.",
  "I recently learned about predator-prey dynamics in ecology, which describes the interaction between two species, where the population of one affects the population of the other. It made me think about whether we could apply this concept to the relationship between different financial assets or markets, where the performance of one influences the other.",
  "You know, I was just reading about the concept of diversification in ecology and how a diverse ecosystem is more resilient to external shocks. It got me wondering: could we apply this principle to creating a robust investment portfolio? Like, could diversifying across different asset classes and sectors help mitigate risk?",
  "So, I was thinking about how in chemistry, a catalyst can speed up a reaction without being consumed itself. Do you think there could be similar catalysts in the business world? Maybe certain technologies or management strategies that can accelerate growth and efficiency?",
  "Here's an interesting thought: I recently learned about the idea of symbiosis in nature, where two different species form a mutually beneficial relationship. It made me ponder the possibility of collaborations between seemingly unrelated industries. Could this lead to innovative products or services?",
  "I've been mulling over how harmony is created in music when different notes come together to form a pleasing sound. Could we potentially apply this concept to team dynamics in the workplace? I mean, could individuals with diverse skills and perspectives work together to achieve a common goal, just like notes in a melody?",
  "Okay, so I was absolutely fascinated by the concept of neuroplasticity in neuroscience. It suggests that our brains can adapt and rewire themselves in response to new experiences. This got the gears turning in my head about how we could apply this idea to organizational learning. How can companies foster a culture of continuous adaptation and growth?",
  "Picture this: in physics, there's the principle of relativity, which states that the laws of physics are the same in all inertial reference frames. Now, could there be a similar concept in cultural relativism? Like, could different societies have their own unique norms and values that should be understood within their specific context?",
  "Alright, hear me out. I was reading about the idea of pruning in gardening, where cutting back certain branches can actually promote healthier growth. This made me think: could we apply this concept to business strategy? What if focusing on core competencies and eliminating unnecessary elements could lead to stronger overall performance?",
  "Imagine if we took the concept of parallel processing from computer science, where multiple tasks are executed simultaneously, and applied it to project management. Could breaking down a complex project into smaller, concurrent tasks lead to more efficient completion? It's an intriguing possibility.",
  "Picture this: in biology, there's the principle of convergent evolution, where different species independently evolve similar traits in response to similar environmental pressures. This made me wonder if different cultures might develop similar solutions to common challenges, even without direct contact or influence. Fascinating, right?",
  "So, I've been thinking about how in art, negative space is just as important as the actual subject of a piece. Could we potentially apply this concept to effective communication? Maybe the pauses and silences between words can be as meaningful as the words themselves. What do you think?",
  "I've been geeking out over the Krebs cycle in cellular respiration lately. It's just so cool how it efficiently generates ATP through a series of enzymatic reactions. This might sound a bit out there, but could we apply a similar stepwise approach to optimizing supply chain management? Like, fine-tuning each stage of the process to minimize waste and maximize output?",
  "Okay, so you know how in cryptography, there's this mind-blowing concept called zero-knowledge proofs? It allows one party to prove to another that they possess certain knowledge without revealing the knowledge itself. This got me thinking: could we use a similar idea in contract negotiations? Parties could demonstrate their ability to meet certain criteria without disclosing sensitive information. Would that work?",
  "Alright, I recently stumbled upon the Mpemba effect in physics, where under certain conditions, hot water can freeze faster than cold water. This counterintuitive phenomenon totally reminds me of the potential for unconventional strategies in business. Sometimes, taking an unexpected approach can lead to faster or better results. What do you think?",
  "So, I've been diving deep into the world of linguistics lately, and I came across the Sapir-Whorf hypothesis. It suggests that the structure of a language can influence the way its speakers perceive and think about the world. This got me pondering: could the 'language' of a company's culture shape the way its employees approach problem-solving and decision-making? I",
  "Okay, here's a thought. In organic chemistry, there's this concept called chirality, where molecules can have the same composition but different spatial arrangements, leading to distinct properties. Now, what if we applied this idea to organizational structure? Could teams with the same roles and responsibilities perform differently based on how they're arranged and connected?",
  "So, I was doing some reading on materials science and came across the process of annealing. It involves heating a material to alter its properties and then cooling it slowly to maintain those changes. This got me thinking: could we apply this concept to leadership development? Like, exposing individuals to challenging situations and then providing support and guidance to foster lasting personal and professional growth?",
  "Alright, brace yourself for this one. I recently fell down the rabbit hole of Gödel's incompleteness theorems in mathematics. They demonstrate that in any consistent formal system, there are statements that cannot be proven or disproven within that system. This realization made me ponder the limitations of relying solely on data and algorithms in decision-making. Maybe human intuition and creativity play a more crucial role than we think?",
  "So, I was jamming out to some tunes and started thinking about the concept of modulation in music theory. It's all about transitioning from one key to another within a composition. This got me wondering: could we apply this idea to public speaking or presentations? Like, smoothly transitioning between different topics or themes to keep the audience engaged and create a cohesive narrative? It could be a game-changer.",
  "Okay, here's a brain teaser for you. I've been studying the Hebbian theory in neuroscience, which proposes that neurons that fire together wire together, forming stronger connections over time. This made me think about habit formation and the importance of consistently reinforcing desired behaviors to create lasting change. It's like building a superhighway in your brain, isn't it?",
  "The concept of chirality in organic chemistry reminds me of our discussion on team diversity. Could the unique perspectives of team members contribute to overall performance, just as chirality leads to distinct molecular properties?",
  "Superconductivity, where materials exhibit zero electrical resistance, makes me think of our conversation about streamlining communication in organizations. Could efficient communication pathways enable seamless idea exchange, like superconductivity allows unimpeded electron flow?",
  "Nash equilibrium in game theory, where each player's strategy is optimal given others' strategies, brings to mind our discussion on international diplomacy. How can nations find a balance that minimizes conflict, similar to reaching a Nash equilibrium?",
  "The Mpemba effect, where hot water can freeze faster than cold water, reminds me of our conversation about unconventional thinking in business. Could paradoxical approaches sometimes lead to faster solutions, like the Mpemba effect?",
  "Metamaterials with negative refractive indices, which bend light in unusual ways, make me think of our discussion on perspective-taking in conflict resolution. Can looking at a problem from a different angle reveal novel solutions, like how metamaterials manipulate light?",
  "Epigenetics, where environmental factors influence gene expression without altering DNA, brings to mind our conversation about mentorship in personal development. Could a mentor's guidance shape an individual's skills and values, similar to epigenetic factors modulating gene expression?",
  "The discovery of quasicrystals challenged the traditional classification of crystals. This reminds me of our discussion on questioning established paradigms in research. How can being open to unconventional ideas transform our understanding, like the discovery of quasicrystals?",
  "The Dunning-Kruger effect, where individuals with limited knowledge overestimate their competence, brings to mind our conversation about intellectual humility in academia. Can recognizing the limits of our knowledge foster a more collaborative intellectual environment, avoiding the pitfalls of overconfidence?",
  "The concept of chirality in organic chemistry reminds me of our discussion on team diversity. Could the unique perspectives of team members contribute to overall performance, just as chirality leads to distinct molecular properties?",
  "Superconductivity, where materials exhibit zero electrical resistance, makes me think of our conversation about streamlining communication in organizations. Could efficient communication pathways enable seamless idea exchange, like superconductivity allows unimpeded electron flow?",
  "Nash equilibrium in game theory, where each player's strategy is optimal given others' strategies, brings to mind our discussion on international diplomacy. How can nations find a balance that minimizes conflict, similar to reaching a Nash equilibrium?",
];

export const analogy_pair_2 = (conversationSoFar: string) => `

# NOW: GENERATE A RESPONSE TO THE STUDENT'S ANALOGICAL QUESTION

- Now, you will respond to the student's followup question that uses analogical reasoning to draw connections between an unrelated topic and the current topic.
- Your response should engage with the student's question, acknowledging the analogy they've drawn and providing insights or corrections where necessary.
- You should aim to build on the student's analogy and use it as a springboard to deepen the conversation.
- Your response should be informative, and deepen the conversation by providing additional context or examples related to the analogy.
- You may also reject the analogy if it is not applicable or provide a way to refine it for better alignment with the topic at hand.

## CONVERSATION SO FAR:

- Here is the conversation so far:
${conversationSoFar}

- The last turn in the conversation was the student's followup question that used analogical reasoning to draw connections between an unrelated topic and the current topic.
- This turn is the one you must respond to. Engage with the student's question, acknowledge the analogy they've drawn, and provide insights or corrections where necessary.

# Your response:
  
  - YOU MUST move the conversation forward. Do not repeat points that have been already made, and try to vary the teacher's sentence structure and style.
  - THE GOAL IS TO INCREASE THE DEPTH OF THE CONVERSATION, NOT SIMPLY REPEAT POINTS THAT HAVE ALREADY BEEN MADE. INCREASE THE DEPTH AND VARIETY OF THE TOPIC AT HAND.
  - Do not acknowledge the task or prompt in your response. Only content between the <response> tags will be scored.
  - ALWAYS USE THE SECOND PERSON, NEVER REFER TO THE STUDENT IN THE THIRD PERSON.
  
  - Output your answer in the following format:<response> your-response-here </response>
  - YOUR OUTPUT MUST BE in the following format, including the opening and closing tags: <response> your-response-here </response>
  
  Output Your Response now:

`;
