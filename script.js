const unread = document.getElementsByClassName("notification");
const mark = document.querySelector(".p-mark");
const circles = document.getElementsByClassName("orange-circle");
const number = document.querySelector(".numb-noti");

mark.addEventListener("click", () => {
    for(let i = 0; i < unread.length; i++) {
        unread[i].style.backgroundColor = "white";
        circles[i].style.display = "none";
        number.innerHTML = 0;
    }
})