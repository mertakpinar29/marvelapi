import './App.css';
import Header from './components/UI/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/UI/Search'
import React, {useState,useEffect} from 'react'
import axios from 'axios'


const apikey = "344d40df0c8cc373141c1dc321fae9cf"
const hash = "bd0722d5750b6362d5ba0212ca36726b"


const App = ()=> {
  const[items,setItems] = useState([])
  const[isLoading,setIsLoading] = useState(true)
  const[query,setQuery] = useState('')

  useEffect(()=>{
      const fetchItems = async()=>{
        if(query===''){
          const result = await axios(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=344d40df0c8cc373141c1dc321fae9cf&hash=bd0722d5750b6362d5ba0212ca36726b`)
          console.log(result.data.data)
          setItems(result.data.data.results)
          setIsLoading(false)
        }else{
          const result = await axios(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=344d40df0c8cc373141c1dc321fae9cf&hash=bd0722d5750b6362d5ba0212ca36726b`)
          console.log(result.data)
          setItems(result.data.data.results)
          setIsLoading(false)
        }
      }

      fetchItems()
  },[query])

  return <div className="container">
    <Header/>
    <Search getQuery={(q) => setQuery(q)} />
    <CharacterGrid isLoading={isLoading} items={items}/>
  </div>
   
}

export default App;
