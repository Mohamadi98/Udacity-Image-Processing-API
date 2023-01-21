import express from "express";
import resize from "../utilities/imageProcessing";
import path from "path";
import checkFile from "../utilities/checkFileExist";
const route = express.Router();

route.get("/", async (req: express.Request, res: express.Response): Promise<void> => {
  const inputPath: string = path.resolve("images", `${req.query.name}` + ".jpg");
  if (await checkFile(inputPath)) {
    const outputPath: string = path.resolve(
      "thumbnails",
      `${req.query.name}` +
        `_${req.query.width}` +
        `_${req.query.height}` +
        ".jpg"
    );

    const width = parseInt(req.query.width as string) as number;
    const height = parseInt(req.query.height as string) as number;

    if (await resize(inputPath, width, height, outputPath)) {
      res.sendFile(outputPath);
    } else {
      res.status(500).send("error occurred while processing");
    }
  } else {
    res.status(404).send("file does not exist");
  }
});

export default route;
