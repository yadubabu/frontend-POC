export const authAction = (auth: boolean) => {
  return {
    type: "SET_AUTH",
    payload: auth,
  };
};
