import { useState } from "react";

function Task({ task, onDelete, }) {
    const [checked, setChecked] = useState(false);

    function handleCheckboxChange() {
    setChecked(prev => !prev);
    }

    return (
        <div>
            <input
                type="checkbox"
                checked={checked}
                onChange={handleCheckboxChange}/>
                <span 
                    style=
                        {{
                            color: checked ? 'gray' : 'black',
                            textDecoration: checked ? 'line-through' : 'none'
                        }}>
                    {task.text}
                </span>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
}
export default Task;