const FLogin = (email, password) => (
  fetch('http://localhost:5001/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: { email, password },
  })
    .then((respuesta) => {
      if (respuesta.status === 200) {
        return respuesta.json();
      } if (respuesta.status === 400) {
        return Promise.reject(new Error('Ingrese su usuario y/o contraseña'));
      }
      return Promise.reject(new Error('Solicite credenciales con el administrador'));
    })
);

export default FLogin;
