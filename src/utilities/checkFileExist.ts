import { promises as fs } from "fs";

/*
function checkFile
checks if a given file path exists or not
*/

const checkFile = async (path: string): Promise<boolean> => {
  try {
    const file = await fs.open(path, "r");
    file.close();
    return true;
  } catch (error) {
    return false;
  }
};

export default checkFile;
