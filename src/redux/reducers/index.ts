import { combineReducers } from 'redux';
import repositoriesReducer from './repositories';

const rootReducer = combineReducers({
  repositories: repositoriesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
