import axios from 'axios';
import { Dispatch } from 'redux';
import { RepositoriesActions } from '../actions';
import { RepositoriesTypes } from '../types';

const searchUrl = 'https://registry.npmjs.org/-/v1/search';

export const searchRepositories = (term: string) => async (
  dispatch: Dispatch<RepositoriesActions>
) => {
  dispatch({ type: RepositoriesTypes.SEARCH_STARTED, payload: null });

  try {
    const { data } = await axios.get(searchUrl, { params: { text: term } });

    const results = data.objects.map((result: any) => result.package.name);

    dispatch({ type: RepositoriesTypes.SEARCH_SUCCESS, payload: results });
  } catch (error) {
    dispatch({ type: RepositoriesTypes.SEARCH_ERROR, payload: error.message });
  }
};
