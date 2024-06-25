import './Todo.css';
import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

function Todo(){
    let [todos,setTodos]=useState([{task:"sample-task",id:uuidv4()}]);
    let [newTodo,setNewTodos]=useState("");

    function addTask(){
        setTodos([...todos,{task:newTodo,id:uuidv4()}])
        setNewTodos("")
    }
    let updateValue=(event)=>{
        setNewTodos(event.target.value);
    }
    let deleteTodo=(id)=>{
        setTodos(todos.filter((todo)=>todo.id != id));
    }
    let updateAllTask=()=>{
        setTodos((todos)=>(
            todos.map((todo)=>{
                return{...todo,
                task:todo.task.toUpperCase(),
            }
            })
        ))
    }
    let updateOneTask=(id)=>{
        setTodos((todos)=>(
            todos.map((todo)=>{
                if(todo.id == id){
                    return{...todo,
                        task:todo.task.toUpperCase(),
                }
            }else{
                return todo;
            }
            })
        ))
    }

    return(
        <div className="todo">
            <input placeholder="Add Task" value={newTodo} onChange={updateValue}></input>
            <button onClick={addTask}>Click Here!</button>
            <ul>
                {todos.map((todo)=>(
                    <li key={todo.id}>
                    <span>{todo.task}</span>
                    <i className="fa-solid fa-trash" onClick={()=>deleteTodo(todo.id)}></i>
                    <button onClick={()=>updateOneTask(todo.id)}>UpdateOne</button>
                    </li>
                ))}
            </ul>
            <button className="btn" onClick={updateAllTask}>Update All</button>
        </div>
    )
}

export default Todo;