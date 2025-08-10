import './App.css'
import Input from './components/Input'
import Tasks from './components/Tasks'
import { useState } from 'react';

function App() {
  const [tasks,setTasks] = useState([]);

  function handleAddTask(newTask){
    setTasks((allTasks => [...allTasks,newTask]));
  }

  function handleDeleteTask(id) {
    setTasks((allTasks => allTasks.filter(task => task.id !== id)));
  }

  return (
    <div className='app-container'>
      <h1>Welcome to the To Do List!</h1>
      <Input onAdd={handleAddTask}/>
      <Tasks 
        tasks={tasks}
        onDelete={handleDeleteTask}
      />
    </div>
  )
}

export default App
