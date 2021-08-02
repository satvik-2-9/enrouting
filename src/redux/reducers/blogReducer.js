import { GET_ALL_BLOGS } from '../actionsType';

const initialState = {
  allBlogs: [],
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BLOGS:
      return {
        ...state,
        allBlogs: action?.payload,
      };
    default:
      return state;
  }
};

export default blogReducer;
