export const login = (username, password) => {
  return when(request({
    url: '~/sessions/create',
    method: 'POST',
    crossOrigin: true,
    type: 'json',
    data: {
      username,
      password,
    },
  }))
  .then((response) => {
    let jwt = response.id_token;
    LoginActions.loginUser(jwt);
    return true;
  });
};
