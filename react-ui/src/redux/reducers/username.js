import { GET_USERNAME } from "../actiontypes";

const initialState = "";

function usernameReducer (state = initialState, action) {
  if (action.type === GET_USERNAME) {
    return action.payload.username;
  }
  return state;
}

export default usernameReducer;
