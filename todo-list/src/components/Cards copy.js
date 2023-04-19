import React, { useState, useEffect } from "react";

import {AiOutlineCloseSquare} from "react-icons/ai"
import {MdAddCircle} from "react-icons/md"
import {MdDeleteForever} from "react-icons/md"
import {MdModeEditOutline} from "react-icons/md"
import {AiFillCheckCircle} from "react-icons/ai"

import "../TodoList_odeh_1.css"

const getLocalStorage = () => {
    let toDo = localStorage.getItem("toDo")
    if (toDo) {
        return (toDo =  JSON.parse(localStorage.getItem("toDo")))
    }else {
    return []
    }
    }


export function Cards({removeCard,key}) {       

    // Tasks (ToDo List) State
const [toDo, setToDo] = useState(getLocalStorage("toDo"))
console.log("tasks",toDo)


    // Temp State
const [newTask, setNewTask] = useState('')
const [updateData, setUpdateData] = useState('')
const [title, setTitle] = useState(localStorage.getItem("title"))
console.log("title",title)

useEffect(() => {
    localStorage.setItem("toDo", JSON.stringify(toDo))
    
    },[toDo]);

    useEffect(() => {
        localStorage.setItem("title", title)
        
        },[title]);

    // delete card click
const handleRemoveClick = () => {
    removeCard(key);
}; 

    // // Add title 
    // const addTitle = (e) => {
    //     if(title) {
    //         setTitle({...title, title: e.target.value}
    
    //     )}
    // }

    // Add task 
const addTask = () => {
    if(newTask) {
    let num = Date.now()
    setToDo([...toDo, { id: num, text: newTask, status: false}
    ])
    setNewTask('')

    }
}

    // Delete task 
const deleteTask = (id) => {
    setToDo(toDo.filter(task => task.id !== id))

}

    // Mark task as done or completed
const markDone = (id) => {
    setToDo(toDo.map(task => task.id === id ? 
        ({ ...task, status: !task.status }) : (task) 
    ))
    }

    // Cancel update
const cancelUpdate = () => {
        setUpdateData('')
    }

    // Change task for update
const changeHolder = (e) => {   
    setUpdateData({...updateData, text: e.target.value})
}

    // Update task
const updateTask = () => {
    let removeOldRecord = [...toDo].filter(task => task.id !== updateData.id)
    setToDo([...removeOldRecord, updateData])
    
    setUpdateData('')
}


    return (
<div  className="list_template list_new" >
    <span className="del_list" onClick={handleRemoveClick}><AiOutlineCloseSquare/></span>
    <div action="" method="post" className="list_form">
        <input maxLength="15" required type="text" name="title_box_1" placeholder="Give a Title" className="list_title_1" onChange={ (e) =>setTitle(e.target.value)} value={title}/>
        <select name="color_list" className="color_list" defaultValue="status_blue">
            <option value="status_blue" className="status_blue"></option>
            <option value="status_pink" className="status_pink"></option>
            <option value="status_green"className="status_green"></option>
        </select>
        <div className="add_div">
            <input type="text" value={newTask} name="input_box_1" placeholder="" className="list_input_1" onChange={ (e) => setNewTask(e.target.value)}/>
            <button className="add_text"><span className="material-symbols-outlined add_text_id" onClick={addTask}><MdAddCircle/></span></button>
            <ul className="to_do_text">
                {toDo && toDo.map( (task) => {
                    return (
                        <li key={task.id}>
                        <div className="col taskBg">
                            <div className={ task.status ? 'done' : '' }>
                                {/* <span className="taskNumber">{index + 1}</span> */}
                                <span className="taskText">{task.text}</span>
                            </div>
                            <div className="iconsWrap">
                                <span text="Completed / Not Completed" onClick={ (e) => markDone(task.id) }>
                                    <AiFillCheckCircle/>
                                </span>
                                {task.status ? null : (
                                <span text="Edit" onClick={ () => {
                                    setUpdateData(task);
                                    changeHolder()} }>
                                    <MdModeEditOutline/>
                                </span>
                                )}
                                <span text="Delete" onClick={() => deleteTask(task.id)}>
                                    <MdDeleteForever/>
                                </span>
                            </div>
                        </div>
                    </li>
                    )
                }) }
            </ul>
        </div>
    </div>
</div>
);
}
