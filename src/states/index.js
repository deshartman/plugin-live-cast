import { combineReducers } from 'redux';

import { reduce as LiveCastReducer } from './LiveCastState';

// Register your redux store under a unique namespace
export const namespace = 'live-cast';

// Combine the reducers
export default combineReducers({
  liveCast: LiveCastReducer,
});
