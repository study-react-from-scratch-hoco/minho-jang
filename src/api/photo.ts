const photoURL = "https://picsum.photos/200";

export const getMyAwesomePic = () =>
  new Promise((resolve, _reject) => {
    setTimeout(() => resolve(photoURL), 1500);
  });
