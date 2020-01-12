import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const HeaderLink = styled(({ active, ...rest }) => <Link {...rest} />)`
  display: inline-flex;
  padding: 0.5em 1em;
  color: #707070;
  border-bottom: solid 2px transparent;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 28px;
  transition: background-color 100ms linear, color 100ms linear,
    border 100ms linear;

  &:hover {
    border-bottom: 2px solid #c4c4c4;
  }

  ${props =>
    props.active
      ? css`
          color: #000;
          border-bottom: 2px solid #6666c4;
          font-weight: bold;

          &:hover {
            border-bottom: 2px solid #6666c4;
          }
        `
      : ''}
`;

HeaderLink.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default HeaderLink;
