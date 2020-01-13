import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { DateTime } from 'luxon';
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

const FilterByDate = () => {
  const [queryParams, setQueryParam] = useQueryParams();
  const [startDate, setStartDate] = useState(getDateValue(queryParams.from));
  const [endDate, setEndDate] = useState(getDateValue(queryParams.to));

  useEffect(() => {
    setQueryParam('from', getDateParam(startDate));
  }, [startDate]);

  useEffect(() => {
    setQueryParam('to', getDateParam(endDate));
  }, [endDate]);

  const handleChangeStartDate = value => {
    setStartDate(value);
  };

  const handleChangeEndDate = value => {
    setEndDate(value);
  };

  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={handleChangeStartDate}
        placeholderText="From date"
        isClearable
        showYearDropdown
        scrollableYearDropdown
      />
      &nbsp;
      <DatePicker
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
