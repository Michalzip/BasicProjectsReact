import React,{useState} from "react";
import { Link } from "react-router-dom";
import todoAppImage from "../../Assets/Images/TodoApp.png";
import chuckNorrisImage from "../../Assets/Images/Norris.png";
import chatAppImage from "../../Assets/Images/ChatApp.png";
function MainContent(){

const [DescribeTodo,setDescribeTodo]=useState(false);
const [DescribeJokeApp,setJokeApp]=useState(false);
const [DescribeChatApp,setDescribeChatApp]=useState(false);


const describeTodoHandle =(e)=>{

e.preventDefault();
setDescribeTodo(!DescribeTodo);



}

const describeJokeAppHandle=(e)=>{
    e.preventDefault();
    setJokeApp(!DescribeJokeApp);
 
}

const describeChatApp =(e)=>{

    e.preventDefault();
    setDescribeChatApp(!DescribeChatApp);
    
    
    
    }


    return(
        <div className="Box">
 
        
        <div className="Box-Content">
        <h3>TodoApp</h3>

        <div className="Content-Describe">
            {DescribeTodo?  <h4> Todo App is the best choose when you are always busy and often forgot about your important things <a href="#" onClick={describeTodoHandle }> Show Less</a></h4> :
             <h4>Todo App is the best choose when you are always busy <a href="#" onClick={describeTodoHandle }>Read More</a>....</h4> }
        
        </div>

        <div className="Content-Image">
        <img className="imagee" src={todoAppImage}></img>
        </div>

        <div className="Reference">
     
        <Link to="/TodoApp" >Get Project</Link>
        
        </div>
        </div>
         
        <div className="Box-Content">
        <h3>JokeApp</h3>


        <div className="Content-Describe">
        {DescribeJokeApp?  <h4> Joke App is the best choose when you want a  bit smille one your face smile is healty  <a href="#" onClick={describeJokeAppHandle }> Show Less</a></h4> :
             <h4> Joke App is the best choose when you want a  bit smille one your <a href="#" onClick={describeJokeAppHandle }>Read More</a>....</h4> }
        
        </div>

        <div className="Content-Image">
        <img className="imagee" src={chuckNorrisImage}></img>
        </div>
        <div className="Reference">
     
     <Link to="/ApiApp" >Get Project</Link>
     
     </div>

        </div>
         
    
         
        <div className="Box-Content">
            <h3>ChatApp</h3>

            <div className="Content-Describe">
            {DescribeChatApp?  <h4> Chat App is the best choose when you want to write to someone  <a href="#" onClick={describeChatApp }>Read More</a>....</h4> :
             <h4>Chat App is the best choose when you want to write to someone or if you are lonely this is the choice for you <a href="#" onClick={describeChatApp }>Show Less</a></h4> }

            <div className="Content-Image">
        <img className="imagee" src={chatAppImage}></img>
        </div>
        <div className="Reference">
     
     <Link to="/ChatApp" >Get Project</Link>
     
     </div>
        </div>
        </div>

        </div>
    )


}



export default MainContent;