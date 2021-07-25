import { GET_USERNAME } from "../actiontypes";

const initialState = "";

export default function (state = initialState, action) {
  if (action.type === GET_USERNAME) {
    return action.payload.username;
  }
  return state;
}
