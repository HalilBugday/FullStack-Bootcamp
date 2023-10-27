import express from "express";
const app = express();
const port = 3000;

//bu part postman adlı uygulama ve req. message üzerinedir.
//tüm gönderilen dataları postman API platformunda inceleyiniz.

//postman'ı indirmemiz gerekiyor (API platformudur)
//https://www.postman.com


app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.post("/register", (req, res) => {
  //Do something with the data
  res.sendStatus(201);
});

app.put("/user/halil", (req, res) => {
  res.sendStatus(200);
});

app.patch("/user/halil", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/halil", (req, res) => {
  //Deleting
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
