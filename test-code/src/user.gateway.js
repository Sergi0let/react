const baseUrl = 'https://api.github.com/users';

export const getUserData = (userId) =>
  fetch(`${baseUrl}/${userId}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Not fetch connect');
    })
    .then((userData) => userData);
