/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_REWARDS = 'boilerplate/App/LOAD_REWARDS';
export const LOAD_REWARDS_SUCCESS = 'boilerplate/App/LOAD_REWARDS_SUCCESS';
export const LOAD_REWARDS_ERROR = 'boilerplate/App/LOAD_REWARDS_ERROR';

export const LOAD_USER = 'boilerplate/App/LOAD_USER';
export const LOAD_USER_SUCCESS = 'boilerplate/App/LOAD_USER_SUCCESS';
export const LOAD_USER_ERROR = 'boilerplate/App/LOAD_USER_ERROR';

export const LOAD_REWARD = 'boilerplate/App/LOAD_REWARD';
export const LOAD_REWARD_SUCCESS = 'boilerplate/App/LOAD_REWARD_SUCCESS';
export const LOAD_REWARD_ERROR = 'boilerplate/App/LOAD_REWARD_ERROR';

export const UPDATE_REWARD = 'boilerplate/App/UPDATE_REWARD';
export const UPDATE_REWARD_SUCCESS = 'boilerplate/App/UPDATE_REWARD_SUCCESS';
export const UPDATE_REWARD_ERROR = 'boilerplate/App/UPDATE_REWARD_ERROR';
