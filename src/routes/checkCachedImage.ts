import express from "express";
import path from "path";
import checkFile from "../utilities/checkFileExist";
const cached = express.Router();

cached.get("/", async (req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> => {
  const filePath: string = path.resolve(
    "thumbnails",
    `${req.query.name}` +
      `_${req.query.width}` +
      `_${req.query.height}` +
      ".jpg"
  );

  if (await checkFile(filePath)) {
    res.sendFile(filePath);
  } else {
    next();
  }
});

export default cached;
