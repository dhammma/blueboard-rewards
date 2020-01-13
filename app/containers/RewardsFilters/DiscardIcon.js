import styled from 'styled-components';

const DiscardIcon = styled.div`
  position: absolute;
  top: 20%;
  right: 0.75em;
  cursor: pointer;
  color: #c4c4c4;
  display: ${props => (props.show ? 'block' : 'none')};

  &:hover {
    color: #444;
  }
`;

export default DiscardIcon;
