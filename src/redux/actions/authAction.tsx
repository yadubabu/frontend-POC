export const authAction = (auth: boolean) => {
  console.log(auth);

  return {
    type: "SET_AUTH",
    payload: auth,
  };
};
