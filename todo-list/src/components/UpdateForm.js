import "../TodoList_odeh_1.css" 
import {GrUpdate} from "react-icons/gr"
import {ImCancelCircle} from "react-icons/im"


export function UpdateForm({ updateData, changeHolder, updateTask, cancelUpdate }) { 
return (
    <div className="adder_modifier">
<input type="text" value={updateData && updateData.text} name="input_box_1" placeholder="" className="list_input_1" onChange={ (e) => changeHolder(e)}/>
<button className="add_text"><span className="material-symbols-outlined add_text_id" onClick={updateTask}><GrUpdate/></span></button>
<button className="cancel_text"><span className="material-symbols-outlined add_text_id" onClick={cancelUpdate}><ImCancelCircle/></span></button>
</div>)
} 