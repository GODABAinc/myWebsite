 import React, {useState} from 'react';
 function MyComponent(){
const [tasks, setTasks] = useState([])
const [newTasks, setNewTasks] = useState("")

    function handleInputChange(event){
        setNewTasks(event.target.value);
    }
    function addTask(event){
        if(newTasks.trim() !== ""){
        setTasks(t =>[...t, newTasks]);
        setNewTasks("");
        }
    }
    function deleteTask(index){
        const updatedTasks = tasks.filter((_,i) => i !== index)
        setTasks(updatedTasks)
    }
    function moveTaskUp(event){

    }
    function moveTaskDown(event){

    }

     return(
        <div className='to-do-list'>
            <h1>To-Do-List</h1>
            <ol>
                {tasks.map((task,index) =>
                     <li key={index}>
                        <span className='text'>{task}</span>
                    <button className="delete-button" onClick={() =>deleteTask(index)}>Delete</button>     
                    <button className="move-button" onClick={moveTaskUp}>👆</button> 
                    <button className="move-button" onClick={moveTaskUp}>👇</button>         

                     </li>)}
                    
            </ol>

            <input type="text"
                    value={newTasks} 
                    onChange={handleInputChange}
                    placeholder='Enter a task....'/>
                    <button onClick={addTask} className="add-button">Add</button>
        </div>
     );
 }

 export default MyComponent
