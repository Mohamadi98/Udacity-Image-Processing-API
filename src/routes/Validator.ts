import epxress from "express";
const validator = epxress.Router();

validator.get("/", (req: epxress.Request, res: epxress.Response, next: epxress.NextFunction): void => {
  const name = req.query.name as string;
  const width = parseInt(req.query.width as string) as number;
  const height = parseInt(req.query.height as string) as number;

  if (name === undefined || Number.isNaN(width) || Number.isNaN(height)) {
    res
      .status(400)
      .send(
        "missing parameters values, please provide the file name, (width and height in a numerical form)"
      );
  } else {
    next();
  }
});

export default validator;
