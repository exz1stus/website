"use strict"


const image = document.getElementById("image");

const switchScene = () => 
{
    const scene1 = document.getElementById("S1");
    const scene2 = document.getElementById("S2");
    scene1.style.display = "none";
    scene2.style.display = "block";
}

image.addEventListener("click",switchScene);


