import React,{useState} from 'react';
import {useTypedSelector} from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions';

const RepositoriesList: React.FC = () => {

  const [term, setTerm] = useState('')
  const {searchRepositories} = useActions()
  const {data, error, loading} = useTypedSelector((state) => state.repositories)
  console.log(data);
  

  const handleSubmit = 
  (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault()
    searchRepositories(term)
  }

  return (

    <div>
      <form onSubmit={handleSubmit}>
        <input value={term} onChange={e => setTerm(e.target.value)}/>
        <button>Search</button>

        {error && <h3>{error}</h3>}
        {loading && <h3>Loading...</h3>}
        {!error && !loading && 
        data.map((name, index) => <div key={index}>{name}</div>)
        }
      </form>
    </div>
  );
};

export default RepositoriesList;
