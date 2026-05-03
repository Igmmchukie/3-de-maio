function animarFlor() {
  document.getElementById("inicio").style.display = "none";

  const flor = document.getElementById("flor");
  flor.style.display = "block";

  const rosa = document.querySelector(".rosa");
  rosa.classList.add("abrir");

  setTimeout(() => {
    flor.style.display = "none";
    document.getElementById("mensagem").style.display = "block";
  }, 2500);
}