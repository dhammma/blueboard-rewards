/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

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
  UPDATE_REWARD,
  UPDATE_REWARD_SUCCESS,
  UPDATE_REWARD_ERROR,
} from './constants';

/**
 * Load the rewards, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REWARDS
 */
export function loadRewards(options) {
  return {
    type: LOAD_REWARDS,
    options,
  };
}

/**
 * Dispatched when the rewards are loaded by the request saga
 *
 * @param  {array} repos The repository data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_REWARDS_SUCCESS passing the repos
 */
export function rewardsLoaded(rewards) {
  return {
    type: LOAD_REWARDS_SUCCESS,
    rewards,
  };
}

/**
 * Dispatched when loading the rewards fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REWARDS_ERROR passing the error
 */
export function rewardsLoadingError(error) {
  return {
    type: LOAD_REWARDS_ERROR,
    error,
  };
}

export function loadUser(userId) {
  return {
    type: LOAD_USER,
    userId,
  };
}

export function userLoaded(userId, user) {
  return {
    type: LOAD_USER_SUCCESS,
    userId,
    user,
  };
}

export function userLoadingError(userId, error) {
  return {
    type: LOAD_USER_ERROR,
    userId,
    error,
  };
}

export function loadReward(rewardId) {
  return {
    type: LOAD_REWARD,
    rewardId,
  };
}

export function rewardLoaded(rewardId, reward) {
  return {
    type: LOAD_REWARD_SUCCESS,
    rewardId,
    reward,
  };
}

export function rewardLoadingError(rewardId, error) {
  return {
    type: LOAD_REWARD_ERROR,
    rewardId,
    error,
  };
}

export function updateReward(rewardId, reward) {
  return {
    type: UPDATE_REWARD,
    rewardId,
    reward,
  };
}

export function rewardUpdated(rewardId, reward) {
  return {
    type: UPDATE_REWARD_SUCCESS,
    rewardId,
    reward,
  };
}

export function rewardUpdatingError(rewardId, error) {
  return {
    type: UPDATE_REWARD_ERROR,
    rewardId,
    error,
  };
}
