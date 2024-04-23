export const dialectical_thinking_pair_1 = (conversationSoFar: string) => `

# NOW: GENERATE A DIALECTICAL QUESTION 

- Now generate a followup question to the instructor's last response that examines the topic from multiple, potentially opposing perspectives.
- Ask a question that considers different viewpoints, theories, or interpretations related to the topic at hand.
- Your question should highlight potential contradictions, paradoxes, or areas of uncertainty in the field.
- The goal is to engage in dialectical thinking - considering thesis, antithesis, and synthesis.

## Inspirational Examples 
- In the following examples, observe how the student asks questions that examine the topic from different angles:
- Note how the questions bring up competing theories, conflicting evidence, or unresolved debates in the field.
- The questions aim to probe the limitations of current knowledge and explore alternative explanations.
- You can use these examples as inspiration for your dialectical question.

<example_dialectical_questions>
${approaches
  .sort(() => 0.5 - Math.random())
  .slice(0, 3)
  .map((a, i) => `${i + 1}. ${a}`)
  .join("\n")}
</example_dialectical_questions>

- These are just examples from different topic areas that are irrelevant to the current topic area. Consider their format and depth, but be sure to generate your own unique dialectical question given the conversation so far.

## CONVERSATION SO FAR:

- Here is the conversation so far:  
<conversation>  
    ${conversationSoFar}
</conversation>

# Your Response
- Think quietly about the last response from the professor and the overall conversation.
- You are now to generate a dialectical question that examines the topic from multiple, potentially opposing perspectives.
- REMEMBER: The conversation must progress forward, so your question should explore aspects of the topic that haven't been discussed yet. The goal is to increase the breadth of the conversation by considering different viewpoints.
- YOU MUST ASK A QUESTION. YOUR QUESTION MUST BE ON THE TOPIC OF THE CONVERSATION SO FAR. YOU MUST ENGAGE IN DIALECTICAL THINKING.

Now output the dialectical question, IN THE VOICE OF THE STUDENT, in the following format: <response>your dialectical question</response>
- YOU MUST Output your question in the following format, including the opening and closing tags: <response>your question</response>  
- Do not acknowledge the task or prompt in your response. Do not reflect on the question or create additional output outside of the response tags. Only content between the <response> tags will be scored.

Output your response now:
`;

const approaches = [
  "Earlier you mentioned the theory that dark matter consists of WIMPs. However, proponents of alternative theories like axions or modified gravity argue that their approaches better explain certain observational anomalies. How do we weigh the evidence for these competing theories, and could a synthesis of ideas lead to a more complete understanding of dark matter?",
  "You brought up the exciting potential of CRISPR gene therapies. While the therapeutic prospects are promising, some bioethicists argue that germline editing crosses a moral line and could lead to a slippery slope of genetic enhancement. Others counter that the benefits outweigh the risks. How do we navigate these competing ethical frameworks and find a path forward?",
  "Going back to our discussion on neuroinflammation in Alzheimer's disease - while the 'inflammation hypothesis' has gained traction, some researchers argue that neuroinflammation could be a protective response rather than a primary driver of pathology. How do we reconcile these conflicting interpretations of the data, and what implications does this have for therapeutic strategies?",
  "You mentioned the recent advances in quantum computing and their potential to revolutionize cryptography. However, skeptics argue that practical quantum computers are still decades away and that post-quantum cryptography could maintain security even in a quantum future. How do we assess these competing claims and timelines, and what are the implications for cybersecurity strategy?",
  "Earlier, we discussed the role of free trade in promoting economic growth. Proponents argue that trade creates a rising tide that lifts all boats, while critics contend that it leads to job displacement and exacerbates inequality. Is there a way to synthesize these viewpoints, perhaps through policies that promote trade while also supporting those negatively impacted?",
  "You brought up the idea of universal basic income (UBI) as a solution to job displacement from automation. Supporters argue that UBI could provide a safety net and stimulate entrepreneurship, while detractors worry about cost and reduced incentives to work. How might we design experiments or pilot programs to test these competing hypotheses and inform policy decisions?",
  "Going back to our discussion on the ethics of animal research - while many scientists defend animal experiments as necessary for medical progress, animal rights advocates argue that it is inherently unethical and that alternative methods should be prioritized. Is there a middle ground that could satisfy both scientific and ethical imperatives, or are these worldviews fundamentally incompatible?",
  "You mentioned the promise of renewable energy in combating climate change. While renewable advocates emphasize the need for a rapid transition, some energy experts argue that a mix of renewables, nuclear, and fossil fuels with carbon capture is more realistic. How do we adjudicate between these competing visions, and what role should factors like cost, reliability, and public opinion play?",
  "Earlier, we discussed the potential of psychedelic drugs in treating mental health conditions. While some researchers tout their transformative potential, others worry about adverse psychological effects and the risk of recreational abuse. How do we synthesize the available evidence and determine the appropriate level of regulation and clinical use?",
  "You brought up the idea of space exploration and colonizing Mars as a backup plan for humanity. Proponents argue that it is a necessary safeguard and could drive technological innovation, while critics see it as a distraction from pressing issues on Earth. How do we weigh these long-term and short-term priorities, and what ethical frameworks should guide our expansion into space?",
  "You mentioned the potential of gene drives for controlling disease-carrying mosquito populations. While some see this as a promising tool for public health, others worry about unintended ecological consequences and the risk of the drive spreading to non-target species. How do we balance these potential benefits and risks, and what safeguards might be necessary?",
  "Earlier, we discussed the use of facial recognition technology for law enforcement. Proponents argue that it could help solve crimes and enhance public safety, while critics warn of privacy violations and the potential for bias and misuse. How do we navigate these competing values and ensure responsible deployment of this powerful technology?",
  "You brought up the idea of geoengineering as a potential response to climate change. While some see it as a necessary backup plan, others argue that it could have unintended consequences and might distract from efforts to reduce emissions. How do we weigh these considerations and determine the appropriate role for geoengineering in climate policy?",
  "Going back to our discussion on the use of AI in healthcare - while machine learning shows promise for diagnosis and drug discovery, some worry about issues of transparency, accountability, and the potential for amplifying biases. How do we ensure that these systems are trustworthy and align with human values?",
  "You mentioned the potential of blockchain technology for secure, decentralized record-keeping. While advocates tout its potential for increasing transparency and preventing tampering, skeptics point to issues of scalability, energy consumption, and the risk of 51% attacks. How do we assess these trade-offs and determine the most promising applications for blockchain?",
  "Earlier, we discussed the idea of a carbon tax to address climate change. Supporters argue that it would create market incentives for reducing emissions, while opponents worry about economic impacts and the burden on low-income households. Is there a way to design a carbon pricing system that balances these concerns?",
  "You brought up the potential of personalized medicine based on genetic data. While this could enable more targeted therapies, some worry about privacy risks and the potential for genetic discrimination. How do we reap the benefits of this approach while putting in place adequate protections?",
  "Going back to our discussion on the ethics of cognitive enhancement - while some see it as a way to expand human potential, others argue that it could exacerbate inequality and raise issues of authenticity and societal pressure. How do we navigate these philosophical disagreements and develop responsible policies?",
  "You mentioned the idea of universal access to higher education. Proponents argue that it could increase social mobility and foster a more informed citizenry, while critics worry about cost and the potential for diminished educational quality. How might we design a system that balances these priorities?",
  "Earlier, we discussed the potential of lab-grown meat as a sustainable alternative to animal agriculture. While it could reduce environmental impacts and animal suffering, some argue that it's unnatural and could put farmers out of work. How do we weigh these different considerations?",
  "You brought up the challenge of regulating social media platforms. While some call for stricter content moderation to combat misinformation and hate speech, others worry about censorship and infringement on free expression. How do we strike the right balance and define the responsibilities of these companies?",
  "Going back to our discussion on the potential of direct air capture for removing CO2 from the atmosphere - while it could be a useful tool for mitigating climate change, some argue that it's too expensive and energy-intensive, and that it could be a moral hazard by reducing the urgency of emissions reductions. How do we assess its proper role in the climate toolkit?",
  "You mentioned the idea of a universal basic income (UBI) as a response to job displacement from automation. Proponents argue that it could provide a safety net and enable more creative and entrepreneurial pursuits, while critics worry about cost and potential reductions in the incentive to work. How might we design experiments to test these competing hypotheses?",
  "Earlier, we discussed the use of predictive algorithms in the criminal justice system. While they could potentially reduce bias and increase efficiency, some worry about perpetuating historical inequities and the lack of individualized assessment. How do we ensure that these tools are fair and transparent?",
  "Going back to our discussion on the role of nuclear power in the transition to clean energy - while it offers a reliable, low-carbon baseload, some point to safety concerns, waste storage challenges, and high costs. How do we weigh these factors and determine the optimal energy mix?",
  "You mentioned the potential of brain-computer interfaces (BCIs) for restoring function in people with neurological conditions. While this could be transformative for individuals, some worry about issues of privacy, autonomy, and the potential for misuse. How do we navigate these ethical challenges as the technology advances?",
  "Earlier, we discussed the idea of a 'robot tax' to fund retraining and support for workers displaced by automation. Proponents argue that it's a way for companies to internalize the social costs of automation, while critics see it as a disincentive to innovation. Is there a way to strike a balance between these competing priorities?",
  "You brought up the challenge of combating vaccine hesitancy. While some advocate for stricter mandates, others argue for a more persuasive, trust-building approach. How do we navigate these different strategies and ensure high levels of vaccine uptake?",
  "Going back to our discussion on the potential of regenerative agriculture for carbon sequestration - while some see it as a win-win for farmers and the climate, others argue that its potential is overstated and that it could reduce yields. How do we assess the available evidence and determine the proper role for regenerative practices in climate policy?",
];

export const dialectical_thinking_pair_2 = (conversationSoFar: string) => `
  # NOW: SYNTHESIZE THE DIFFERENT PERSPECTIVES
  
  - Your task is to provide a thoughtful response to the student's dialectical question, which examined the topic from multiple, potentially opposing perspectives.
  - Engage with the different viewpoints, theories, or interpretations that the student brought up.
  - Aim to synthesize the conclusions that could be drawn from these different perspectives into a coherent whole.
  - This synthesis could involve finding a way to reconcile apparently contradictory evidence or ideas.
  - Alternatively, you might conclude that some perspectives are more well-supported than others based on the available evidence.
  - The goal is to model the process of dialectical thinking - considering thesis, antithesis, and ultimately arriving at a synthesis.
  
  - Your response should move the conversation forward by providing a nuanced, integrative perspective on the complexities of the topic.
  - Avoid simply restating the different viewpoints without attempting to draw connections or conclusions.
  - If appropriate, you can point out areas where further research is needed to resolve outstanding questions or contradictions.
  
  - Here is the conversation so far:
  
  <conversation>
  ${conversationSoFar}
  </conversation>
  
  - The last line in the conversation is the student's dialectical question that you should address.
  
  # Your response:
  
  - YOU MUST move the conversation forward. Do not simply repeat the different perspectives, but aim to synthesize or draw conclusions from them.
  - THE GOAL IS TO PROVIDE A NUANCED, INTEGRATIVE PERSPECTIVE THAT ACKNOWLEDGES THE COMPLEXITIES OF THE TOPIC.
  - Do not acknowledge the task or prompt in your response. Only content between the <response> tags will be scored.
  - ALWAYS USE THE SECOND PERSON, NEVER REFER TO THE STUDENT IN THE THIRD PERSON.
  
  - Output your answer in the following format:<response> your-response-here </response>
  - YOUR OUTPUT MUST BE in the following format, including the opening and closing tags: <response> your-response-here </response>
  
  Output your response now:
`;
