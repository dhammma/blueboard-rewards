import { call, put, select, takeLatest } from 'redux-saga/effects';
import { api } from 'services/api';
import { LOAD_REWARDS } from 'containers/App/constants';
import { rewardsLoaded, rewardsLoadingError } from 'containers/App/actions';
import { makeSelectLocation } from 'containers/App/selectors';

const getLocation = makeSelectLocation();

/**
 * Rewards request/response handler
 */
export function* getRewards() {
  try {
    const location = yield select(getLocation);
    const status = location.pathname.slice(1);
    const options = {};

    if (status) {
      options.status = status;
    }

    const rewards = yield call(api.fetchRewards, options);
    yield put(rewardsLoaded(rewards));
  } catch (err) {
    yield put(rewardsLoadingError(err));
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
  yield takeLatest(LOAD_REWARDS, getRewards);
}
