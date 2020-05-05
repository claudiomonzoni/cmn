// slider
const slideHome = new Siema({
  selector: "#sliderHome",
  duration: 800,
  easing: "ease-in-out",
  perPage: 1,
  startIndex: 0,
  draggable: true,
  loop: true,
});
setInterval(() => slideHome.next(), 6000);

const slideTesti = new Siema({
  selector: "#sliderTesti",
  duration: 800,
  easing: "ease-in-out",
  perPage: 1,
  startIndex: 0,
  draggable: true,
  loop: true,
});
setInterval(() => slideTesti.next(), 6000);

// icono
const menuIco = document.querySelector(".menu-toggle");
const menuFull = document.querySelector("#menuFull");
const abierto = false;

let abrirMenuFull = () => {
  this.abierto = !this.abierto;
  menuFull.classList.remove("menuFullAbierto");
  menuFull.classList.remove("desanimaMenu");
  menuIco.classList.toggle("is-active");

  this.abierto
    ? menuFull.classList.toggle("menuFullAbierto")
    : menuFull.classList.toggle("desanimaMenu");
};

menuIco.addEventListener("click", abrirMenuFull);
