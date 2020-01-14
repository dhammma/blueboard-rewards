import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import LoadingIndicator from 'components/LoadingIndicator';
import { useInjectSaga } from 'utils/injectSaga';
import * as AppActions from 'containers/App/actions';

import RewardForm from './RewardForm';

import saga from './saga';

const key = 'reward';

const RewardsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector(state =>
    get(state, ['global', 'reward', 'loading'], true),
  );
  const reward = useSelector(state =>
    get(state, ['global', 'reward', 'data'], null),
  );

  useInjectSaga({ key, saga });

  useEffect(() => {
    dispatch(AppActions.loadReward(id));
  }, [id]);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <div>
      <Helmet>
        <title>Reward Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <RewardForm reward={reward} loading={isLoading} />
    </div>
  );
};

export default RewardsPage;
