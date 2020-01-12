import { rewards } from 'mocks/rewards';
import { users } from 'mocks/users';

const DELAY = 1000;

/**
 * Mock API
 */
class Api {
  fetchRewards = () =>
    new Promise(resolve => {
      setTimeout(() => resolve(rewards), DELAY);
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
