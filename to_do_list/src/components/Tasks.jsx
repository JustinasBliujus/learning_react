import Task from './Task'
import './Tasks.css'

function Tasks({ tasks, onDelete, }) {
    return(
        <div className='tasks-container'>
            {tasks.map((task)=>{
                return (
                    <Task 
                        key={task.id}
                        onDelete={() => onDelete(task.id)}
                        task={task}
                    />);
            })}
        </div>
    );
}
export default Tasks;