const arrowBtns = document.querySelectorAll(".thuvien .arrow");
const carousel = document.querySelector(".thuvien .carousel");
const cards = document.querySelectorAll(".thuvien .card");
const firstCardWidth = document.querySelector(".thuvien .card").offsetWidth;

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? - 230 : 230;
    })
})

function momodal1(){
    var query = document.querySelector("#tt-sk-cd .tintuc-sukien .description1");
    if (query.classList.contains("active"))
        query.classList.remove("active");
    else query.classList.add("active");
}

function momodal2(){
    var query = document.querySelector("#tt-sk-cd .tintuc-sukien .description2");
    if (query.classList.contains("active"))
        query.classList.remove("active");
    else query.classList.add("active");
}

function momodal3(){
    var query = document.querySelector("#tt-sk-cd .tintuc-sukien .description3");
    if (query.classList.contains("active"))
        query.classList.remove("active");
    else query.classList.add("active");
}

function momodal4(){
    var query = document.querySelector("#tt-sk-cd .tintuc-sukien .description4");
    if (query.classList.contains("active"))
        query.classList.remove("active");
    else query.classList.add("active");
}

function momodal5(){
    var query = document.querySelector(".guithanhcong");
    query.classList.add("active");
}

function momodal6(){
    var query = document.querySelector(".guithanhcong");
    if (query.classList.contains("active"))
        query.classList.remove("active");
}
