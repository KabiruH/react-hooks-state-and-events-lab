import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [appClass, setMde] =  useState ("App light") 

  function darkMode () {
    if (appClass === "App light")
    {
      setMde ("App dark")
    }
    else
    {
      setMde ("App light")
    }
  } 

  
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={darkMode}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
