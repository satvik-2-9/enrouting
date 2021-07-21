import { GET_ALL_COURSES, GET_USER_COURSES } from '../actionsType';

const initialState = {
  allCourses: null,
  userCourses: null,
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COURSES:
      return {
        ...state,
        allCourses: action?.payload,
      };
    case GET_USER_COURSES:
      return state;

    default:
      return state;
  }
};

export default courseReducer;