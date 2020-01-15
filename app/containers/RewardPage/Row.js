import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.75em 1em;
  align-items: baseline;
  ${props => (props.centered ? 'justify-content: center' : '')}
`;

export default Row;
