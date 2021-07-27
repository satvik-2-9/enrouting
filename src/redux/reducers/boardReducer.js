import { GET_ALL_BOARDS } from '../actionsType';

const initialState = {
  allBoards: [],
};

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BOARDS:
      return {
        ...state,
        allBoards: action?.payload,
      };
    default:
      return state;
  }
};

export default boardReducer;
