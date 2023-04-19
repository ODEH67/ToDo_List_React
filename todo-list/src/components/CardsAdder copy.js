import React, { useState , useEffect} from "react";

import AllLists from "../pics/odeh/cat_Frame_11.png"
import DoneLists from "../pics/odeh/cat_Frame_22.png"
import ProgressLists from "../pics/odeh/cat_Frame_33.png"
import addedLists from "../pics/odeh/cat_Frame_44.png"
import AddBtn from "../pics/odeh/add_1.png"
import {Cards} from "./Cards"

import "../TodoList_odeh_1.css"

const getLocalStorage = () => {
let listClones = localStorage.getItem("listClones")
if (listClones) {
    return (listClones =  JSON.parse(localStorage.getItem("listClones")))
}else {
return []
}
}

export function CardsAdder() {
    const [listClones, setlistClones] = useState(getLocalStorage("listClones"));
    // const [Assigned, setAssigned] = useState(0);
    // const [Progress, setProgress] = useState(0);
    // const [numDelLists, setnumDelLists] = useState(0);

    useEffect(() => {
    localStorage.setItem("listClones", JSON.stringify(listClones))
    },[listClones]);


    const handleCloneClick = () => {
        const listId = Date.now()
        const newArrCards = [...listClones,<Cards key={listId} removeCard={removeCard} />];
        setlistClones(newArrCards);
        console.log(newArrCards)
        // console.log(listIndex)
    };

    const removeCard = (listId) => {
        const newArrCards = [...listClones];
        newArrCards.splice(listId, 1);
        setlistClones(newArrCards)
        console.log(newArrCards)
        console.log(listId)
    };



    return (
        <>
<div className="body_container">
    <div className="categories">
        <a href="#"><h1 className="allListsCounter">0</h1><p>All Lists</p><img className="icon_1" src={AllLists} alt="cat1"/></a>
        <a href="#"><h1 className="assigned">0</h1><p>Assigned</p><img className="icon_2" src={addedLists} alt="cat2"/></a>
        <a href="#"><h1 className="inProgress">0</h1><p>In Progress</p><img className="icon_3" src={ProgressLists} alt="cat3"/></a>
        <a href="#"><h1 className="completed">0</h1><p>Completed</p><img className="icon_4" src={DoneLists} alt="cat4"/></a>
    </div>
    <div className="list">
        <a href="#" >
            <div className="list_add">
            <img src={AddBtn} alt="add" onClick={handleCloneClick}/><span>Add List</span>
            </div>
        </a>
        {listClones}
    </div>
</div>
</>
)
}