export const userAction = () => {
  const user = localStorage.getItem("data");
  //   console.log(JSON.parse(user).name);

  return {
    type: "SET_USER",
    payload: user,
  };
};
