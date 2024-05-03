export const getRandomValues = (array: string[], n: number) => {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
};
