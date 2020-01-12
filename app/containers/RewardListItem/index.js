/**
 * RewardListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedNumber } from 'react-intl';

import ListItem from 'components/ListItem';
import IssueIcon from './IssueIcon';
import IssueLink from './IssueLink';
import RepoLink from './RepoLink';
import Wrapper from './Wrapper';

export function RewardListItem(props) {
  const { item } = props;

  if (!item) {
    console.log('remove it');
    return null;
  }

  // Put together the content of the repository
  const content = (
    <Wrapper>
      <RepoLink href={item.html_url} target="_blank">
        {item.name}
      </RepoLink>
      <IssueLink href={`${item.html_url}/issues`} target="_blank">
        <IssueIcon />
        <FormattedNumber value={item.open_issues_count} />
      </IssueLink>
    </Wrapper>
  );

  // Render the content into a list item
  return <ListItem key={`repo-list-item-${item.full_name}`} item={content} />;
}

RewardListItem.propTypes = {
  item: PropTypes.object,
};

export default RewardListItem;
