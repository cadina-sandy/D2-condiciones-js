const plantClick = document.querySelector("#plant-click");
const stickerInputs = document.querySelectorAll(".sticker-input");
const stickerButton = document.querySelector("#check-stickers");
const stickerResult = document.querySelector("#sticker-result");
const passwordButton = document.querySelector("#check-password");
const passwordResult = document.querySelector("#password-result");

// Ejercicio 1: agrega o quita la clase del borde rojo
plantClick.addEventListener("click", () => {
  plantClick.classList.toggle("active-border");
});

// Ejercicio 2: suma los stickers que escribe el usuario
stickerButton.addEventListener("click", () => {
  let total = 0;

  stickerInputs.forEach((input) => {
    total += Number(input.value);
  });

  // Si son mas de 10, se muestra el mensaje de error
  if (total <= 10) {
    stickerResult.innerHTML = `llevas ${total} stickers`;
  } else {
    stickerResult.innerHTML = "Llevas demasiados stickers";
  }
});

// Ejercicio 3: junta los 3 numeros y revisa el password
passwordButton.addEventListener("click", () => {
  const digit1 = document.querySelector("#digit-1").value;
  const digit2 = document.querySelector("#digit-2").value;
  const digit3 = document.querySelector("#digit-3").value;
  const password = digit1 + digit2 + digit3;

  if (password === "911") {
    passwordResult.innerHTML = "password 1 correcto";
  } else if (password === "714") {
    passwordResult.innerHTML = "password 2 correcto";
  } else {
    passwordResult.innerHTML = "password incorrecto";
  }
});
