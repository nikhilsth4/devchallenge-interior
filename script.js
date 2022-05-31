const body = document.querySelector("body")
const header = document.querySelector(".header")
const menu = document.querySelector(".menu")
const closeBtn = document.querySelector(".close")

menu.addEventListener("click", () => {
  body.classList.add("no-scroll")
  header.classList.add("expanded")
})

closeBtn.addEventListener("click", () => {
  body.classList.remove("no-scroll")
  header.classList.remove("expanded")
})
