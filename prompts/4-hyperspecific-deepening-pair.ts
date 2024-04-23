import { getRandomValues } from "../logic/get_values";

export const hyperspecific_deepening_pair_1 = (conversationSoFar: string) => `

# NOW: GENERATE A HYPER-SPECIFIC FOLLOWUP QUESTION 

- Now generate a followup question to the instructor's last response that demonstrates an extreme depth of knowledge and familiarity with the nuances of the topic area.
- Ask a question that only a serious student who has studied this topic in great detail could ask. 
- Your question should reference highly specific terminology, sub-topics, or edge cases related to the overarching topic of discussion.
- It should reference an earlier message in the conversation using a direct quote / reference.

## Inspirational Examples 
- In the following examples, observe how the student asks questions that demonstrate deep subject matter expertise:
- Note the use of specific terminology, references to niche sub-topics, and exploration of edge cases or little-known aspects of the topic.
- Most importantly, note how the student's question directly references an earlier message in the conversation, creating a coherent flow.
- You can use these examples as inspiration for your followup question.

<example_hyperspecific_questions>
${getRandomValues(approaches, 3).join("\n")}
</example_hyperspecific_questions>

- These are just examples from different topic areas that are irrelevant to the current topic area. Consider their format and depth, but be sure to generate your own unique followup question given the conversation so far.

## CONVERSATION SO FAR:

- Here is the conversation so far:  
<conversation>  
    ${conversationSoFar}
</conversation>

# Your Response
- Think quietly about the last response from the professor and the overall conversation.
- You are now to generate a hyper-specific followup question that demonstrates extreme depth of knowledge on the topic at hand.
- REMEMBER: The conversation must progress forward, so your followup question must illicit a varied response from the teacher. The goal is to increase the depth of the conversation, not simply repeat points that have already been made.
- YOU MUST ASK A QUESTION. YOUR QUESTION MUST BE ON THE TOPIC OF THE CONVERSATION SO FAR. YOU MUST DEMONSTRATE DEEP SUBJECT MATTER EXPERTISE.

Now output the followup question, IN THE VOICE OF THE STUDENT, in the following format: <response>your hyper-specific question</response>
- YOU MUST Output your question in the following format, including the opening and closing tags: <response>your question</response>  
- Do not acknowledge the task or prompt in your response. Do not reflect on the question or create additional output outside of the response tags. Only content between the <response> tags will be scored.

Output your response now:
`;

const approaches = [
  "Going back to what you said about 'the study using a novel fMRI paradigm to investigate the neural correlates of episodic memory retrieval' - I've been thinking more about the specifics of their methodology. Do you happen to know if they used a standard EPI sequence for image acquisition or did they opt for something more advanced like multiband EPI? I'm curious how their choice of pulse sequence parameters might have impacted the spatial resolution and ability to detect subtle activation differences in the hippocampal subfields.",
  "So earlier you brought up that interesting point regarding 'the research applying reinforcement learning algorithms to optimize wind turbine control policies'. It got me wondering about the nitty gritty details of their implementation. By any chance, are you familiar with whether they used a model-based RL method like Dyna-Q or did they stick with a model-free approach like SARSA? And while we're on the topic, I'm also curious how they handled the classic exploration-exploitation dilemma, especially considering the high stakes involved in wind turbine operation.",
  "Hey, I wanted to circle back to something you mentioned a while ago about 'the meta-analysis revealing a significant association between the rs6265 polymorphism in the BDNF gene and risk for depression'. It's been on my mind and I've been pondering potential moderators of that relationship. I don't suppose the authors looked at things like ethnic background of the study populations or the specific diagnostic criteria used to classify depression cases, did they? Seems to me those factors could really influence the interpretation and generalizability of the findings.",
  "I've been ruminating on that fascinating study you described earlier that used 'single-cell RNA sequencing to characterize the heterogeneity of tumor-infiltrating lymphocytes in melanoma'. The technical aspects really piqued my interest. I'm dying to know more about their bioinformatics pipeline - did they happen to use a pseudo-alignment tool like kallisto for quantification or did they take the more computationally intensive route with a full alignment method like STAR? Oh, and while I'm at it, any idea how they dealt with the pervasive issue of dropout events in scRNA-seq data?",
  "You know, I keep thinking back to your comments about 'the research demonstrating the effectiveness of adversarial training for improving the robustness of deep neural networks'. It sparked my curiosity about the specifics of their training procedure. I wonder, did they focus on defending against a particular type of adversarial attack, like those white-box attacks generated using projected gradient descent? Or did they take a broader approach and incorporate black-box attacks as well, maybe using something like transfer-based attacks? I feel like the scope of the adversarial examples used in training could really impact how well the robustness generalizes to real-world threats.",
  "I've been reflecting on that intriguing study you highlighted that used 'Mendelian randomization to investigate the causal relationship between vitamin D levels and multiple sclerosis risk'. A thought keeps nagging at me about the genetic instruments they used. I'm not sure if you recall the details, but do you know if they restricted their analysis to the most well-established vitamin D-related variants in DHCR7 and CYP2R1, or did they cast a wider net and include a more comprehensive set of SNPs? It seems to me that the strength and specificity of the genetic instruments could substantially influence the validity of the causal inference.",
  "I can't stop thinking about that groundbreaking optogenetics study you mentioned that 'dissected the neural circuits underlying fear memory formation in the amygdala'. The technical nuances are just so fascinating to me. I've been wracking my brain trying to remember - did they use a depolarizing opsin like channelrhodopsin-2 for neuronal excitation or was it a hyperpolarizing opsin like halorhodopsin for inhibition? And for the life of me, I can't recall if they mentioned which promoter they used to drive the opsin expression and ensure specificity to the target neuronal population. Those details seem so crucial for really nailing down the interpretation of the behavioral effects.",
  "You brought up that compelling study a bit ago that used 'network analysis to characterize the functional connectivity patterns in the brain during resting state'. It got me thinking deeply about the methodological choices involved. I'm curious, do you by chance remember what parcellation scheme they used to define the nodes of the network? Was it an anatomical atlas like AAL or did they opt for a more functionally-derived parcellation based on something like independent component analysis? I can imagine the choice of parcellation strategy could have a pretty profound impact on the topology of the resulting networks and any graph theoretic measures they calculated.",
  "I've been pondering that remarkable study you described that employed 'CRISPR-Cas9 to generate knockout models for studying the role of specific genes in neurodevelopmental disorders'. The technical aspects are just so captivating to me. I wonder if you recall any specifics about their guide RNA design - did they use a single guide or a dual guide system to minimize off-target effects? And I'm also curious about their validation process for ensuring the efficiency and specificity of the gene editing. Rigorous quality control seems absolutely essential in these types of studies to have confidence in the phenotypic outcomes.",
  "I keep coming back to that meta-analysis you cited examining 'the efficacy of cognitive behavioral therapy for treating post-traumatic stress disorder'. One aspect I'm really curious about is how they accounted for the inevitable variability across studies in the specific CBT protocols implemented. Do you happen to know if they looked at potential moderators like the number of sessions, inclusion of exposure-based elements, or maybe even the training and experience of the therapists? I would think those treatment-related factors could meaningfully influence the effect sizes and the durability of the therapeutic benefits.",
  "Going back to your point about the role of microglia in synaptic pruning during neural development - do you think the complement cascade plays a more critical role in the engulfment of synaptic material or do you believe other signaling pathways like fractalkine are equally important? I'm curious about your perspective on the relative contributions of these mechanisms.",
  "I've been mulling over your comments on the potential of using machine learning to predict protein-protein interactions based on structural features. Do you think a deep learning approach using convolutional neural networks would be more effective at capturing the spatial dependencies or would a graph-based method like a graph convolutional network be better suited to handle the complex topology of the interactome?",
  "Your insights on the application of reinforcement learning to optimize chemical reaction conditions really got me thinking. In your opinion, would a model-based approach using a Gaussian process to learn the reaction dynamics be more sample-efficient or would a model-free method like proximal policy optimization be more robust to the inherent stochasticity in the system?",
  "I wanted to circle back to your discussion on the role of long non-coding RNAs in epigenetic regulation. Do you think the primary mechanism of action is through the recruitment of chromatin modifying complexes like PRC2 or do you believe their interaction with other non-coding RNAs like miRNAs plays a more significant role in modulating gene expression?",
  "Your comments on the potential of using topological data analysis to characterize the structure of complex networks really resonated with me. Do you think persistent homology would be more effective at capturing the multi-scale features of the network or would a different topological invariant like the Euler characteristic be more informative?",
  "I've been contemplating your remarks on the application of optogenetics to dissect the neural circuits underlying fear conditioning. In your opinion, would a Cre-dependent viral vector approach be more effective at achieving cell-type specificity or would a transgenic strategy with opsin expression driven by a cell-type specific promoter be more reliable?",
  "Your observations on the potential of using single-cell RNA sequencing to characterize the heterogeneity of tumor microenvironments really piqued my curiosity. Do you think a droplet-based platform like Drop-seq would be more efficient at capturing rare cell types or would a plate-based method like Smart-seq2 provide more detailed transcriptomic information?",
  "I've been reflecting on your thoughts on the application of Bayesian nonparametrics to model the diversity of the human gut microbiome. Do you think a Dirichlet process mixture model would be more effective at capturing the unknown number of bacterial species or would a hierarchical Dirichlet process be more suitable to handle the hierarchical structure of the taxonomic classifications?",
  "Your insights on the potential of using deep reinforcement learning to optimize the design of nanoparticles for drug delivery really got me thinking. In your opinion, would a value-based method like deep Q-learning be more effective at handling the large state space or would a policy-based approach like actor-critic be more stable during training?",
  "I wanted to revisit your comments on the application of graph neural networks to predict the properties of novel materials. Do you think a message passing framework would be more effective at capturing the local atomic interactions or would a global pooling approach be more informative for predicting bulk properties?",
  "Regarding your point on the role of histone modifications in regulating gene expression - do you think acetylation or methylation plays a more crucial role in determining chromatin accessibility?",
  "Your insight on using single-cell RNA-seq to study cellular heterogeneity is fascinating. Do you believe droplet-based or plate-based methods are more suitable for capturing rare cell types?",
  "I've been pondering your comments on the potential of CRISPR-Cas9 for therapeutic gene editing. Do you think off-target effects or immune responses pose a greater challenge for clinical translation?",
  "Your discussion on the application of deep learning to predict protein structures really caught my attention. Would a 3D convolutional neural network or a graph neural network be more effective at capturing spatial dependencies?",
  "I'm curious about your thoughts on the role of the gut microbiome in influencing brain function and behavior. Do you think the vagus nerve or the production of neuroactive metabolites is the primary mechanism of communication?",
  "Your comments on the potential of optogenetics for studying neural circuits were really thought-provoking. Do you think viral vector delivery or transgenic animal models are more effective for achieving cell-type specificity?",
  "I've been reflecting on your point about the importance of functional connectivity in understanding brain disorders. Do you think resting-state or task-based fMRI is more informative for identifying abnormal connectivity patterns?",
  "Your insights on the application of reinforcement learning to robotics really piqued my interest. Would a model-based or model-free approach be more sample-efficient for learning complex motor tasks?",
  "Regarding your discussion on the potential of single-cell ATAC-seq for studying epigenetic regulation - do you think a peak-calling or a chromatin accessibility signature approach is more effective for identifying cell-type specific regulatory elements?",
  "I've been contemplating your remarks on the role of long non-coding RNAs in cancer biology. Do you think their primary mechanism of action is through regulating gene expression or interacting with protein complexes?",
  "Your observations on the potential of graph theory for analyzing social networks were really intriguing. Do you think centrality measures or community detection algorithms are more useful for identifying influential nodes?",
  "I wanted to revisit your point about the importance of data preprocessing in machine learning pipelines. Do you think feature scaling or dimensionality reduction has a greater impact on model performance?",
  "Your comments on the application of Bayesian statistics to clinical trial design really resonated with me. Do you think adaptive randomization or hierarchical modeling is more effective for optimizing treatment allocation?",
  "I've been mulling over your insights on the potential of synthetic biology for biomanufacturing. Do you think metabolic engineering or directed evolution is a more promising approach for optimizing production yields?",
  "Regarding your discussion on the role of the prefrontal cortex in decision-making - do you think the dorsolateral or ventromedial subregions play a more critical role in value-based choices?",
  "Your point about the importance of transfer learning in natural language processing is really thought-provoking. Do you think fine-tuning pre-trained language models or using them as feature extractors is more effective for downstream tasks?",
  "I'm curious about your thoughts on the potential of single-cell proteomics for studying cellular heterogeneity. Do you think mass cytometry or multiplexed immunofluorescence is more suitable for high-throughput protein profiling?",
  "Your insights on the application of deep learning to medical image analysis really caught my attention. Would a U-Net or a Mask R-CNN architecture be more effective for segmenting anatomical structures?",
  "I've been reflecting on your comments about the role of the hippocampus in memory consolidation. Do you think the CA1 or CA3 subregions are more critical for the formation of long-term memories?",
  "Your discussion on the potential of single-cell multiomics for studying gene regulatory networks was really fascinating. Do you think simultaneous profiling of the transcriptome and epigenome or the transcriptome and proteome is more informative?",
  "Regarding your point about the importance of regularization techniques in preventing overfitting - do you think L1 or L2 regularization is more effective for feature selection in high-dimensional datasets?",
  "I've been pondering your remarks on the potential of reinforcement learning for personalized medicine. Do you think a contextual bandit or a Markov decision process formulation is more suitable for optimizing treatment strategies?",
  "Your observations on the role of the microbiome in shaping immune responses were really thought-provoking. Do you think the gut or the skin microbiome plays a more significant role in modulating systemic immunity?",
  "I wanted to circle back to your insights on the application of network science to study the spread of misinformation online. Do you think the topology of the network or the individual node attributes are more important for predicting viral content?",
  "Your comments on the potential of federated learning for preserving data privacy in collaborative research really piqued my curiosity. Do you think homomorphic encryption or differential privacy techniques are more crucial for ensuring data security?",
];

export const hyperspecific_deepening_pair_2 = (conversationSoFar: string) => `
  # NOW: RESPOND TO THE STUDENT'S HYPER-SPECIFIC QUESTION
  
  - Your task is to provide a thoughtful and detailed response to the student's question, which demonstrated a deep level of knowledge about the topic.
  - Engage with the specifics of their question, addressing the terminology, sub-topics, or edge cases they mentioned.
  - Use this as an opportunity to dive even deeper into the nuances and complexities of the subject matter.
  - Aim to match the student's level of expertise in your response, providing insights that would be valuable to someone who has studied this topic extensively.
  - If appropriate, introduce related advanced concepts or point them to relevant cutting-edge research in the field.
  
  - Your response should move the conversation forward in a substantive way. Avoid simply repeating information already discussed.
  - The goal is to create a truly in-depth, expert-level discussion of the topic, exploring aspects that wouldn't typically be covered in an introductory treatment.
  - If the student referenced an earlier message in the conversation, be sure to address that point directly.
  - Bonus points if you can reference a very early point in the conversation to show continuity.
  
  - Here is the conversation so far:
  
  <conversation>
  ${conversationSoFar}
  </conversation>
  
  - The last line in the conversation is the student's hyper-specific question that you should address.
  
  # Your response:
  
  - YOU MUST move the conversation forward. Do not repeat points that have been already made, and try to vary the teacher's sentence structure and style.
  - THE GOAL IS TO INCREASE THE DEPTH OF THE CONVERSATION, NOT SIMPLY REPEAT POINTS THAT HAVE ALREADY BEEN MADE. INCREASE THE DEPTH AND VARIETY OF THE TOPIC AT HAND.
  - Do not acknowledge the task or prompt in your response. Only content between the <response> tags will be scored.
  - ALWAYS USE THE SECOND PERSON, NEVER REFER TO THE STUDENT IN THE THIRD PERSON.
  
  - Output your answer in the following format:<response> your-response-here </response>
  - YOUR OUTPUT MUST BE in the following format, including the opening and closing tags: <response> your-response-here </response>
  
  Output your response now:
`;
