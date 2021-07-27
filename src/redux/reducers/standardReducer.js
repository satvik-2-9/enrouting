import { GET_ALL_STANDARDS } from '../actionsType';

const initialState = {
  allStandards: [],
};

const standardReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_STANDARDS:
      return {
        ...state,
        allStandards: action?.payload,
      };
    default:
      return state;
  }
};

export default standardReducer;
