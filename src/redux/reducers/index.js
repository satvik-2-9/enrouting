import { combineReducers } from 'redux';

import userReducer from './userReducer';
import courseReducer from './courseReducer';
import boardReducer from './boardReducer';
import standardReducer from './standardReducer';

export default combineReducers({
  userReducer,
  courseReducer,
  boardReducer,
  standardReducer,
});
