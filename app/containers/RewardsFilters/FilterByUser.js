import styled from 'styled-components';
import AsyncSelect from 'react-select/async';

const FilterByUser = styled(AsyncSelect)`
  margin-left: 1em;
  width: 160px;
  & > button {
    border-radius: 0;
  }
`;

export default FilterByUser;
