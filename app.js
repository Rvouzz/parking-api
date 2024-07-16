import express from "express";
import bodyParser from "body-parser";
import router from "./router.js";

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(router);

app.listen(port, () => {
  console.log(`Application listening on port ${port}`);
});
