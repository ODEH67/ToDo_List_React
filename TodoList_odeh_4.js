const listTemplate = document.getElementById("list_template");
const listDiv = document.querySelector(".list");
const bodyy = document.body

const addListButton = document.getElementById("list_add");
document.getElementById("dark_button").addEventListener("click", ()=> {
    document.body.classList.toggle("dark_mode")
    localStorage.setItem("dark_mody", bodyy.classList.contains("dark_mode") ? "on" : "off");    // Save mode to local storage
})

const dark_mode_recall = localStorage.getItem("dark_mody");
if (dark_mode_recall === "on") {
bodyy.classList.add("dark_mode");
} else {
bodyy.classList.remove("dark_mode");
}
const allListsCounter = document.getElementById("allListsCounter");
const assignedCounter = document.getElementById("assigned");
const inProgressCounter = document.getElementById("inProgress");
const completedCounter = document.getElementById("completed");

/**
 * array of type todoList
 */
//  const todos = {};
const todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : {};
console.log(todos);
const Statuses = {
	Assigned: 0,
	InProgress: 1,
	Completed: 2,
};
if (Object.keys(todos).length > 0) {
	restoreTodos();
}

/**
 * type todoList{
 *  id: string
 *  title: string,
 *  todoitems: {
 *    done: boolean,
 *    value: string
 *   },
 *   status: Enum(Assigned, InProgress, Completed)
 * }
 *
 *
 */

addListButton.addEventListener("click", () => {
	const newList = listTemplate.cloneNode(true);
	newList.id = "list_" + Date.now();

	const deleteListButton = newList.querySelector("#del_list");

	todos[newList.id] = { title: "", todoItems: {} };
    todos[newList.id]["status"] = Statuses.Assigned;
    
    updateTodosInLocalStorage();
	recalculateStatusCards();
	deleteListButton.addEventListener("click", () => {
		newList.remove();
		delete todos[newList.id];
		updateTodosInLocalStorage();
		recalculateStatusCards();
	});
    
	newList.querySelector("#color_list").addEventListener("change", () => {
		let val = newList.querySelector("#color_list").value;
		switch (val) {
			case "status_blue":
				todos[newList.id]["status"] = Statuses.Assigned;
				updateTodosInLocalStorage();
				break;
			case "status_green":
				todos[newList.id]["status"] = Statuses.Completed;
				updateTodosInLocalStorage();
				break;
			case "status_pink":
				todos[newList.id]["status"] = Statuses.InProgress;
				updateTodosInLocalStorage();
				break;
			default:
				console.Error("a7a");
				break;
		}
		recalculateStatusCards();
	});
	newList.setAttribute("class", "list_new");
	newList.setAttribute("style", "display: block");

	// BEGIN Add event listeners to the new list

	const titleField = newList.querySelector("#list_title_1");
	titleField.addEventListener("blur", () => {
		todos[newList.id].title = titleField.value;
		updateTodosInLocalStorage();
	});
	const addTodoitembutton = newList.querySelector("#add_text");
	const added_text = newList.querySelector("#list_input_1");
	const adding_text = newList.querySelector(".to_do_text");
	adding_text.addEventListener("click", (event) => {
		const clickedElement = event.target;

		if (clickedElement.nodeName === "LI") {
			clickedElement.classList.toggle("grayed_out");
			todos[newList.id].todoItems[clickedElement.id]["done"] = !todos[newList.id].todoItems[clickedElement.id]["done"]; // todo item should be marked as done
			updateTodosInLocalStorage();
		}
	});
	addTodoitembutton.addEventListener("click", () => {
		const input_value = added_text.value.trim();

		Title_text_value = titleField.value.trim();

		if (Title_text_value !== "") {
			// e.preventDefault();
			// localStorage.setItem('Title',Title_text_value)      //******* Title storing

			if (input_value !== "") {
				const new_text = document.createElement("li");
				const del_text = document.createElement("button");
				del_text.innerHTML = "-";
				del_text.style.backgroundColor = "rgba(97, 106, 135, 0.413)";
				del_text.style.border = "0";
				del_text.style.padding = "0px 4px";
				del_text.style.borderRadius = "5px";
				del_text.style.marginLeft = "10px";
				del_text.style.cursor = "pointer";

				del_text.addEventListener("click", () => {
					//   removeInput(input.id);
					delete todos[newList.id].todoItems[new_text.id]; // delete item from array
					updateTodosInLocalStorage();

					new_text.remove();
				}); //TODO

				new_text.textContent = input_value;
				new_text.appendChild(del_text);
				adding_text.appendChild(new_text);
				new_text.id = Date.now();
				todos[newList.id].todoItems[new_text.id] = {
					done: false, // todo item should be marked as done
					value: new_text.textContent,
				};
				updateTodosInLocalStorage();
			}
			added_text.value = "";
		}
	});
	// END Add event listeners to the new list

	listDiv.appendChild(newList); // Add the new list
});
function recalculateStatusCards() {
	allListsCounter.innerHTML = Object.keys(todos).length;
	completedCounter.innerHTML = Object.keys(
		Object.keys(todos).filter((key) => {
			return todos[key].status === Statuses.Completed ? true : false;
		})
	).length;

	inProgressCounter.innerHTML = Object.keys(
		Object.keys(todos).filter((key) => {
			return todos[key].status === Statuses.InProgress ? true : false;
		})
	).length;

	assignedCounter.innerHTML = Object.keys(
		Object.keys(todos).filter((key) => {
			return todos[key].status === Statuses.Assigned ? true : false;
		})
	).length;
}
function updateTodosInLocalStorage() {
	localStorage.setItem("todos", JSON.stringify(todos));
}

function restoreTodos() {
	Object.keys(todos).forEach((key) => {
		var newList = listTemplate.cloneNode(true);
		// BEGIN add data form localstorage
		newList.id = key;

		// END add data form localstorage

		const deleteListButton = newList.querySelector("#del_list");

		// todos[newList.id] = { title: "", todoItems: {} };
		// updateTodosInLocalStorage();

		console.log(1);
		deleteListButton.addEventListener("click", () => {
			newList.remove();
			delete todos[newList.id];
			updateTodosInLocalStorage();
			recalculateStatusCards();
		});



		newList.querySelector("#color_list").addEventListener("change", () => {
			let val = newList.querySelector("#color_list").value;
			switch (val) {
				case "status_blue":
					todos[newList.id]["status"] = Statuses.Assigned;
					updateTodosInLocalStorage();
					break;
				case "status_green":
					todos[newList.id]["status"] = Statuses.Completed;
					updateTodosInLocalStorage();
					break;
				case "status_pink":
					todos[newList.id]["status"] = Statuses.InProgress;
					updateTodosInLocalStorage();
					break;
				default:
					console.Error("a7a");
					break;
			}
			recalculateStatusCards();
		});
		newList.setAttribute("class", "list_new");
		newList.setAttribute("style", "display: block");

		// BEGIN Add event listeners to the new list

		const titleField = newList.querySelector("#list_title_1");
		titleField.addEventListener("blur", () => {
			todos[newList.id].title = titleField.value;
			updateTodosInLocalStorage();
		});
		const addTodoitembutton = newList.querySelector("#add_text");
		const added_text = newList.querySelector("#list_input_1");
		const adding_text = newList.querySelector(".to_do_text");
		adding_text.addEventListener("click", (event) => {
			const clickedElement = event.target;

			if (clickedElement.nodeName === "LI") {
				clickedElement.classList.toggle("grayed_out");
				todos[newList.id].todoItems[clickedElement.id]["done"] = !todos[newList.id].todoItems[clickedElement.id]["done"]; // todo item should be marked as done
				updateTodosInLocalStorage();
			}
		});
		addTodoitembutton.addEventListener("click", () => {
			var input_value = added_text.value.trim();

			Title_text_value = titleField.value.trim();

			if (Title_text_value !== "") {
				// e.preventDefault();
				// localStorage.setItem('Title',Title_text_value)      //******* Title storing

				if (input_value !== "") {
					var new_text = document.createElement("li");
					var del_text = document.createElement("button");
					del_text.innerHTML = "-";
					del_text.style.backgroundColor = "rgba(97, 106, 135, 0.413)";
					del_text.style.border = "0";
					del_text.style.padding = "0px 4px";
					del_text.style.borderRadius = "5px";
					del_text.style.marginLeft = "10px";
					del_text.style.cursor = "pointer";

					del_text.addEventListener("click", () => {
						//   removeInput(input.id);
                        let before = todos;
						delete todos[newList.id].todoItems[new_text.id]; // delete item from array
                        let after = todos;
						updateTodosInLocalStorage();

						new_text.remove();
					}); //TODO

					new_text.textContent = input_value;
					new_text.appendChild(del_text);
					adding_text.appendChild(new_text);
					new_text.id = Date.now();
					todos[newList.id].todoItems[new_text.id] = {
						done: false, // todo item should be marked as done
						value: new_text.textContent,
					};
					updateTodosInLocalStorage();
				}
				added_text.value = "";
			}
		});
		// END Add event listeners to the new list

		listDiv.appendChild(newList); // Add the new list
		titleField.value = todos[key].title;
		newList.querySelector("#color_list").value = todos[key].status;
		Object.keys(todos[key].todoItems).forEach((todoItemKey) => {

			var new_text = document.createElement("li");
			var del_text = document.createElement("button");
			del_text.innerHTML = "-";
			del_text.style.backgroundColor = "rgba(97, 106, 135, 0.413)";
			del_text.style.border = "0";
			del_text.style.padding = "0px 4px";
			del_text.style.borderRadius = "5px";
			del_text.style.marginLeft = "10px";
			del_text.style.cursor = "pointer";

			del_text.addEventListener("click", () => {
				delete todos[newList.id].todoItems[new_text.id]; // delete item from array
				updateTodosInLocalStorage();

				new_text.remove();
			}); //TODO

			// new_text.textContent = input_value;
			new_text.textContent = `${todos[key].todoItems[todoItemKey].value.slice(0, todos[key].todoItems[todoItemKey].value.length - 1)}`;
            console.log(todos[key].todoItems[todoItemKey].value.slice(0, todos[key].todoItems[todoItemKey].value.length - 1));
			new_text.appendChild(del_text);
			adding_text.appendChild(new_text);
			new_text.id = Date.now();
			todos[newList.id].todoItems[new_text.id] = {
				done: false, // todo item should be marked as done
				value: new_text.textContent,
			};

			adding_text.appendChild(new_text);
		});
	});
	recalculateStatusCards();
}
