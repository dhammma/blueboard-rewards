import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import RewardListItem from 'containers/RewardListItem';

function RewardsList({ loading, error, rewards }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item="Something went wrong, please try again!" />
    );
    return <List component={ErrorComponent} />;
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
