const btnback = document.querySelector(".btn-back"),
      btnnext = document.querySelector(".btn-next"),
      slider = document.querySelector("#sliderjs"),
      slidersection = document.querySelectorAll(".slider-section");

btnback.addEventListener("click", e => moveToLeft());
btnnext.addEventListener("click", e => moveToRight());

setInterval(() => {
    moveToRight();
}, 4500);

let operation = 0,
    counter = 0,
    widthimg = 100 / slidersection.length;

function moveToRight(){
    if (counter >= slidersection.length-1){
        counter = 0;
        operation = 0;
        slider.style.transform = `translate(-${operation}%)`;
    }else{
        counter++;
        operation = operation+widthimg;
        slider.style.transform = `translate(-${operation}%)`;
        slider.style.transition = "all 0.6s ease";

    }
}
function moveToLeft(){
    counter--;
    if (counter < 0) {
        counter = slidersection.length-1;
        operation = widthimg * (slidersection.length-1);
        console.log(operation);
        slider.style.transform = `translate(-${operation}%)`;
    }else {
        operation = operation -widthimg;
        slider.style.transform = `translate(-${operation}%)`;
        slider.style.transition = "all 0.6s ease";
    }
}

    

