export function getRandomBiomeSize(
  min: number = 2,
  max: number = 4,
): { width: number; height: number } {
  const width = Math.floor(Math.random() * (max - min + 1) + min);
  const height = Math.floor(Math.random() * (max - min + 1) + min);

  return { width, height };
}
