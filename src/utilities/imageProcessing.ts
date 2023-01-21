import sharp from "sharp";

const resize = async (
  inputPath: string,
  width: number,
  height: number,
  outputPath: string
): Promise<boolean> => {
  try {
    await sharp(inputPath).resize(width, height).toFile(outputPath);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export default resize;
