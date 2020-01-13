import styled from 'styled-components';

const Popup = styled.div`
  position: absolute;
  display: ${props => (props.show ? 'block' : 'none')};
  width: 100%;
  background-color: white;
  margin-top: 50px;

  width: auto;
  top: 100%;
  z-index: 300;
  min-width: 240px;
  max-width: 500px;
  margin-top: 4px;
  margin-bottom: 24px;
  font-size: 14px;
  font-weight: 400;
  padding: 8px;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #2e2e2e;
  cursor: pointer;
`;

export default Popup;
