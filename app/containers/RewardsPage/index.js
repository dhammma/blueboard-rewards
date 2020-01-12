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
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectRewards,
} from 'containers/App/selectors';
import H2 from 'components/H2';
import RewardsList from 'components/RewardsList';
import CenteredSection from './CenteredSection';
import Section from './Section';
import messages from './messages';
import * as AppActions from '../App/actions';
import saga from './saga';

const key = 'rewards';

export function RewardsPage({ loading, error, rewards, loadRewards }) {
  useInjectSaga({ key, saga });
  useEffect(() => {
    loadRewards();
  }, []);

  const rewardsListProps = {
    loading,
    error,
    rewards,
  };

  return (
    <article>
      <Helmet>
        <title>Rewards Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <div>
        <CenteredSection>
          <H2>
            <FormattedMessage {...messages.startProjectHeader} />
          </H2>
          <p>
            <FormattedMessage {...messages.startProjectMessage} />
          </p>
        </CenteredSection>
        <Section>
          <H2>
            <FormattedMessage {...messages.trymeHeader} />
          </H2>
          <RewardsList {...rewardsListProps} />
        </Section>
      </div>
    </article>
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
