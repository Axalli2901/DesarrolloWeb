// Al cargar la página revisamos si ya hay datos guardados
window.onload = function() {
  const datos = localStorage.getItem("formData");

  if (datos) {
    const persona = JSON.parse(datos);
    document.getElementById("mensaje").textContent =
      `Hola ${persona.nombre}, tienes ${persona.edad} años, tu día de la semana favorito es ${persona.diaFavorito}.`;
  }
};

// Cuando se envía el formulario
document.getElementById("miFormulario").addEventListener("submit", function(e) {
  e.preventDefault();

  const persona = {
    nombre: document.getElementById("nombre").value,
    edad: document.getElementById("edad").value,
    diaFavorito: document.getElementById("diaFavorito").value
  };

  const personaTexto = JSON.stringify(persona);
  localStorage.setItem("formData", personaTexto);

  document.getElementById("mensaje").textContent =
    `Hola ${persona.nombre}, tienes ${persona.edad} años, tu día de la semana favorito es ${persona.diaFavorito}.`;
});
