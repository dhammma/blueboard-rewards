import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const HeaderLink = styled(({ active, ...rest }) => <Link {...rest} />)`
  display: inline-flex;
  padding: 0.75em 2em;
  margin: 0em;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  color: white;

  ${props =>
    props.active
      ? css`
          background: #006191;
        `
      : css`
          &:hover {
            background: #2894c4;
          }
        `}
`;

HeaderLink.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default HeaderLink;
