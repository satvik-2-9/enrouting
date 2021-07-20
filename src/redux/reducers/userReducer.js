import { LOGIN, SIGNUP, LOGOUT, SET_USER_DETAILS } from '../actionsType';
import Cookies from 'js-cookie';

const initialState = {
  userData: null,
  isAuthenticated: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      Cookies.set('userJWT', action?.payload?.token, {
        expires: 7,
      });
      return {
        ...state,
        userData: action?.payload?.userDetails,
        isAuthenticated: true,
      };

    case SIGNUP:
      Cookies.set('userJWT', action?.payload?.token, {
        expires: 7,
      });
      return {
        ...state,
        userData: action?.payload?.userDetails,
        isAuthenticated: true,
      };

    case SET_USER_DETAILS:
      return {
        ...state,
        userData: action?.payload,
        isAuthenticated: true,
      };

    case LOGOUT:
      Cookies.remove('userJWT');
      return initialState;

    default:
      return state;
  }
};

export default userReducer;