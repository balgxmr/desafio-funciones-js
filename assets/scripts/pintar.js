// Punto #1: Cambiar a negro al hacer clic y volver al color original al hacer clic de nuevo
const divs = document.querySelectorAll("div");
divs.forEach((div) => {
  let colorOg = div.style.backgroundColor;
  div.addEventListener("click", function () {
    if (this.style.backgroundColor === "black") {
      this.style.backgroundColor = colorOg;
    } else {
      colorOg = this.style.backgroundColor;
      this.style.backgroundColor = "black";
    }
  });
});

// Variable global para almacenar el color seleccionado de las teclas
let selectedColor = "";

// Punto #2: Cambiar color de "key" al presionar las teclas a, s o d
document.addEventListener("keydown", function (event) {
  const keyDiv = document.getElementById("key");
  if (event.key === "a") {
    selectedColor = "pink";
  } else if (event.key === "s") {
    selectedColor = "orange";
  } else if (event.key === "d") {
    selectedColor = "lightblue";
  }

  // Si es una de las teclas a, s, d, cambiar el color del div "key"
  if (["a", "s", "d"].includes(event.key)) {
    keyDiv.style.backgroundColor = selectedColor;
  }
});

// Punto 3: Div con los colores morado, gris y café
document.addEventListener("keydown", function (event) {
  if (["q", "w", "e"].includes(event.key)) {
    const newDiv = document.createElement("div");
    newDiv.style.width = "200px";
    newDiv.style.height = "200px";
    newDiv.style.marginTop = "20px";
    newDiv.style.border = "2px solid black";

    //event.key y comprobamos el input del usuario
    if (event.key === "q") {
      newDiv.style.backgroundColor = "purple";
    } else if (event.key === "w") {
      newDiv.style.backgroundColor = "gray";
    } else if (event.key === "e") {
      newDiv.style.backgroundColor = "brown";
    }

    // Se agregael nuevo div al body
    document.body.appendChild(newDiv);
  }
});
