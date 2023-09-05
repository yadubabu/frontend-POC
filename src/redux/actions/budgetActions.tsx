import axios from "axios";
import { getbudgetApi, setbudgetApi } from "../apis";
import { Types } from "../enums/constants";
import { Budget } from "../../dataTypes";

export const getBudget = (budget: Budget) => {
  return {
    type: Types.GET_BUDGET,
    payload: budget,
  };
};

// export const getBudget = async (email: string) => {
//   const response = await axios.get(`${getbudgetApi}/${email}`);
//   return {
//     type: Types.GET_BUDGET,
//     payload: response.data,
//   };
// };
// export const setBudget = async (email: string) => {
//   const response = await axios.post(`${setbudgetApi}/${email}`,{

//   });
//   return {
//     type: Types.SET_BUDGET,
//     payload: response.data,
//   };
// };
