import { useState } from "react";
import './Task.css' 

function Task({ task, onDelete, }) {
    const [checked, setChecked] = useState(false);

    function handleCheckboxChange() {
    setChecked(prev => !prev);
    }

    return (
        <div className="task-container">
            <input
                className="task-checkbox"
                type="checkbox"
                checked={checked}
                onChange={handleCheckboxChange}/>
                <span className="task-text-span"
                    style=
                        {{
                            color: checked ? 'gray' : 'black',
                            textDecoration: checked ? 'line-through' : 'none'
                        }}>
                    {task.text}
                </span>
            <button 
                className="delete-button"
                onClick={onDelete}
            >Delete</button>
        </div>
    );
}
export default Task;