import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import queryString from 'query-string';
import omit from 'lodash/omit';

import { api } from 'services/api';

import Wrapper from './Wrapper';
import Row from './Row';
import FilterByName from './FilterByName';
import FilterByUser from './FilterByUser';

async function loadUserOptions(input) {
  const users = await api.fetchUserOptions(input);

  return users.map(item => ({
    value: item.id,
    label: item.name,
  }));
}

const RewardsFilters = () => {
  const location = useLocation();
  const history = useHistory();

  const onUserFilterChange = option => {
    if (option) {
      history.push({
        pathname: location.pathname,
        search: queryString.stringify({
          ...queryString.parse(location.search),
          userId: option.value,
        }),
      });
    } else {
      history.push({
        pathname: location.pathname,
        search: queryString.stringify(
          omit(queryString.parse(location.search), ['userId']),
        ),
      });
    }
  };

  return (
    <Wrapper>
      <Row>
        <FilterByName placeholder="Search experience..." />
        <FilterByUser
          placeholder="User..."
          isClearable
          cacheOptions
          loadOptions={loadUserOptions}
          onChange={onUserFilterChange}
        />
      </Row>
    </Wrapper>
  );
};

export default RewardsFilters;
