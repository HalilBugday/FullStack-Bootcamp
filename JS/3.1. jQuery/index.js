
$(document).ready(function(){
    $("h1").css("color", "red"); // (cssde yok)
    $("h1").css("font-size", "5rem"); // (cssde yok)
    $("h2").addClass("big-title big-title-color"); //$("h2").removeClass("big-title"); (burda 1 den fazla sınıf ekledik böyle yapılır)
    $("h2").text("IZTECH CENG"); //text manipulating
    $("button").text("Choice"); //text manipulating for button text
    // $("button").html("<em>Choice</em>"); -->--> innerHTML
    $("img").attr("/iyte.png");
    $("a").attr("href", "https://www.yahoo.com"); //attribute manupulating

    $("h1").click(function(){
        $("h1").css("color", "purple"); //adding event listeners. h1 üzerini tıkla
    });

    $("button").click(function(){
        $("h1").css("color", "black"); //bu event listener drumpdaki for döngüsüne karşılık gelir (i=0, i<5, i++)
    });

    $(document).keypress(function(event){
        $("h1").text(event.key)
    });

    $("h1").on("mouseover", function(){
        $("h1").css("color", "pink");
    });


});
// $ --> document.querySelector("h1");
//note: consola -> $("h1").hasClass("font-size"); kodu ile o sınıfa dahil olup olmadığını öğrenebiliriz
//note: consola -> $("h1").attr("class"); kodu ile h1 etiketine uygulanmıs tüm classları görebiliriz
//note: consola -> $("h1").before("<button>Click Me</button>"); host çalışır halde bile bir buton ekler.
                //before, after, prepend, append

//$("h1").css("color", "red"); aslında bu kod yeterli, ready function sadece kütüphanenin hazır olmasını beklemektir.

//https://developer.mozilla.org/en-US/docs/Web/JavaScript