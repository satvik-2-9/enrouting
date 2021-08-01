import { GET_ALL_WORKSHOPS } from '../actionsType';

const initialState = {
  allWorkshops: [],
};

const workshopReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_WORKSHOPS:
      return {
        ...state,
        allWorkshops: action?.payload,
      };
    default:
      return state;
  }
};

export default workshopReducer;
