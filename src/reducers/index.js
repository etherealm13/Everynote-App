import { combineReducers } from 'redux';
import AuthReducer from './authReducer';
import PostReducer from './postReducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
  post: PostReducer
});

export default rootReducer;
