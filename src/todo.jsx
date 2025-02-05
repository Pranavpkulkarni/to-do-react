import React, { useState } from "react";

function ToDoList() {
    const [tasks, setTasks] = useState(["Meeting at 2pm", "Learn React Fast"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask(""); 
        }
    }

    function deleteTask(index) {
        setTasks(tasks.filter((_, i) => i !== index));
    }

    function moveUp(index) {
        if (index > 0) {
            const newTasks = [...tasks];
            [newTasks[index], newTasks[index - 1]] = [newTasks[index - 1], newTasks[index]];
            setTasks(newTasks);
        }
    }

    function moveDown(index) {
        if (index < tasks.length - 1) {
            const newTasks = [...tasks];
            [newTasks[index], newTasks[index + 1]] = [newTasks[index + 1], newTasks[index]];
            setTasks(newTasks);
        }
    }

    return (
        <div>
            <h1>To Do List</h1>
            <input
                type="text"
                placeholder="Enter a task..."
                value={newTask}
                onChange={handleInputChange}
            />
            <button onClick={addTask}>Add</button>
            <ol>
                {tasks.map((task, index) => (
                    <div key={index}>
                        <li>{task}</li>
                        <button onClick={() => deleteTask(index)}>Delete</button>
                        <button onClick={() => moveUp(index)}>Up</button>
                        <button onClick={() => moveDown(index)}>Down</button>
                    </div>
                ))}
            </ol>
        </div>
    );
}

export default ToDoList;