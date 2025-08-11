import {useState} from 'react'
import './Input.css'

function Input({ onAdd }) {
  const [inputText, setInputText] = useState('');
  
  function addTask() {
      if(inputText.trim() === '') return;
      const newTask = { 
        id: crypto.randomUUID(),
        text: inputText.trim(),
        isComplete: false,
      };
      onAdd(newTask);
      setInputText('')
    }

  return (
    <div className='input-container'>
      <input
        className='input-field' 
        placeholder="Write Your Task..."
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
      />
      <button 
        className='add-button'
        onClick={addTask}
      >Add</button>
    </div>
  );
}
export default Input;
