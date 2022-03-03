import express from 'express';
import config  from 'config';
import log from "./logger";
import connect from "./db/connect";
import routes from "./routes";

const app = express();

const port = config.get("port") as number;
const host = config.get("host") as string;



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, host, ()=> {
  log.info(`Server is listening on ${host}:${port}`);

  connect();

  routes(app);
})