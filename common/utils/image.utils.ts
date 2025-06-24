export const getRatiodDimensions = (
  width: number,
  height: number,
  desiredWidth: number
) => {
  const ratio = width / height;
  return { width: desiredWidth, height: desiredWidth / ratio };
};
