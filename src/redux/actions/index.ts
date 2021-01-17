import { RepositoriesTypes } from '../types';

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

export type RepositoriesActions =
  | RepositoriesSearchStartedAction
  | RepositoriesSearchSuccessAction
  | RepositoriesSearchErrorAction;
