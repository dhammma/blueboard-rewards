import Fuse from 'fuse.js';
import { rewards } from 'mocks/rewards';
import { users } from 'mocks/users';

const DELAY = 1000;

function simulate(response) {
  return new Promise(resolve => {
    setTimeout(() => resolve(response), DELAY);
  });
}

/**
 * Mock API
 */
class Api {
  fetchRewards = options => {
    let response = rewards;

    if (options.status) {
      response = response.filter(item => item.status === options.status);
    }

    if (options.userId) {
      response = response.filter(
        item => item.user.toString() === options.userId,
      );
    }

    if (options.experience) {
      const fuse = new Fuse(response, {
        keys: ['experience'],
      });

      response = fuse.search(options.experience);
    }

    return simulate(response);
  };

  fetchUser = userId => {
    const response = users.find(item => item.id === userId);

    return simulate(response);
  };

  fetchUserOptions = input => {
    const fuse = new Fuse(users, {
      keys: ['name'],
    });

    const response = fuse.search(input);

    return simulate(response);
  };
}

export const createApi = () => {
  const api = new Api();

  return api;
};

export const api = createApi();
