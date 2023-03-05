import express, { Response, Request } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import helmet from "helmet";

const app = express();
const port = 3001;
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(helmet());

app.get("/", (req:Request, res:Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  return console.log(`Server is listening at http://localhost:${port}`);
});
