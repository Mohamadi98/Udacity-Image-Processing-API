import express from "express";
import path from "path";
import checkFile from "../utilities/checkFileExist";
const cached = express.Router();

cached.get("/", async (req, res, next): Promise<void> => {
  const filePath = path.resolve(
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
