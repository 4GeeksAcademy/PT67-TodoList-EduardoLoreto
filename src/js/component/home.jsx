import React, { useState } from "react";

//create your first component
const Home = () => {
	const [tareas, setTasks] = useState(["Wash my hands", "Make homework"])
	const [newTask, setNewTask] = useState("")
	
	
	const handleTareaNueva = (event) => {
		setNewTask(event.target.value)
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		setTasks([...tareas,newTask])
		setNewTask("")
	}

	const handleDelete = (positionToDelete) => {
		const newArr = []
		for (let i = 0; i < tareas.length; i++) {
			if (i !== positionToDelete) {
				newArr.push(tareas[i])
			}
		}
		setTasks(newArr)
	}

	return (
	
		<div className="w-50 m-auto mt-5">
			<form onSubmit={handleSubmit}> 
				<div className="mb-3 fs-4">
					<label htmlhtmlFor="exampleInputEmail1" className="form-label">Add your task here:</label>
					<input onChange={handleTareaNueva} type="text" className="form-control" id="newTask" value={newTask} aria-describedby="taskHelp"/>
					<div id="taskHelp" className="form-text">You'll never forguet a task again.</div>
				</div>
				<button type="submit" className="btn btn-warning">Submit</button>
			</form>			
			<ul className="w-50 m-auto">
				{/* Utilizamos el método map para generar dinámicamente los elementos <li> */}
				{tareas.map((item, index) => (
				<li className="fs-4" key={index}>{item}
					<button onClick={()=>handleDelete(index)} type="button" className="btn btn-warning mb-1 mt-1 btn-sm"> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/> </svg></button>
				</li>
				))}
			</ul>
			{tareas.length === 0 ? <span>No task, add a task</span> : <span>{tareas.length} <strong>tasks left</strong></span>}
		</div>
		

	);
};

export default Home;
