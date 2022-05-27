import React,{useEffect,useState} from 'react';
import { ChatFeed, Message } from "react-chat-ui";
import ChatStyles from '../../Assets/Styles/ChatApp/ChatApp.module.css';
import image from '../../Assets/Images/Face.jpg';

  function  MessageConfig (props)  {
    const receivedMessage=props.messageUser1; 

    const switchPerspective=props.perspective;
    const[id,setId]=useState(0);
  const [messageArr,setMessageArr] =useState([]);

useEffect(()=>{


  setMessageArr(receivedMessage)



if(switchPerspective==false){
  setId(0)
}else{
  setId(1)
}

})

if(id==0){
  return( 

    <div className={ChatStyles.msgPosition}>{
        
      messageArr.map((item)=>{
      return(
      <div>
    
        <ChatFeed
      messages={[{"id":0,"message":item},]}
      isTyping={false} 
      hasInputField={false} 
      showSenderName 
      bubblesCentered={false} 
      bubbleStyles={{
        text: {
          fontSize: 15
  
        },
        chatbubble: {
          // height:50,
          borderRadius: 70,
          
          padding:10
        }
      }
    }
    />
   </div>
    )},)
}</div> )
}if(id==1){
  return(
    <div className={ChatStyles.msgPosition}>{
      
     
<div>

{ messageArr.map((item)=>{
return(

  <div>
<div className={ChatStyles.aw}>

<img className={ChatStyles.image} src={image}></img>
</div>

 <ChatFeed
 
  messages={[ { "id":1,"message":item},]} 
 isTyping={false} 
 hasInputField={false} 
 showSenderName 
 bubblesCentered={false} 
 bubbleStyles={{
   text: {
     fontSize: 15

   },
   chatbubble: {
     // height:50,
     borderRadius: 70,
     
     padding:10
   }
 }}

/>

</div>)})}</div>}</div>)}


}

export default MessageConfig;