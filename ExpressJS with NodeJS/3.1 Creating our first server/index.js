import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});


// 1 ve 2 kolay zaten dosya aç içine index.js oluştur.
// 3 -> npm init -y (.json oluştur)
// 4 -> npm install express (node modules cart curt geldi) (express server'ın .json'a type: "module" -> unutma)
// 5 -> kod yukarda
// 6 -> Terminale -> node your_apps.js      ,Tarayıcıya -> localhost:3000

// Cannot get bir hata
