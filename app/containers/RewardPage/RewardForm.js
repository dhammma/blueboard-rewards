import React, { useMemo } from 'react';
import { useForm, Controller, ErrorMessage } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import styled from 'styled-components';
import { DateTime } from 'luxon';
import capitalize from 'lodash/capitalize';
import PropTypes from 'prop-types';

import 'react-datepicker/dist/react-datepicker.css';

import { statusList } from 'constants/rewards';
import Row from './Row';
import Label from './Label';

const statusOptions = statusList.map(item => ({
  label: capitalize(item),
  value: item,
}));

const StyledInput = styled.input`
  width: calc(100% - 250px);
  min-width: 170px;
  padding: 6px 8px;
  font-size: 14px;
  color: #2e2e2e;
`;

const StyledSelect = styled(Select)`
  width: 170px;
  min-width: 170px;
  color: #2e2e2e;
`;

const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  min-width: 170px;
  padding: 6px 8px;
  font-size: 14px;
  color: #2e2e2e;
`;

const RewardForm = ({ reward }) => {
  const defaultValues = useMemo(
    () => ({
      experience: reward.experience,
      user: reward.user,
      date: DateTime.fromFormat(reward.date, 'D').toJSDate(),
      status: statusOptions.find(item => item.value === reward.status),
    }),
    [reward],
  );

  const {
    handleSubmit,
    register,
    control,
    watch,
    formState,
    errors,
    reset,
  } = useForm({
    defaultValues,
  });

  const onSubmit = values => {};

  const resetForm = () => {
    reset(defaultValues);
  };

  const selectedDate = watch('date');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Label>Title</Label>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <StyledInput
            name="experience"
            ref={register({
              required: 'Required',
            })}
            placeholder="Experience title"
          />
          <ErrorMessage
            as={
              <div
                style={{ marginTop: '5px', color: 'red', fontSize: '14px' }}
              />
            }
            errors={errors}
            name="experience"
          />
        </div>
      </Row>
      <Row>
        <Label>Date</Label>
        <Controller
          name="date"
          as={
            <StyledDatePicker
              placeholderText="Reward date"
              showYearDropdown
              scrollableYearDropdown
              selected={selectedDate}
            />
          }
          control={control}
          rules={{ required: true }}
        />
      </Row>
      <Row>
        <Label>User</Label>
        <StyledSelect />
      </Row>
      <Row>
        <Label>Status</Label>
        <Controller
          name="status"
          as={<StyledSelect options={statusOptions} />}
          control={control}
          rules={{ required: true }}
          onChange={([selected]) =>
            statusOptions.find(item => item.value === selected)
          }
        />
      </Row>
      <Row centered>
        <input type="submit" value="Save changes" disabled={!formState.dirty} />
        <button
          type="button"
          disabled={!formState.dirty}
          style={{ marginLeft: '1em' }}
          onClick={resetForm}
        >
          Reset changes
        </button>
      </Row>
    </form>
  );
};

RewardForm.propTypes = {
  reward: PropTypes.object,
};

export default RewardForm;
