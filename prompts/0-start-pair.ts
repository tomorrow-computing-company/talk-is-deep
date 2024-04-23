export const start_pair_1 = (
  abstract: string
) => `# NOW: GENERATE THE FIRST QUESTION
  
  - Here is the abstract you should use as inspiration for your question
  
  <abstract>
  ${abstract}
  </abstract>
  
  # Current Task
  
  - Now generate a complex multilayered, question with nested implications in it, the kind of question a serious student would ask, that could only be answered by a top university expert.
  - The question does not need to be answerable by the abstract, but it should be inspired by the abstract in some way.
  - DO NOT: reference the abstract directly, or any study mentioned in the abstract. Only take inspiration. Do not reference the abstract directly.
  - YOU MUST Output your question in the following format, including the opening and closing tags: <response>{your question}</response>
  - Do not acknowledge the task or prompt in your response. Only content between the <response> tags will be scored.
  
  Output your question now:
  `;

export const start_pair_2 = (
  question: string
) => `# NOW: GENERATE THE FIRST ANSWER
  
  - Here is the question you are required to answer:
  
  <question>
  ${question}
  </question>
  
  - Now generate a complex multilayered, answer with nested implications in it, the kind of answer a serious expert would give, that could only be produced by a top university expert.
  - The answer does not need to be answerable by the abstract, but it should be inspired by the abstract in some way.
  - Use varied sentence structure and style, and emulate familiar social language, while maintaining a professional tone and high level of expertise.
  - Output your answer in the following format:<response> {your answer} </response>
  - YOUR OUTPUT MUST BE in the following format, including the opening and closing tags: <response>{your answer}</response>
  
  - Do not acknowledge the task or prompt in your response. Only content between the <response> tags will be scored.
  
  Your Answer:`;
