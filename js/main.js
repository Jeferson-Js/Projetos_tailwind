const icon = document.querySelector("#icon");

function btnMobile(e) {
  const list = document.querySelector("#list");

  if (!list.classList.toggle("opacity-0")) {
    list.classList.remove("hidden");
    setTimeout(() => {
      list.classList.remove("opacity-0");
      list.classList.add("opacity-100");
    }, 10);
  } else {
    list.classList.remove("opacity-100");
    list.classList.add("opacity-0");
    setTimeout(() => {
      list.classList.remove("hidden");
    }, 300);
  }
  e.anme = e.name === 'grid' ? e.name = 'close' : e.name = 'grid'
};
