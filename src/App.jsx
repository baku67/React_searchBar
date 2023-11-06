import { useState } from 'react'
import s from "./global.module.css"
import { SearchBar } from './SearchBar/SearchBar'
import { SearchResults } from './SearchResults/SearchResults'
import { ELEMENTS } from './constant'


function App() {

  const [input, setInput] = useState("")

  const [results, setResults] = useState(ELEMENTS)

  const [elemSelected, setElemSelected] = useState(false)

  const [elementSelected, setElementSelected] = useState(null)
  

  function search(inputValue) {

    const elements = ELEMENTS.map((elem) => elem.toLowerCase())
    const input = inputValue.toLowerCase()

    const results = elements.filter(elem => elem.match(input));

    setResults(results)
  }


  function updateElemSelected(newState, elemTitle) {
    console.log(newState)
    setElemSelected(newState)
    setElementSelected(elemTitle)
  }





  console.log("updateElemSelected: " + elemSelected)

  if(elemSelected) {
    return (
      <p>Fiche détaillée: {elementSelected}</p>
    )
  }
  else {

    return (
      <div className={s.appContainer}>
  
        <h1 className={s.title}>Exo react 1: <span style={{color:"red"}}>Search Bar</span></h1>
  
        <SearchBar onChangeInput={search} currentInput={input} />
  
        <SearchResults resultsArray={results} onItemClick={updateElemSelected} />
  
      </div>
    )

  }

  
}

export default App
