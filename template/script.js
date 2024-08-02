// Select variables
let pageone = document.querySelector(".pageone")
let headerone = document.querySelector(".pageone h1")
let paraone = document.querySelector(".none")
let boton = document.querySelector(".pageone button")
let headertwo = document.querySelector(".pagetwo h1")
let paratwo = document.querySelector(".pagetwo p ")
let pagetwo = document.querySelector(".pagetwo")
let btn = document.querySelector(".btn")
let inputname = document.querySelector(".name")
let num = 0 


// Functions of the project :)
btn.addEventListener("click", function () {
    // sxith the panels 
    pageone.classList.toggle("acr")
    pagetwo.classList.toggle("act")
    // change the context of the pannels
    if (pageone.classList.contains("acr") === true ) {
        btn.innerHTML = "Sign in ";
        headertwo.innerHTML = "Welcome back !"
        paratwo.innerHTML = "To keep connected with us please login with your personal info"
        inputname.style.cssText = "display : block";
        paraone.style.cssText = "display:none"
        headerone.innerHTML = "Create account"
        boton.innerHTML ="Sign Up"
    }
    else {
        btn.innerHTML = "Sign up ";
        headertwo.innerHTML = "hello, Friend!"
        paratwo.innerHTML = "Enter your personal details and start journey with us"
        inputname.style.cssText = "display : none";
        paraone.style.cssText = "display:block"
        headerone.innerHTML = "Sign in "
        boton.innerHTML ="Sign in"
        num--
    }
    console.log(num)
})