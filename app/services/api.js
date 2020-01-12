import { rewards } from 'mocks/rewards';
import { users } from 'mocks/users';

const DELAY = 1000;

/**
 * Mock API
 */
class Api {
  fetchRewards = options =>
    new Promise(resolve => {
      setTimeout(() => {
        let response = rewards;

        if (options.status) {
          response = response.filter(item => item.status === options.status);
        }

        resolve(response);
      }, DELAY);
    });

  fetchUser = userId =>
    new Promise(resolve => {
      setTimeout(() => {
        const user = users.find(item => item.id === userId);
        resolve(user);
      }, DELAY);
    });
}

export const createApi = () => {
  const api = new Api();

  return api;
};

export const api = createApi();
