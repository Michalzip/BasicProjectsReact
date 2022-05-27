import React from 'react';
import todoStyles from '../../Assets/Styles/TodoApp/TodoApp.module.css';
import { FaTrash } from 'react-icons/fa';
function Task(props) {
 
    var Tasks = props.task;
    var SetTasks=props.setTask;
    var done = props.done;



const listTasks=Tasks.map((task,id)=>{
return(
<div className={todoStyles.task}>

<li key={id} > <div className={ done ? "taskdone"  : "takNotDone"}>{task}</div>   <button  onClick={(e) => {Tasks.splice(id,1); SetTasks((Tasks.filter(item=>item.id!==id )));  }} className={todoStyles.trashBtn}><i className="fa fa-trash-o"></i><FaTrash /></button> 
<input type="checkbox"      className={todoStyles.check}></input>

                           
</li>


</div>
        );
    })

return(listTasks)

}


export default Task;


