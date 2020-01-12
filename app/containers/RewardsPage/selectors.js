import { createSelector } from 'reselect';
import { makeSelectRewards, makeSelectUsers } from 'containers/app/selectors';

const selectRewards = makeSelectRewards();
const selectUsers = makeSelectUsers();

export { selectRewards, selectUsers };
