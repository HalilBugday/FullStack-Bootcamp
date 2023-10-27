document.getElementsByTagName("li")[2].style.color = "blue";

listLength = document.getElementsByTagName("li").length;

alert(listLength);
console.log(listLength);

document.getElementsByClassName("btn")[0].style.color = "yellow";
document.getElementById("title").innerHTML="Good Bye";
document.querySelector(".btn");   //css'deki selectorler gibi çalışır.
a = document.querySelector("li a");
document.querySelector("#list .item"); //list'deki ilk elemanı seçer (3 taneside item classında)
document.querySelectorAll("#list .item"); //list'deki tüm item class'ları seçer
document.querySelectorAll("#list .item")[1].style.color = "pink"; //spesifik seçim
document.querySelector("h1").style.fontSize="5rem";
console.log(a);
//şimdiye kadar javascripti hep stil için kullandık ancak html, css ve JS'i kendi özellikleri için kullanmalıyız.
// HTML->structure, CSS->style, JavaScript->behaviour


document.querySelector("button").classList.add("invisible"); //buton görünmez
//<button class="btn invisible" style="color: yellow;">Click Me</button>
//buttona yeni bir class oluşturduk butona ayrıca fakat bu HTML'de görünmesede sitede sourceda görülür.
//ve button classına uygulandı
//ve şu an css'de invisible classı yaratıldı.

document.querySelector("button").classList.remove("invisible"); //buton görünür
document.querySelector("button").classList.toggle("invisible");//on-off gibidir (şimdi on)
document.querySelector("button").classList.toggle("invisible");//şimdi off

document.querySelector("h1").textContent="Bye Bye"; //direkt içeriği değiştirir html etiketi kullanılmaz.
document.querySelector("h1").innerHTML="<em> GOOD BYE </em>";// içeriği değiştirir ve ayrıca etiketleri kullanabilirsin





