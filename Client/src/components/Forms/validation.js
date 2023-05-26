const validation = (userData) => {
  let errors = {};

  if (!/\S+@\S+\.\S+/.test(userData.email)) {
    errors.email = "El email es invalido";
  }
  if (userData.email === "") {
    errors.email = "Este campo no puede estar vacio";
  }
  if (userData.email && userData.email.length > 35) {
    errors.email = "El nombre no puede superar los 35 caracteres";
  }
  if (!userData.password.match(/\d/)) {
    errors.password = "La contraseña debe contener al menos un número";
  }
  if (userData.password.length < 6 && userData.password.length > 15) {
    errors.password = "La contraseña debe tener entre 6 y 15 caracteres";
  }
  return errors;
};

export default validation;
