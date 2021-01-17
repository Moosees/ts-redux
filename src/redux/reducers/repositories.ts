import { RepositoriesActions } from '../actions';
import { RepositoriesTypes } from '../types';

interface RepositoriesState {
  isLoading: boolean;
  error: string | null;
  data: string[];
}

const initialState = {
  isLoading: false,
  error: null,
  data: [],
};

const repositoriesReducer = (
  state: RepositoriesState = initialState,
  action: RepositoriesActions
): RepositoriesState => {
  switch (action.type) {
    case RepositoriesTypes.SEARCH_STARTED:
      return { isLoading: true, error: null, data: [] };

    case RepositoriesTypes.SEARCH_SUCCESS:
      return { isLoading: false, error: null, data: action.payload };

    case RepositoriesTypes.SEARCH_ERROR:
      return { isLoading: false, error: action.payload, data: [] };

    default:
      return state;
  }
};

export default repositoriesReducer;
