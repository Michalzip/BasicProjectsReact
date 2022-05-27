import React, {useEffect, useState} from 'react';
import todoStyles from '../../Assets/Styles/TodoApp/TodoApp.module.css';
import Task from '../../Components/TodoApp/Task.js';

function TodoMainContent(){

    const [ userInput, setUserInput ] = useState('');
    const [ toDoList, setToDoList ] = useState([]);
    const [done,setDone]=useState(false);
    var [activeIndex,setIndex]=useState();



const handleChange = (e) => {

    setUserInput(e.currentTarget.value)
};




const handleSubmit=(e)=>{
    e.preventDefault();



    if(userInput!=''){

        setToDoList(oldArray => [...oldArray, userInput]);
        setUserInput("")
    }else{
       alert('Wirte required data!')
    }
}
    
return( 
<div className={todoStyles.todoContainer}>



<div className={todoStyles.title}> <h1>TodoApp</h1></div>

<div className={todoStyles.nav}>
<form onSubmit={handleSubmit}  >
    <input type='text' className={todoStyles.input}  value={userInput}   onChange={handleChange} ></input>
    <input type='submit'  value='add' onClick={()=>{{<Task task={toDoList} />}}} className={todoStyles.addBtn} ></input>
</form>

<div className={todoStyles.contentTask}>
{<Task task={toDoList} setTask={setToDoList} done={done} setDone={setDone} activeIndex={activeIndex} setIndex={setIndex} />}

</div>


</div>




</div>
)

}

export default TodoMainContent;