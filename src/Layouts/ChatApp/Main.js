import ChatStyles from '../../Assets/Styles/ChatApp/ChatApp.module.css';
import React,{useRef, useState} from 'react';
import Message from '../../Components/ChatApp/message.js'
import styled from "styled-components";
function ChatAppMainContent(props){
const [conversant1,setConversant]=useState('Patrick Star');
const [conversant12,setConversant2]=useState('Me');
const [changeUser,setChangeUser]=useState(false);
const [messageUser1,setMessageUser1]=useState([]);
const [val, setVal] = useState();
const refContainer = useRef(null);


const handleSubmit=(e)=>{
  

    e.preventDefault();

    if(changeUser==false){
      setMessageUser1(messageUser1=>[...messageUser1, refContainer.current.value]);

    }



    
}

  
  const Button = styled.button`
    background-color:black;
    color: white;
    padding: 10px 5px;
    border-radius: 5px;
    outline: 0;
    text-transform: uppercase;
 
    cursor: pointer;
    box-shadow: 0px 2px 2px lightgray;
    transition: ease background-color 250ms;
    &:hover {
      background-color: orange;
    }
    &:disabled {
      cursor: default;
      opacity: 0.7;
    }
  `;

    return(<div className="Box">
        <div className={ChatStyles.chatContainer  }>
        <div className={ChatStyles.title}> <h1>ChatApp</h1></div>
        

        <div className={ChatStyles.boxForMessages}>
<div className={ChatStyles.conversant}>
<h3>{changeUser?conversant1:conversant12}  </h3><Button onClick={((e)=>{setChangeUser(!changeUser); })} className={ChatStyles.btnPosition}><i>Switch Look</i></Button>
</div>
<div><Message messageUser1={messageUser1}  perspective={changeUser}/></div>

<form className='form' onSubmit={handleSubmit}>


            <input type="text"   ref={refContainer} placeholder="Send Message" className={ChatStyles.sendMessage}></input>
</form>

        </div>
        </div>
        </div>)
}


 export default  ChatAppMainContent;