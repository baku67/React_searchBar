import { useState } from 'react'
import s from "./global.module.css"
import { SearchBar } from './SearchBar/SearchBar'
import { SearchResults } from './SearchResults/SearchResults'
import { ELEMENTS } from './constant'


function App() {

  const [input, setInput] = useState("")

  const [results, setResults] = useState([ELEMENTS])


  function search(inputValue) {

    const input = inputValue.toLowerCase()

    const elements = ELEMENTS.map((elem) => elem.toLowerCase())

    const results = elements.filter(elem => elem.match(input));

    console.log(results)
    setResults(results)
  }
  

  return (
    <div className={s.appContainer}>

      <h1 className={s.title}>Exo react 1: <span style={{color:"red"}}>Search Bar</span></h1>

      <SearchBar onChangeInput={search} currentInput={input} />

      <SearchResults resultsArray={results} />

    </div>
  )
}

export default App
