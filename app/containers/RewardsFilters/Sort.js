import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { sortOptions } from 'constants/rewards';
import { useQueryParams } from './hooks';

const StyledSelect = styled(Select)`
  width: 160px;
`;

const sortOptionList = Object.keys(sortOptions).map(key => ({
  label: sortOptions[key],
  value: key,
}));

const Sort = ({ className }) => {
  const [queryParams, setQueryParam] = useQueryParams();

  const handleSortChange = ({ value }) => {
    setQueryParam('sort', value);
  };

  return (
    <div className={className}>
      <StyledSelect
        options={sortOptionList}
        placeholder="Sort..."
        value={sortOptionList.find(item => item.value === queryParams.sort)}
        onChange={handleSortChange}
      />
    </div>
  );
};

Sort.propTypes = {
  className: PropTypes.string,
};

export default styled(Sort)`
  margin-left: auto;
`;
