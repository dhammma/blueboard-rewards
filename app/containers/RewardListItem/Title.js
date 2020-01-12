import styled from 'styled-components';
import NormalA from 'components/A';

const Title = styled(NormalA)`
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
