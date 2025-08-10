import {useState} from 'react'

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
    <div>
      <input 
        placeholder="Write Your Task..."
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
      />
      <button onClick={addTask}>Add</button>
    </div>
  );
}
export default Input;
