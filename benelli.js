// Código JavaScript para validación del formulario de contacto (puedes expandir esto según tus necesidades)

const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Aquí puedes realizar la validación de los campos del formulario

  // Ejemplo de mostrar los valores en la consola
  console.log('Nombre:', name);
  console.log('Email:', email);
  console.log('Mensaje:', message);

  // Aquí podrías añadir código para enviar la información a un servidor o hacer alguna acción adicional
});
