import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Title = styled.h4`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #2e2e2e;
  font-weight: bold;

  &:hover {
    color: #2e2e2e;
    text-decoration: underline;
  }
`;

export default Title;
