let input = document.querySelectorAll("#input")
let errorMessege = document.querySelectorAll("#error")
let btn = document.getElementById("BTN")
let form = document.getElementById("form")
let img = document.querySelectorAll("#img")


form.addEventListener("submit", submit)

function submit(e) {
    e.preventDefault()
}

btn.onclick = function() {
    if(input[0].value === "") {
        errorMessege[0].style.display = "block"
        img[0].style.display = "block"
    }else {
        errorMessege[0].style.display = "none"
        img[0].style.display = "none"
    }
    if(input[1].value === "") {
        errorMessege[1].style.display = "block"
        img[1].style.display = "block"
    }else {
        errorMessege[1].style.display = "none"
        img[1].style.display = "none"
    }
    if(input[2].value === "") {
        errorMessege[2].style.display = "block"
        img[2].style.display = "block"
    }else {
        errorMessege[2].style.display = "none"
        img[2].style.display = "none"
    }
    if(input[3].value === "") {
        errorMessege[3].style.display = "block"
        img[3].style.display = "block"
    }else {
        errorMessege[3].style.display = "none"
        img[3].style.display = "none"
    }
}