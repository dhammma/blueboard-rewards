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
  LOAD_USER,
  LOAD_USER_SUCCESS,
  LOAD_USER_ERROR,
  LOAD_REWARD,
  LOAD_REWARD_SUCCESS,
  LOAD_REWARD_ERROR,
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

      case LOAD_USER:
        draft.users[action.userId] = {
          loading: true,
          user: null,
          error: false,
        };
        break;

      case LOAD_USER_SUCCESS:
        draft.users[action.userId] = {
          loading: false,
          user: action.user,
          error: false,
        };
        break;

      case LOAD_USER_ERROR:
        draft.users[action.userId] = {
          loading: false,
          user: null,
          error: action.error,
        };
        break;

      case LOAD_REWARD:
        draft.reward = {
          loading: true,
          rewardId: action.rewardId,
          data: null,
          error: null,
        };
        break;

      case LOAD_REWARD_SUCCESS:
        draft.reward = {
          loading: false,
          rewardId: action.rewardId,
          data: action.reward,
          error: null,
        };
        break;

      case LOAD_REWARD_ERROR:
        draft.reward = {
          loading: false,
          rewardId: action.rewardId,
          data: null,
          error: action.error,
        };
        break;
    }
  });

export default appReducer;
