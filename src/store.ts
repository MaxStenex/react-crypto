import { createStore } from 'redux';
import { combineReducers } from '@reduxjs/toolkit';
import { favoriteCoinsReducer, trackerBLockReducer } from './ducks/index';

const rootReducer = combineReducers({
  trackerBlock: trackerBLockReducer,
  favoriteCoins: favoriteCoinsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
