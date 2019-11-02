const deleteUsers = (token, userId) => (
  fetch('http://localhost:5001/users', {
    method: 'DELETE',
    headers: {
      authorization: token,
      'Content-Type': 'application/json',
    },
    body: { userId },
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

export default deleteUsers;