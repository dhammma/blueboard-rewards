import { all, put, call, takeLatest } from 'redux-saga/effects';
import { LOAD_REWARD, UPDATE_REWARD } from 'containers/App/constants';
import {
  rewardLoaded,
  rewardLoadingError,
  rewardUpdated,
  rewardUpdatingError,
} from 'containers/App/actions';
import { api } from 'services/api';

function* fetchRewardSaga({ rewardId }) {
  try {
    const reward = yield call(api.fetchReward, rewardId);

    yield put(rewardLoaded(rewardId, reward));
  } catch (err) {
    yield put(rewardLoadingError(rewardId, err));
  }
}

function* updateRewardSaga({ rewardId, reward }) {
  try {
    const nextReward = yield call(api.updateReward, rewardId, reward);

    yield put(rewardUpdated(rewardId, nextReward));
  } catch (err) {
    yield put(rewardUpdatingError(rewardId, err));
  }
}

export default function* rewardSaga() {
  yield all([
    takeLatest(LOAD_REWARD, fetchRewardSaga),
    takeLatest(UPDATE_REWARD, updateRewardSaga),
  ]);
}
