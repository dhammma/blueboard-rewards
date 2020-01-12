import {
  LOAD_REWARDS,
  LOAD_REWARDS_SUCCESS,
  LOAD_REWARDS_ERROR,
} from '../constants';

import { loadRepos, rewardsLoaded, rewardsLoadingError } from '../actions';

describe('App Actions', () => {
  describe('loadRepos', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_REWARDS,
      };

      expect(loadRewards()).toEqual(expectedResult);
    });
  });

  describe('rewardsLoaded', () => {
    it('should return the correct type and the passed repos', () => {
      const fixture = ['Test'];
      const username = 'test';
      const expectedResult = {
        type: LOAD_REWARDS_SUCCESS,
        repos: fixture,
        username,
      };

      expect(rewardsLoaded(fixture, username)).toEqual(expectedResult);
    });
  });

  describe('rewardsLoadingError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: LOAD_REWARDS_ERROR,
        error: fixture,
      };

      expect(rewardsLoadingError(fixture)).toEqual(expectedResult);
    });
  });
});
