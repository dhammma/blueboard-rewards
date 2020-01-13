import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Input from './Input';
import Popup from './Popup';
import DiscardIcon from './DiscardIcon';
import { useQueryParams } from './hooks';

const FilterByExperience = ({ className }) => {
  const [queryParams, setQueryParam] = useQueryParams();
  const initialValue = queryParams.experience || '';
  const [inputValue, setInputValue] = useState(initialValue);
  const [searchValue, setSearchValue] = useState(initialValue);

  useEffect(() => {
    setQueryParam('experience', searchValue);
  }, [searchValue]);

  const handleInputChange = event => {
    setInputValue(event.target.value);

    if (event.target.value === '') {
      setSearchValue('');
    }
  };

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      setSearchValue(inputValue);
    }
  };

  const updateSearchValue = () => {
    setSearchValue(inputValue);
  };

  const resetInput = () => {
    setInputValue('');
    setSearchValue('');
  };

  return (
    <div className={className}>
      <Input
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Search by experience..."
      />
      <DiscardIcon show={inputValue !== ''} onClick={resetInput}>
        <FontAwesomeIcon icon="times" />
      </DiscardIcon>
      <Popup show={searchValue !== inputValue} onClick={updateSearchValue}>
        <FontAwesomeIcon icon="search" />
        <span style={{ paddingLeft: '1em' }}>Search for this text</span>
      </Popup>
    </div>
  );
};

FilterByExperience.propTypes = {
  className: PropTypes.string,
};

export default styled(FilterByExperience)`
  flex: 1;
  display: flex;
  position: relative;
`;
