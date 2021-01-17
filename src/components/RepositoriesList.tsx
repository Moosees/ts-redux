import { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const RepositoriesList: React.FC = () => {
  const [query, setQuery] = useState('');
  const { searchRepositories } = useActions();
  const { data, error, isLoading } = useTypedSelector(
    (state) => state.repositories
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepositories(query);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
        <button disabled={isLoading}>Search</button>
      </form>
      <div>{error ? error : data}</div>
    </div>
  );
};

export default RepositoriesList;
