import React, { useState, useEffect } from "react";


import { FaPlusCircle } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { MdModeEditOutline } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";
import { UpdateForm } from "./UpdateForm";

import AllLists from "../pics/odeh/cat_Frame_11.png";
import DoneLists from "../pics/odeh/cat_Frame_22.png";
import ProgressLists from "../pics/odeh/cat_Frame_33.png";

import "../TodoList_odeh_1.css";

const Filter = {
	showAll: 0,
	ShowOnlyInProgress: 1,
	showOnlyCompleted: 2,
};

//call the local storage
const getLocalStorage = () => {
	let toDo = localStorage.getItem("toDo");
	if (toDo) {
		return (toDo = JSON.parse(localStorage.getItem("toDo")));
	} else {
		return [];
	}
};

export function Tasks() {
	// Tasks (ToDo List) State
	const [toDo, setToDo] = useState(getLocalStorage("toDo"));
	let filter = 0;

	// Temp State
	const [newTask, setNewTask] = useState("");
	const [updateData, setUpdateData] = useState("");
	// const [category, setcategory] = useState("");


	//save to the local storage
	useEffect(() => {
		localStorage.setItem("toDo", JSON.stringify(toDo));
	}, [toDo]);

	// Add task
	const addTask = () => {
        a7a(Filter.showAll)
		filter = '';
		filter = Filter.showAll;
		if(newTask) {
		let num = Date.now()
		setToDo([...toDo, { id: num, text: newTask, status: false}
		])
		setNewTask('')

		}
	};

	// Delete task
	const deleteTask = (id) => {
		setToDo(toDo.filter((task) => task.id !== id));
	};

	// Mark task as done or completed
	const markDone = (id) => {
		setToDo(toDo.map((task) => (task.id === id ? { ...task, status: !task.status } : task)));
	};

	// Cancel update
	const cancelUpdate = () => {
		setUpdateData("");
	};

	// Change holder for the text that will be modified
	const changeHolder = (e) => {
		setUpdateData({ ...updateData, text: e.target.value });
	};

	// Update task when update button clicked
	const updateTask = () => {
		const index = toDo.findIndex((task) => task.id === updateData.id);
		if (index === -1) return;

		const updatedList = [...toDo];
		updatedList.splice(index, 1, updateData);
		setToDo(updatedList);

		setUpdateData("");
	};
	// const updateTask = () => {
	//     let removeOldRecord = [...toDo].filter(task => task.id !== updateData.id)
	//     setToDo([...removeOldRecord, updateData])

	//     setUpdateData('')
	// }

	//Tasks counters
	const inProgressCount = toDo.filter((task) => !task.status).length;
	const completedCount = toDo.filter((task) => task.status).length;
	const AllTasksCount = toDo.length;

	//categories filtering
	const handleProgressFilter = () => {
        a7a(Filter.ShowOnlyInProgress)
		// const progressTasks =toDo.filter((task) => !task.status)
		// console.log("progress",progressTasks)
		// setcategory(progressTasks)
		// filter = 'ShowOnlyInProgress'
	};
	const handleCompletedFilter = () => {
		// const completedTasks =toDo.filter((task) => task.status)
		// console.log("copmleted",completedTasks)
		// setcategory(completedTasks)
		// filter = 'ShowOnlyCompleted'
        a7a(Filter.showOnlyCompleted)
	};

	
	function a7a(param) {
        let matches
		switch (param) {
			case Filter.showAll:
                matches = document.body.getElementsByClassName('suftrue')
                for (let i = 0; i < matches.length; i++) {
                    matches[i].classList.remove("hide");
                }
                matches = document.body.getElementsByClassName('suffalse')
                for (let i = 0; i < matches.length; i++) {
                    matches[i].classList.remove("hide");
                    }
				break;
			case Filter.ShowOnlyInProgress:
                    a7a(Filter.showAll) // reset
                    // now show only in progress
                    matches = document.body.getElementsByClassName('suftrue')
                    for (let i = 0; i < matches.length; i++) {
                        matches[i].classList.add("hide");
                    }
                break;

			case Filter.showOnlyCompleted:
                    a7a(Filter.showAll) // reset
                    // now show only completed
                    matches = document.body.getElementsByClassName('suffalse')
                    for (let i = 0; i < matches.length; i++) {
                        matches[i].classList.add("hide");
                    }
                break;
			default:
				break;
		}
	}

	return (
		<div className="body_container">
			<div className="categories">
				<a href="#" onClick={addTask}>
					<h1 className="allTasksCounter">{AllTasksCount}</h1>
					<p>All Tasks</p>
					<img className="icon_1" src={AllLists} alt="cat1" />
				</a>
				<a href="#" onClick={handleProgressFilter}>
					<h1 className="inProgress">{inProgressCount}</h1>
					<p>In Progress</p>
					<img className="icon_3" src={ProgressLists} alt="cat3" />
				</a>
				<a href="#" onClick={handleCompletedFilter}>
					<h1 className="completed">{completedCount}</h1>
					<p>Completed</p>
					<img className="icon_4" src={DoneLists} alt="cat4" />
				</a>
			</div>
			<div className="list">
				<div className="list_template list_new">
					<h3 className="card_greeting">Plan your lazy life</h3>
					<div action="" method="post" className="list_form">
						<div className="add_div">
							{updateData && updateData ? (
								<UpdateForm updateData={updateData} changeHolder={changeHolder} updateTask={updateTask} cancelUpdate={cancelUpdate} />
							) : (
								<div className="adder_modifier">
									<input
										type="text"
										value={newTask}
										name="input_box_1"
										placeholder="What are you up to?"
										className="list_input_1"
										onChange={(e) => setNewTask(e.target.value)}
									/>
									<button className="add_text">
										<span className="material-symbols-outlined add_text_id" onClick={addTask}>
											<FaPlusCircle />
										</span>
									</button>
								</div>
							)}
							<ul className="to_do_text">
								{toDo &&
									toDo.map((task, index) => {
										return (
											<li key={task.id}>
												<div className={`col taskBg suf${task.status}`}>
													<div className={task.status ? "done" : ""}>
														<span className="taskNumber">{index + 1}</span>
														<span className="taskText">{task.text}</span>
													</div>
													<div className="iconsWrap">
														<span
															className="icons"
															text="Completed / Not Completed"
															onClick={(e) => markDone(task.id, !task.status)}
														>
															<AiFillCheckCircle />
														</span>
														{task.status ? null : (
															<span
																className="icons"
																text="Edit"
																onClick={() => {
																	setUpdateData(task);
																}}
															>
																<MdModeEditOutline />
															</span>
														)}
														<span
															className="icons"
															text="Delete"
															onClick={() => deleteTask(task.id, !task.status, task.status)}
														>
															<RiDeleteBin2Fill />
														</span>
													</div>
												</div>
											</li>
										);
									})}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
