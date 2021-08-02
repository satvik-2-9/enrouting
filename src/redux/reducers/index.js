import { combineReducers } from 'redux';

import userReducer from './userReducer';
import courseReducer from './courseReducer';
import boardReducer from './boardReducer';
import standardReducer from './standardReducer';
import testimonialReducer from './testimonialReducer';
import eventReducer from './eventReducer';
import workshopReducer from './workshopReducer';
import blogReducer from './blogReducer';

export default combineReducers({
  userReducer,
  courseReducer,
  boardReducer,
  standardReducer,
  testimonialReducer,
  eventReducer,
  workshopReducer,
  blogReducer,
});
