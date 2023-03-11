import React, { useState } from "react";

function App() {
  //1. When new text is written into the input, its state should be saved.
  const [inputText, setInputText] = useState("");
  //2. When the add button is pressed, the current data in the input should be
  //added to an array.
  const [items, setItems] = useState([]);
  function handleInput(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleInput} value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
