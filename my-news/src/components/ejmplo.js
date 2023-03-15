import React, { useState } from 'react';

function Register() {
  const [formValues, setFormValues] = useState({
    nombreUsuario: '',
    email: '',
    contrasena: '',
  });

  const [formErrors, setFormErrors] = useState({
    nombreUsuario: '',
    email: '',
    contrasena: '',
  });

  const { nombreUsuario, email, contrasena } = formValues;

  // Función para manejar los cambios en los inputs del formulario
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();


    // Aquí puedes hacer lo que quieras con los valores del formulario,
    // como enviar una solicitud a un servidor o almacenar los valores en el estado de la aplicación.
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre de usuario:
        <input
          type="text"
          name="nombreUsuario"
          value={nombreUsuario}
          onChange={handleInputChange}
        />
        {formErrors.nombreUsuario && <p>{formErrors.nombreUsuario}</p>}
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
        {formErrors.email && <p>{formErrors.email}</p>}
      </label>
      <label>
        Contraseña:
        <input
          type="password"
          name="contrasena"
          value={contrasena}
          onChange={handleInputChange}
        />
        {formErrors.contrasena && <p>{formErrors.contrasena}</p>}
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Register;
