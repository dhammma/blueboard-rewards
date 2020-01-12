/**
 * RewardListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { FormattedNumber } from 'react-intl';
import get from 'lodash/get';

import ListItem from 'components/ListItem';
import RewardId from './Id';
import RewardLink from './Title';
import Wrapper from './Wrapper';
import RewardUser from './User';
import RewardStatus from './Status';
import RewardDate from './Date';
import Row from './Row';

export function RewardListItem(props) {
  const { item } = props;
  const user = useSelector(state =>
    get(state, ['global', 'users', get(item, 'user'), 'user'], null),
  );

  if (!item) {
    console.log('remove it');
    return null;
  }

  console.log('render item');

  // Put together the content of the repository
  const content = (
    <Wrapper>
      <Row>
        <RewardLink href={item.html_url} target="_blank">
          {item.experience}
        </RewardLink>
        <RewardUser>{user ? user.name : '-'}</RewardUser>
      </Row>
      <Row>
        <RewardId>#{item.id}</RewardId>
        <RewardStatus>{item.status}</RewardStatus>
        <RewardDate>{item.date}</RewardDate>
      </Row>
    </Wrapper>
  );

  // Render the content into a list item
  return <ListItem key={`repo-list-item-${item.id}`} item={content} />;
}

RewardListItem.propTypes = {
  item: PropTypes.object,
};

export default RewardListItem;
