var timeID;
var timeID2;
var a = document.getElementsByClassName("dots");

var b = document.getSelection

var delay = 3 * 1000;
var n = 1;

function slide_show(i){
    var check = document.getElementById("check");
    var slide = document.getElementById("slide");
    check.removeAttribute("id");

    var result, i, elm;
    
    for(i = 0; i<6; i++){
        elm = a[i];
        if(elm.getAttribute("for") == "slide" + n.toString()){
            result = elm;
        }
    }
    result.setAttribute("id", "checked");
    img.setAttribute("src", "/img/slider/slide_" + n.toString() + ".png");



    

}

window.onload = function () {
    slide_show(1);
    timeID2 = setInterval(function () {
        autoSlide(1)
    }, delay);
};

function autoSlide(n)
{
    showSlide(n)
    clearInterval(timeID2);
    clearInterval(timeID);
    timeId = setInterval(function () {
        n = n + 1;
        if (n > 6) {
            n = 1;
        }
        showSlide(n);
        console.log(n);
    }, delay); 
}