import React, { useState, useEffect } from 'react';
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'
import './App.css'

const endpoint = 'https://jsonplaceholder.typicode.com/users';
function App() {
  const [monsters, setMonsters] = useState([])
  const [isLoading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {

    const fetchData = async ()=> {
      setLoading(true)
     const response = await fetch(endpoint);
     const result = await response.json();
     setMonsters(result)
     setLoading(false)
    }
    fetchData()

  }, [])

  const filteredMonster =(monsters, keywords) =>{
    return monsters.filter(monster=>
                          monster.name
                          .toLowerCase()
                          .includes(keywords.toLowerCase()))
  }

  const handleSearch =(e)=>{
    setSearch(e.target.value)
  }
  return (
    <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox placeholder="Search Monster" handleChange={handleSearch}/>
      {isLoading && <h1>Loading...</h1>}
      <CardList monsters={filteredMonster(monsters,search)}/>
    </div>
  );
}

export default App;
