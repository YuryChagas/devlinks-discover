function toggleMode() {
  const body = document.documentElement
  const img = document.querySelector("#profile img")

  body.classList.toggle("light")

  if(body.classList.contains("light")) {
    img.setAttribute("src","./assets/avatar-light.png")
  }else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
