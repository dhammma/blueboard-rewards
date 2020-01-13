import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import queryString from 'query-string';
import omit from 'lodash/omit';
import PropTypes from 'prop-types';

import Input from './Input';
import Popup from './Popup';
import DiscardIcon from './DiscardIcon';

const FilterByExperience = ({ className }) => {
  const location = useLocation();
  const history = useHistory();
  const initialValue = queryString.parse(location.search).experience || '';
  const [inputValue, setInputValue] = useState(initialValue);
  const [searchValue, setSearchValue] = useState(initialValue);

  useEffect(() => {
    if (searchValue !== '') {
      history.push({
        pathname: location.pathname,
        search: queryString.stringify({
          ...queryString.parse(location.search),
          experience: searchValue,
        }),
      });
    } else {
      history.push({
        pathname: location.pathname,
        search: queryString.stringify(
          omit(queryString.parse(location.search), ['experience']),
        ),
      });
    }
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
