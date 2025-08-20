export const generateUniqueNumbers = (n: number, max: number): number[] => {
  if (n > max + 1) {
    throw new Error(
      "Cannot generate more unique numbers than the range allows.",
    );
  }

  const result: number[] = [];

  while (result.length < n) {
    const num = Math.floor(Math.random() * (max + 1));
    if (!result.includes(num)) {
      result.push(num);
    }
  }

  return result;
};
