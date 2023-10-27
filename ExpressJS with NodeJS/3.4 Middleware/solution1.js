//EXPRESS
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";


//Middleware, işletim sisteminde bulunanların ötesinde yazılım uygulamalarına hizmet sağlayan bir bilgisayar yazılımı türüdür.
//body-parsing is a middleware
//morgan is a custom middleware
//https://expressjs.com/en/starter/hello-world.html
//https://www.npmjs.com


const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

//Ara yazılım, işletim sisteminde bulunanların ötesinde yazılım uygulamalarına hizmet sağlayan bir bilgisayar yazılımı türüdür.