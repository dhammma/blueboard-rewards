/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  LOAD_REWARDS,
  LOAD_REWARDS_SUCCESS,
  LOAD_REWARDS_ERROR,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  rewards: null,
  users: {},
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_REWARDS:
        draft.loading = true;
        draft.error = false;
        draft.rewards = null;
        break;

      case LOAD_REWARDS_SUCCESS:
        draft.rewards = action.rewards;
        draft.loading = false;
        break;

      case LOAD_REWARDS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default appReducer;
