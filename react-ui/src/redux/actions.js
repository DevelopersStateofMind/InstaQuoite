import { GET_USERNAME } from "./actiontypes";

export const updateUsername = (username) => {
  console.log(username);

  return {
    type: GET_USERNAME,
    payload: {
      username,
    },
  };
};
