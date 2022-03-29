export const API_URL = "https://user-registration-api.vercel.app";

export const setItemTOStorage = (name, value) => {
  localStorage.setItem(name, value);
};

export const getUserEmail = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return user.email;
};
