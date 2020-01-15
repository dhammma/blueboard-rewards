import React from 'react';

import UserDropdown from 'containers/UserDropdown';

import Wrapper from './Wrapper';
import Row from './Row';
import FilterByExperience from './FilterByExperience';
import FilterByDate from './FilterByDate';
import Sort from './Sort';
import { useQueryParams } from './hooks';

const RewardsFilters = () => {
  const [queryParams, setQueryParam] = useQueryParams();

  const onUserFilterChange = option => {
    setQueryParam('userId', option ? option.value : null);
  };

  return (
    <Wrapper>
      <Row>
        <FilterByExperience placeholder="Search experience..." />
        <UserDropdown
          userId={queryParams.userId}
          placeholder="User..."
          isClearable
          onChange={onUserFilterChange}
        />
      </Row>
      <Row>
        <FilterByDate />
        <Sort />
      </Row>
    </Wrapper>
  );
};

export default RewardsFilters;
