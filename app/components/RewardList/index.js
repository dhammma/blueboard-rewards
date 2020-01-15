import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import LoadingIndicator from 'components/LoadingIndicator';
import RewardListItem from 'containers/RewardListItem';

function RewardsList({ loading, error, rewards }) {
  if (loading) {
    return <LoadingIndicator />;
  }

  if (error !== false) {
    return <div>Something went wrong</div>;
  }

  if (rewards !== false) {
    return <List items={rewards} component={RewardListItem} />;
  }

  return null;
}

RewardsList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  rewards: PropTypes.any,
};

export default RewardsList;
