import express from "express";
const app = express();
const port = 3000;

//https://nodemon.io

//sudo npm install -g nodemon  --> sürekli değişiklik yaptığında, localhostu durdurup çalıştırmamıza gerek kalmayacaktır.
//artık node yerine nodemon kullanabiliriz -> nodemon index.js


app.get("/", (req, res) => {
  console.log(req)
  res.send("<h1>Hello Everyone</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1><p>My name is Halil</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1><p>Phone: +90 0000 0 000 0</p>");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// Endpoints  --> "/","/about","/contact"


// npm init -y
// npm install express
// type -> import in package.json

