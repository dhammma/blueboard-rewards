import { rewards } from 'mocks/rewards';
import { users } from 'mocks/users';

class Storage {
  constructor() {
    const storeJson = localStorage.getItem('store');

    if (!this.store) {
      this.store = { rewards, users };
      localStorage.setItem('store', JSON.stringify(this.store));
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
}

const createStorage = () => new Storage();

export const storage = createStorage();
