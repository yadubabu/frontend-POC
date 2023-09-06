import axios from "axios";
import { getTransApi } from "../apis";
import { Types } from "../enums/constants";
import { Trans } from "../../dataTypes";

export const getTransactions = async (transactions: Trans) => {
  return {
    type: Types.GET_TRANS,
    payload: transactions,
  };
};
