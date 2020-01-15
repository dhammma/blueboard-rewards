import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller, ErrorMessage } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import styled from 'styled-components';
import { DateTime } from 'luxon';
import capitalize from 'lodash/capitalize';
import PropTypes from 'prop-types';

import 'react-datepicker/dist/react-datepicker.css';

import { statusList, externalDateFormat } from 'constants/rewards';
import UserDropdown from 'containers/UserDropdown';
import * as Actions from 'containers/App/actions';

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

const StyledUserDropdown = styled(UserDropdown)`
  width: 170px;
  min-width: 170px;
  color: #2e2e2e;
  margin-left: 0;
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
  const dispatch = useDispatch();
  const updating = useSelector(state => state.global.reward.updating);
  const defaultValues = useMemo(
    () => ({
      experience: reward.experience,
      user: reward.user,
      date: DateTime.fromFormat(reward.date, externalDateFormat).toJSDate(),
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

  const onSubmit = values => {
    const nextReward = {
      experience: values.experience,
      user: values.user,
      status: values.status.value,
      date: DateTime.fromJSDate(values.date).toFormat(externalDateFormat),
    };

    dispatch(Actions.updateReward(reward.id, nextReward));
  };

  const resetForm = () => {
    reset(defaultValues);
  };

  const selectedDate = watch('date');
  const selectedUserId = watch('user');

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
            disabled={updating}
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
              disabled={updating}
            />
          }
          control={control}
          rules={{ required: true }}
        />
      </Row>
      <Row>
        <Label>User</Label>
        <Controller
          name="user"
          as={
            <StyledUserDropdown userId={selectedUserId} disabled={updating} />
          }
          control={control}
          rules={{ required: true }}
        />
      </Row>
      <Row>
        <Label>Status</Label>
        <Controller
          name="status"
          as={<StyledSelect options={statusOptions} disabled={updating} />}
          control={control}
          rules={{ required: true }}
          onChange={([selected]) =>
            statusOptions.find(item => item.value === selected)
          }
        />
      </Row>
      <Row centered>
        <input
          type="submit"
          value={updating ? 'Saving...' : 'Save changes'}
          disabled={!formState.dirty || updating}
        />
        <button
          type="button"
          disabled={!formState.dirty || updating}
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
