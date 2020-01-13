import React from 'react';

import { api } from 'services/api';

import Wrapper from './Wrapper';
import Row from './Row';
import FilterByExperience from './FilterByExperience';
import FilterByUser from './FilterByUser';
import FilterByDate from './FilterByDate';
import { useQueryParams } from './hooks';

async function loadUserOptions(input) {
  const users = await api.fetchUserOptions(input);

  return users.map(item => ({
    value: item.id,
    label: item.name,
  }));
}

const RewardsFilters = () => {
  const [, setQueryParam] = useQueryParams();

  const onUserFilterChange = option => {
    setQueryParam('userId', option ? option.value : null);
  };

  return (
    <Wrapper>
      <Row>
        <FilterByExperience placeholder="Search experience..." />
        <FilterByUser
          placeholder="User..."
          isClearable
          cacheOptions
          loadOptions={loadUserOptions}
          onChange={onUserFilterChange}
        />
      </Row>
      <Row>
        <FilterByDate />
      </Row>
    </Wrapper>
  );
};

export default RewardsFilters;
