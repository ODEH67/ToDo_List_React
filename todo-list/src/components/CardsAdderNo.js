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
    const [assignedCount, setAssignedCount] = useState(0);            //added
    const [progressCount, setProgressCount] = useState(0);            //added
    const [completedCount, setCompletedCount] = useState(0);          //added
    const [selectedColor, setSelectedColor] = useState("");          //added
    console.log("selectedColor",selectedColor)
    console.log("assignedCount",assignedCount)

    useEffect(() => {
    localStorage.setItem("listClones", JSON.stringify(listClones))
    },[listClones]);

    const handleColorSelect = (e) => {          //added
        const selectedColor = e.target.value;
        setSelectedColor(selectedColor);

      };
      

    // const handleCloneClick = () => {
    //     const listId = Date.now()
    //     const newArrCards = [...listClones,<Cards key={listId} removeCard={removeCard} />];
    //     setlistClones(newArrCards);
    //     console.log(newArrCards)
    //     // console.log(listIndex)
    // };

    const handleCloneClick = () => {                  //added
        const listId = Date.now();
        const listColor = selectedColor;
        const newArrCards = [
          ...listClones,
          <Cards key={listId} removeCard={removeCard} listColor={listColor} colorSelect={handleColorChange} />
        ];

        setlistClones(newArrCards);

        switch (selectedColor) {
          case "status_blue":
            setAssignedCount(assignedCount + 1);
            break;
          case "status_pink":
            setProgressCount(progressCount + 1);
            break;
          case "status_green":
            setCompletedCount(completedCount + 1);
            break;
          default:
            break;
        }
    };


    const removeCard = (listId, status) => {
const newArrCards = [...listClones];
newArrCards.splice(listId, 1);
if (status === "assigned") {
setAssignedCount((prevCount) => prevCount - 1);
} else if (status === "inProgress") {
setProgressCount((prevCount) => prevCount - 1);
} else if (status === "completed") {
setCompletedCount((prevCount) => prevCount - 1);
}
setlistClones(newArrCards);
};

const handleColorChange = (status, prevStatus) => {
if (status === "assigned") {
setAssignedCount((prevCount) => prevCount + 1);
} else if (status === "inProgress") {
setProgressCount((prevCount) => prevCount + 1);
} else if (status === "completed") {
setCompletedCount((prevCount) => prevCount + 1);
}
if (prevStatus === "assigned") {
setAssignedCount((prevCount) => prevCount - 1);
} else if (prevStatus === "inProgress") {
setProgressCount((prevCount) => prevCount - 1);
} else if (prevStatus === "completed") {
setCompletedCount((prevCount) => prevCount - 1);
}
};



    return (
        <>
        <div className="body_container">
        <div className="categories">
        <a href="#">
        <h1 className="allListsCounter">{listClones.length}</h1>
        <p>All Lists</p>
        <img className="icon_1" src={AllLists} alt="cat1" />
        </a>
        <a href="#">
        <h1 className="assigned">{assignedCount}</h1>
        <p>Assigned</p>
        <img className="icon_2" src={addedLists} alt="cat2" />
        </a>
        <a href="#">
        <h1 className="inProgress">{progressCount}</h1>
        <p>In Progress</p>
        <img className="icon_3" src={ProgressLists} alt="cat3" />
        </a>
        <a href="#">
        <h1 className="completed">{completedCount}</h1>
        <p>Completed</p>
        <img className="icon_4" src={DoneLists} alt="cat4" />
        </a>
        </div>
        <div className="list">
        <a href="#">
        <div className="list_add">
        <img src={AddBtn} alt="add" onClick={handleCloneClick} />
        <span>Add List</span>
        </div>
        </a>
        {listClones}
        </div>
        </div>
        </>
        );
        }