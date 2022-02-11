import { USER_DATA } from "../constrants/constrant";

const initState = {};

export const reducers = (state = initState, action) => {
  switch (action.type) {
    case USER_DATA:
      return action.payload;
    default:
      return state;
  }
};
