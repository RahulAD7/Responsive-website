const burger = document.querySelector(".burger");
const menuList = document.querySelector(".menuList");


burger.addEventListener("click",() =>{
    burger.classList.toggle("active");
    menuList.classList.toggle("active");
})

// const nothg = document.querySelector('.menuList')

// nothg.addEventListener("click",()=> {
//     nothg.classList.remove("active");
// })

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",() =>{
    burger.classList.remove('active');
    menuList.classList.remove('active');
}))





