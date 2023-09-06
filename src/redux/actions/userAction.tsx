export const userAction = () => {
  const user = sessionStorage.getItem("data");

  return {
    type: "SET_USER",
    payload: user,
  };
};
