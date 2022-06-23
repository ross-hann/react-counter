import React, {useState} from "react"
import Nav from "./components/Nav"
import Counter from "./components/Counter"

function App() {
   
  const [thingsArray, setThingsArray] = useState(["Thing 1", "Thing 2"])
  
    function addItem() {
      setThingsArray(prevThingsArray => {
          return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]
      })
    }   

  const thingsElements = thingsArray.map(thing => <p key = {thing} > <li>{thing}</li> </p>)

  return (
    <>
      <div className="App">
        <Nav />
        <Counter />
      </div>

      <div className="state">
        <button className="counter--button" onClick={addItem}>Add a thing </button>
      </div>

      <ul className="counter--list"> 
        {thingsElements}
      </ul>
    </>
  )
}

export default App;



 
