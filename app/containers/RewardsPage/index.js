/*
 * RewardsPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectSaga } from 'utils/injectSaga';
import { useLocation } from 'react-router-dom';
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectRewards,
} from 'containers/App/selectors';
import RewardList from 'components/RewardList';
import RewardFilters from 'containers/RewardsFilters';
import Section from './Section';
import messages from './messages';
import * as AppActions from '../App/actions';
import saga from './saga';

const key = 'rewards';

export function RewardsPage({ loading, error, rewards, loadRewards }) {
  const location = useLocation();
  useInjectSaga({ key, saga });
  useEffect(() => {
    loadRewards();
  }, [location]);

  const rewardsListProps = {
    loading,
    error,
    rewards,
  };

  return (
    <div>
      <Helmet>
        <title>Rewards Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <div>
        <Section>
          <RewardFilters />
        </Section>
        <Section>
          <RewardList {...rewardsListProps} />
        </Section>
      </div>
    </div>
  );
}

RewardsPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  rewards: PropTypes.array,
  loadRewards: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  rewards: makeSelectRewards(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export const mapDispatchToProps = {
  loadRewards: AppActions.loadRewards,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(RewardsPage);
