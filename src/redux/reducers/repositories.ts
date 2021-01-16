enum RepositoriesTypes {
  SEARCH_STARTED = 'repositories/search_started',
  SEARCH_SUCCESS = 'repositories/search_success',
  SEARCH_ERROR = 'repositories/search_error',
}

interface RepositoriesState {
  isLoading: boolean;
  error: string | null;
  data: string[];
}

interface RepositoriesSearchStartedAction {
  type: RepositoriesTypes.SEARCH_STARTED;
  payload: null;
}

interface RepositoriesSearchSuccessAction {
  type: RepositoriesTypes.SEARCH_SUCCESS;
  payload: string[];
}

interface RepositoriesSearchErrorAction {
  type: RepositoriesTypes.SEARCH_ERROR;
  payload: string;
}

type RepositoriesAction =
  | RepositoriesSearchStartedAction
  | RepositoriesSearchSuccessAction
  | RepositoriesSearchErrorAction;

const repositoriesReducer = (
  state: RepositoriesState,
  action: RepositoriesAction
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
