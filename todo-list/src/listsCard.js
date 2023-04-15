import React, { useState } from "react";

import AllLists from "./pics/odeh/cat_Frame_11.png"
import DoneLists from "./pics/odeh/cat_Frame_22.png"
import ProgressLists from "./pics/odeh/cat_Frame_33.png"
import addedLists from "./pics/odeh/cat_Frame_44.png"
import AddBtn from "./pics/odeh/add_1.png"

import {AiOutlineCloseSquare} from "react-icons/ai"
import {MdAddCircle} from "react-icons/md"


import "./TodoList_odeh_1.css"


export function ListsCard() {
    const [listClones, setlistClones] = useState([]);
    // const [Assigned, setAssigned] = useState(0);
    // const [Progress, setProgress] = useState(0);
    // const [numDelLists, setnumDelLists] = useState(0);

    const handleCloneClick = () => {
        const listIndex = listClones.length
        const newArrCards = [...listClones,<ListTemplate key={listIndex} index={listIndex} removeList={removeList} />];
        setlistClones(newArrCards);
        console.log(newArrCards)
        console.log(listIndex)
    };

    const removeList = (index) => {
        const newArrCards = [...listClones];
        newArrCards.splice(index, 1);
        setlistClones(newArrCards);
        console.log(newArrCards)
        console.log(index)
    };

    function ListTemplate({ index, removeList }) {

        const handleRemoveClick = () => {
            removeList(index);
        };        
    
        return (
    <div  id="list_template"  className="list_new">
        <span id="del_list" onClick={handleRemoveClick}><AiOutlineCloseSquare/></span>
        <div action="" method="post" className="list_form">
            <input maxLength="20" required type="text" name="title_box_1" placeholder="Give a Title" id="list_title_1" />
            <select name="color_list" id="color_list">
                <option value="status_blue" id="status_blue"></option>
                <option value="status_pink" id="status_pink"></option>
                <option value="status_green"id="status_green"></option>
            </select>
            <div className="add_div">
                <input type="text" name="input_box_1" placeholder="" id="list_input_1"/>
                <button className="add_text" id="add_text"><span id="add_text_id" className="material-symbols-outlined"><MdAddCircle/></span></button>
                <ul className="to_do_text">
                </ul>
            </div>
        </div>
    </div>
    );
    }
    

    return (
        <>
<div className="body_container">
    <div id="categories">
        <a href="#"><h1 id="allListsCounter">0</h1><p>All Lists</p><img id="icon_1" src={AllLists} alt="cat1"/></a>
        <a href="#"><h1 id="assigned">0</h1><p>Assigned</p><img id="icon_2" src={addedLists} alt="cat2"/></a>
        <a href="#"><h1 id="inProgress">0</h1><p>In Progress</p><img id="icon_3" src={ProgressLists} alt="cat3"/></a>
        <a href="#"><h1 id="completed">0</h1><p>Completed</p><img id="icon_4" src={DoneLists} alt="cat4"/></a>
    </div>
    <div className="list">
        <a href="#" onClick={handleCloneClick}>
            <div id="list_add">
            <img src={AddBtn} alt="add"/><span>Add List</span>
            </div>
        </a>
        {listClones}
    </div>
</div>
</>
)
}