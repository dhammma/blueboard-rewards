import Fuse from 'fuse.js';
import { DateTime } from 'luxon';
import { dateFormat, externalDateFormat } from 'constants/rewards';

import { storage } from './storage';

const DELAY = 1000;

function simulate(response) {
  return new Promise(resolve => {
    setTimeout(() => resolve(response), DELAY);
  });
}

function filterByRange(items, from, to) {
  const fromDate = from ? DateTime.fromFormat(from, dateFormat) : null;
  const toDate = to ? DateTime.fromFormat(to, dateFormat) : null;
  const stub = () => true;

  const fromFilter = fromDate ? date => date >= fromDate : stub;
  const toFilter = toDate ? date => date <= toDate : stub;

  return items.filter(item => {
    const date = DateTime.fromFormat(item.date, externalDateFormat);

    return fromFilter(date) && toFilter(date);
  });
}

const comparators = {
  id: (a, b) => b - a,
  experience: (a, b) => b.localeCompare(a),
  date: (a, b) => {
    const dateA = DateTime.fromFormat(a, externalDateFormat);
    const dateB = DateTime.fromFormat(b, externalDateFormat);

    return dateB - dateA;
  },
};

function sort(items, by) {
  const sortedItems = [...items];
  const order = by.charAt(0) === '-' ? 1 : -1;
  const field = by.slice(1);
  const compare = comparators[field];

  return sortedItems.sort((a, b) => {
    const fieldA = a[field];
    const fieldB = b[field];

    return order * compare(fieldA, fieldB);
  });
}

/**
 * Mock API
 */
class Api {
  fetchRewards = options => {
    let response = storage.getRewards();

    if (options.status) {
      response = response.filter(item => item.status === options.status);
    }

    if (options.userId) {
      response = response.filter(
        item => item.user.toString() === options.userId,
      );
    }

    if (options.from || options.to) {
      response = filterByRange(response, options.from, options.to);
    }

    if (options.experience) {
      const fuse = new Fuse(response, {
        keys: ['experience'],
      });

      response = fuse.search(options.experience);
    }

    if (options.sort) {
      response = sort(response, options.sort);
    }

    return simulate(response);
  };

  fetchReward = rewardId => {
    const response = storage
      .getRewards()
      .find(item => item.id.toString() === rewardId.toString());

    return simulate(response);
  };

  updateReward = (rewardId, reward) => {
    storage.updateReward(rewardId, reward);

    return this.fetchReward(rewardId);
  };

  fetchUser = userId => {
    const response = storage
      .getUsers()
      .find(item => item.id.toString() === userId.toString());

    return simulate(response);
  };

  fetchUserOptions = input => {
    const fuse = new Fuse(storage.getUsers(), {
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
