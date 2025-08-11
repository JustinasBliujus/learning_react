import { useState } from "react";
import Input from '../components/Input'
import Tasks from '../components/Tasks'

function HomePage(){
    const [tasks,setTasks] = useState([]);

  function handleAddTask(newTask){
    setTasks((allTasks => [...allTasks,newTask]));
  }

  function handleDeleteTask(id) {
    setTasks((allTasks => allTasks.filter(task => task.id !== id)));
  }

  return (
    <div className='app-container'>
    <title>Login</title>
      <span className='title-container'>Welcome to the To Do List!</span>
      <Input onAdd={handleAddTask}/>
      <Tasks 
        tasks={tasks}
        onDelete={handleDeleteTask}
      />
    </div>
  )
}
export default HomePage;