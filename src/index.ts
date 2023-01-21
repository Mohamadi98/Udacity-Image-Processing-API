import express from "express";
import route from "./routes";
import validator from "./routes/Validator";
import cached from "./routes/checkCachedImage";

const app = express();
const PORT = 3000;
const middleware = [validator, cached, route];

app.use("/images", middleware);

app.listen(PORT, () => {
  console.log(`server started at https://localhost:${PORT}`);
});

export default app;
