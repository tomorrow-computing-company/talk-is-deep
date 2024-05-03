export const extractTagContent = (text: string, tag: string) => {
  let startTag = `<${tag}>`;
  let start = text.indexOf(startTag) + startTag.length;
  let content = text.substring(start);
  if (content.includes(`</${tag}>`)) {
    content = content.replace(`</${tag}>`, "");
  }
  return content.trim();
};
