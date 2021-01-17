import { Provider } from 'react-redux';
import RepositoriesList from './components/RepositoriesList';
import { store } from './redux';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search for NPM packages!</h1>
        <RepositoriesList />
      </div>
    </Provider>
  );
};

export default App;
