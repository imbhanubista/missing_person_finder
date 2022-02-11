import { USER_DATA } from "../constrants/constrant";

export const actionReducer = (data) => {
  return {
    type: USER_DATA,
    payload: data,
  };
};
