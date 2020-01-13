import { useLocation, useHistory } from 'react-router-dom';
import queryString from 'query-string';
import omit from 'lodash/omit';

export function useQueryParams() {
  const location = useLocation();
  const history = useHistory();

  const queryParams = queryString.parse(location.search);

  const getNextQueryParams = (name, value) => {
    if (value) {
      return {
        ...queryParams,
        [name]: value,
      };
    }

    return omit(queryParams, [name]);
  };

  const setQueryParam = (name, value) => {
    if (!queryParams[name] && !value) {
      return;
    }

    if (queryParams[name] === value) {
      return;
    }

    history.push({
      pathname: location.pathname,
      search: queryString.stringify(getNextQueryParams(name, value)),
    });
  };

  return [queryParams, setQueryParam];
}
