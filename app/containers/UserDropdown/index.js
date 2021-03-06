import React, { useState, useEffect, useRef } from 'react';
import AsyncSelect from 'react-select/async';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { api } from 'services/api';

async function loadUserOptions(input) {
  const users = await api.fetchUserOptions(input);

  return users.map(item => ({
    value: item.id,
    label: item.name,
  }));
}

const StyledSelect = styled(AsyncSelect)`
  margin-left: 1em;
  width: 160px;
  & > button {
    border-radius: 0;
  }
`;

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const UserDropdown = props => {
  const [value, setValue] = useState(null);
  const prevUserId = usePrevious(props.userId);

  useEffect(() => {
    if (!props.userId && prevUserId) {
      setValue(null);
    }
  }, [prevUserId, props.userId]);

  useEffect(() => {
    async function setUserValue() {
      const user = await api.fetchUser(props.userId);

      setValue({
        label: user.name,
        value: user.id,
      });
    }
    if (props.userId) {
      setUserValue();
    }
  }, [props.userId]);

  function onChange(nextValue) {
    setValue(nextValue);

    props.onChange(nextValue);
  }

  return (
    <StyledSelect
      {...props}
      cacheOptions
      loadOptions={loadUserOptions}
      value={value}
      onChange={onChange}
      defaultOptions={value ? [value] : null}
    />
  );
};

UserDropdown.propTypes = {
  userId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
};

export default UserDropdown;
