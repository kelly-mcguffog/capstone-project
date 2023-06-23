import { combineReducers } from 'redux';
import destinationReducer from './destinationReducer';

const rootReducer = combineReducers({
  destinations: destinationReducer,
  // Add other reducers if needed
});

export default rootReducer;