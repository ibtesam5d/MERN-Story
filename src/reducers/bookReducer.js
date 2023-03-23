import getCurentUser from "../utils/getCurrentUser";

const currUserId = getCurentUser()?._id;
console.log(currUserId);
export const INITIAL_STATE = {
  userId: currUserId,
  title: "",
  desc: "",
  shortDesc: "",
  category: "",
  price: 0,
  cover: "",
};

export const bookReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case "ADD_COVER":
      return {
        ...state,
        cover: action.payload.cover,
      };

    default:
      return state;
  }
};
