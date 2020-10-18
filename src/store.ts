import { createStore } from 'redux';
import { combineReducers } from '@reduxjs/toolkit';
import { trackerBLockReducer } from './ducks/index';

const rootReducer = combineReducers({
  trackerBlock: trackerBLockReducer,
});

export default createStore(rootReducer);
