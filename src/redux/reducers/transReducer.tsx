import { Types } from "../enums/constants";

const initialValue = {
  trans: [],
};

interface Action {
  type: string;
  payload: any;
}

export type DataAction = Action;
const transReducer = (state = initialValue, action: DataAction) => {
  if (action.type === Types.GET_TRANS) {
    return [...state.trans, { trans: action.payload }];
  } else {
    return state;
  }
};

export default transReducer;
