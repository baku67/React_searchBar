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
  const [elemSrcSelected, setElemSrcSelected] = useState("")
  

  function search(inputValue) {
    const input = inputValue.toLowerCase();
    const filteredResults = ELEMENTS.filter((element) =>
      element.title.toLowerCase().includes(input)
    );
    setResults(filteredResults);
  }


  function updateElemSelected(newState, elemTitle, elemSrc) {
    console.log(newState)
    setElemSelected(newState)
    setElementSelected(elemTitle)
    setElemSrcSelected(elemSrc)
  }





  console.log("updateElemSelected: " + elemSelected)

  if(elemSelected) {
    return (
      <div>
        
        <p>Fiche détaillée: {elementSelected}</p>
        <img style={{width:"100%", maxWidth:"100%"}} src={elemSrcSelected} />

      </div>
      
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
