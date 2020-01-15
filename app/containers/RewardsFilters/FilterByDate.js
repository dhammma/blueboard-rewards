import React, { useMemo } from 'react';
import DatePicker from 'react-datepicker';
import { DateTime } from 'luxon';
import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';

import { dateFormat } from 'constants/rewards';
import { useQueryParams } from './hooks';

const getDateParam = date => {
  if (!date) {
    return null;
  }

  return DateTime.fromJSDate(date).toFormat(dateFormat);
};

const getDateValue = value => {
  if (!value) {
    return null;
  }

  return DateTime.fromFormat(value, dateFormat).toJSDate();
};

const StyledDatePicker = styled(DatePicker)`
  height: 38px;
  padding: 0.5em;
`;

const FilterByDate = () => {
  const [queryParams, setQueryParam] = useQueryParams();
  const startDate = useMemo(() => getDateValue(queryParams.from), [
    queryParams.from,
  ]);
  const endDate = useMemo(() => getDateValue(queryParams.to), [queryParams.to]);

  const handleChangeStartDate = value => {
    setQueryParam('from', getDateParam(value));
  };

  const handleChangeEndDate = value => {
    setQueryParam('to', getDateParam(value));
  };

  return (
    <div>
      <StyledDatePicker
        selected={startDate}
        onChange={handleChangeStartDate}
        placeholderText="From date"
        isClearable
        showYearDropdown
        scrollableYearDropdown
      />
      &nbsp;
      <StyledDatePicker
        selected={endDate}
        onChange={handleChangeEndDate}
        placeholderText="To date"
        isClearable
        showYearDropdown
        scrollableYearDropdown
      />
    </div>
  );
};

export default FilterByDate;
