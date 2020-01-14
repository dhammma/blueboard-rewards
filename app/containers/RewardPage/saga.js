import { put, call, takeLatest } from 'redux-saga/effects';
import { LOAD_REWARD } from 'containers/App/constants';
import { rewardLoaded, rewardLoadingError } from 'containers/App/actions';
import { api } from 'services/api';

function* fetchRewardSaga({ rewardId }) {
  try {
    const reward = yield call(api.fetchReward, rewardId);

    yield put(rewardLoaded(rewardId, reward));
  } catch (err) {
    yield put(rewardLoadingError(rewardId, err));
  }
}

export default function* rewardSaga() {
  yield takeLatest(LOAD_REWARD, fetchRewardSaga);
}
