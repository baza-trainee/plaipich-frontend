export const formatText = (string: string) => {
  const arrayOfStrings = string
    .split(/(\n)/)
    .filter((str, ind) => ind % 2 === 0);
  return arrayOfStrings;
};
