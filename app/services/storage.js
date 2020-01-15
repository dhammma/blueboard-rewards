import { rewards } from 'mocks/rewards';
import { users } from 'mocks/users';

class Storage {
  constructor() {
    const storeJson = localStorage.getItem('store');

    if (!storeJson) {
      // this.store = { rewards, users };
      // localStorage.setItem('store', JSON.stringify(this.store));
    } else {
      this.store = JSON.parse(storeJson);
    }
  }

  getRewards() {
    return this.store.rewards;
  }

  getUsers() {
    return this.store.users;
  }

  updateReward(rewardId, reward) {
    this.store.rewards = this.store.rewards.map(item => {
      if (item.id === rewardId) {
        return {
          id: rewardId,
          ...reward,
        };
      }

      return item;
    });

    localStorage.setItem('store', JSON.stringify(this.store));
  }
}

const createStorage = () => new Storage();

export const storage = createStorage();
