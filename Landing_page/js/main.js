function btnMobile(e) {
  const list = document.querySelector("#list-mobile");

  if (list.classList.contains("opacity-0")) {
    list.classList.toggle("hidden");
    setTimeout(() => {
      list.classList.remove("opacity-0");
      list.classList.add("opacity-100");
    }, 10);
  } else {
    list.classList.remove("opacity-100");
    list.classList.add("opacity-0");
    setTimeout(() => {
      list.classList.add("hidden");
    }, 300);
  }
  //How to close the menu when click on the links
  if (e.matches("a")) {
    list.classList.add("opacity-0");
    list.classList.remove("opacity-100");
    setTimeout(() => {
      list.classList.add("hidden");
    }, 300);
    e.name = e.name === "menu";
  }
  e.name = e.name === "menu" ? (e.name = "close") : (e.name = "menu");
}
