/**
 * RewardListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedNumber } from 'react-intl';

import ListItem from 'components/ListItem';
import RewardId from './Id';
import RewardLink from './Title';
import Wrapper from './Wrapper';
import RewardUser from './User';
import RewardStatus from './Status';
import RewardDate from './Date';
import Row from './Row';

/*
experience      user
id              date
status
*/
export function RewardListItem(props) {
  const { item } = props;

  if (!item) {
    console.log('remove it');
    return null;
  }

  // Put together the content of the repository
  const content = (
    <Wrapper>
      <Row>
        <RewardLink href={item.html_url} target="_blank">
          {item.experience}
        </RewardLink>
        <RewardUser>{item.user}</RewardUser>
      </Row>
      <Row>
        <RewardId>#{item.id}</RewardId>
        <RewardStatus>{item.status}</RewardStatus>
        <RewardDate>{item.date}</RewardDate>
      </Row>
    </Wrapper>
  );

  // Render the content into a list item
  return <ListItem key={`repo-list-item-${item.full_name}`} item={content} />;
}

RewardListItem.propTypes = {
  item: PropTypes.object,
};

export default RewardListItem;
