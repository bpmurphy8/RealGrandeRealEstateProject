import './App.css';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import House1 from './components/House';
import SearchFilter from './components/SearchFilter';
import {Routes , Route} from 'react-router-dom';
import SearchResults from './components/SearchResults';
import SearchedHouse from './components/SearchedHouse';
import axios from 'axios';
import Login from './components/Login';

function App() {

  let [allHouses,setAllHouses] = useState([]);

  useEffect(() => {
    async function getHousesInfo(){
      // let resp = await fetch('houses.json')
      let resp = await axios.get('http://localhost:3002/');
      console.log(resp);
      let data = resp.data;
      setAllHouses(data)
    }
    getHousesInfo()
  },[])


  return (
    <div className="App bg-secondary">
        <Header/>
        <SearchFilter houses={allHouses}/>

        <Routes>
          <Route path ="/" element={<House1 houses={allHouses}/>} />
          <Route path="searchresults/:county" element={<SearchResults houses={allHouses}/>} />
          <Route path="searchedhouse/:id" element={<SearchedHouse houses={allHouses}/>} />
          <Route path="login" element={<Login />} />
        </Routes>

    </div>

    
  );
}

export default App;
