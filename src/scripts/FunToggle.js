function toggleInfo(element) {
  let container = element.parentElement;
  let infoBox = container.querySelector(".info-box");

  //Cierra todos los cuadros antes de abrir uno nuevo
  document.querySelectorAll(".info-box").forEach((box) => {
    if (box !== infoBox) box.style.display = "none";
  });

  //Alternar visibilidad del cuadro de información
  infoBox.style.display = infoBox.style.display === "block" ? "none" : "block";
}

//Cerrar el cuadro si se hace clic fuera
document.addEventListener("click", function (event) {
  if (!event.target.closest(".button-container")) {
    document
      .querySelectorAll(".info-box")
      .forEach((box) => (box.style.display = "none"));
  }
});






//JS PARA MANEJO DE DOM SIN EVENTOS

// document.getElementById('toggleButton').addEventListener('click', function() {
//     const infoBox = this.parentElement.querySelector('.info-box');
//     const allInfoBoxes = document.querySelectorAll('.info-box');
    
//     // Cerrar todos los demás info-box
//     allInfoBoxes.forEach(box => {
//       if (box !== infoBox) box.classList.add('hidden');
//     });
    
//     // Alternar el actual
//     infoBox.classList.toggle('hidden');
//   });

//   // Cerrar al hacer click fuera
//   document.addEventListener('click', (event) => {
//     const isInside = event.target.closest('.button-container');
//     if (!isInside) {
//       document.querySelectorAll('.info-box').forEach(box => {
//         box.classList.add('hidden');
//       });
//     }
//   });