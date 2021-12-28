let cont = 0;
window.onload = () =>{
 
    let summar = document.getElementById("adding");
    let restar = document.getElementById("substract");
    let imag1 = document.getElementById("img1");
    let imag2 = document.getElementById("img2");
    let imag3 = document.getElementById("img3");
    let imag4 = document.getElementById("img4");

summar.addEventListener("click" , () =>{
    add()
})

restar.addEventListener("click", () =>{
subs()
})

imag1.addEventListener("click", ()=>{
 selectn1()   
})

imag2.addEventListener("click", ()=>{
    selectn2()   
   })

   imag3.addEventListener("click", ()=>{
    selectn3()   
   })

   imag4.addEventListener("click", ()=>{
    selectn4()   
   })

}

function add(){
cont += 1
contador = document.getElementById("contadorUnidades");
contador.innerText = cont
}

function subs(){

    cont -= 1
    contador = document.getElementById("contadorUnidades");
    contador.innerText = cont
    if(cont < 0){
        contador.innerText = 0
    }

}

function selectn1(){
    imgDisplayed = document.getElementById("main-pic");
    classDisplayed = document.getElementById("img1")
    classDisplayed.setAttribute("class", "img1")
    imgDisplayed.src = "./image-product-1.jpg"

    class2 = document.getElementById("img2")
    class2.classList.remove("img1")
    class3 = document.getElementById("img3")
    class3.classList.remove("img1")
    class4 = document.getElementById("img4")
    class4.classList.remove("img1")

}

function selectn2(){
    imgDisplayed = document.getElementById("main-pic");
    classDisplayed = document.getElementById("img2")
    classDisplayed.setAttribute("class", "img1")
    imgDisplayed.src = "./image-product-2.jpg"

    class1 = document.getElementById("img1")
    class1.classList.remove("img1")
    class3 = document.getElementById("img3")
    class3.classList.remove("img1")
    class4 = document.getElementById("img4")
    class4.classList.remove("img1")

}

function selectn3(){
    imgDisplayed = document.getElementById("main-pic");
    classDisplayed = document.getElementById("img3")
    classDisplayed.setAttribute("class", "img1")
    imgDisplayed.src = "./image-product-3.jpg"

    class1 = document.getElementById("img1")
    class1.classList.remove("img1")
    class2 = document.getElementById("img2")
    class2.classList.remove("img1")
    class4 = document.getElementById("img4")
    class4.classList.remove("img1")

}

function selectn4(){
    imgDisplayed = document.getElementById("main-pic");
    classDisplayed = document.getElementById("img4")
    classDisplayed.setAttribute("class", "img1")
   
    imgDisplayed.src = "./image-product-4.jpg"

    class3 = document.getElementById("img3")
    class3.classList.remove("img1")
    class2 = document.getElementById("img2")
    class2.classList.remove("img1")
    class1 = document.getElementById("img1")
    class1.classList.remove("img1")

}

function myFunction(){
var x = document.getElementById("myLinks");
if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
    
