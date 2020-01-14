import React from 'react';
import { useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import PropTypes from 'prop-types';

import 'react-datepicker/dist/react-datepicker.css';

import Row from './Row';
import Label from './Label';

const RewardForm = ({ reward, loading }) => {
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = values => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Label>Experience title:</Label>
        <input
          name="experience"
          ref={register({
            required: 'Required',
          })}
        />
      </Row>
      <Row>
        <Label>Reward date:</Label>
        <DatePicker />
      </Row>
      <Row>
        <Label>Assigned user:</Label>
        <Select />
      </Row>
      <Row>
        <button type="submit">Submit</button>
      </Row>
    </form>
  );
};

export default RewardForm;
