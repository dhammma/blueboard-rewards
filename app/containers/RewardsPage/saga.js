import {
  all,
  call,
  put,
  select,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import uniq from 'lodash/uniq';
import pick from 'lodash/pick';
import queryString from 'query-string';
import { api } from 'services/api';
import { LOAD_REWARDS, LOAD_USER } from 'containers/App/constants';
import {
  rewardsLoaded,
  rewardsLoadingError,
  loadUser,
  userLoaded,
  userLoadingError,
} from 'containers/App/actions';
import { makeSelectLocation } from 'containers/App/selectors';

const getLocationSelector = makeSelectLocation();

/**
 * Rewards request/response handler
 */
export function* getRewards() {
  try {
    const location = yield select(getLocationSelector);
    const status = yield call(() => location.pathname.slice(1));
    const queryParams = yield call(() => queryString.parse(location.search));

    const options = pick(queryParams, [
      'userId',
      'experience',
      'from',
      'to',
      'sort',
    ]);

    if (status) {
      options.status = status;
    }

    const rewards = yield call(api.fetchRewards, options);
    yield put(rewardsLoaded(rewards));

    const userIdList = uniq(rewards.map(item => item.user));
    yield all(userIdList.map(userId => put(loadUser(userId))));
  } catch (err) {
    yield put(rewardsLoadingError(err));
  }
}

export function* getUser({ userId }) {
  try {
    const user = yield call(api.fetchUser, userId);

    yield put(userLoaded(userId, user));
  } catch (err) {
    yield put(userLoadingError(userId, err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* rewardsPageSaga() {
  // Watches for LOAD_REWARDS actions and calls getRewards when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield all([
    takeLatest(LOAD_REWARDS, getRewards),
    takeEvery(LOAD_USER, getUser),
  ]);
}
