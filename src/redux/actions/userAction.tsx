export const userAction = () => {
  const user: string | null = JSON.parse(localStorage.getItem("data") || "{}");

  return {
    type: "SET_USER",
    payload: user,
  };
};
