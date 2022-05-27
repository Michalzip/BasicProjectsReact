import React,{ useState, useEffect } from 'react';

import {FaRegArrowAltCircleLeft,FaRegArrowAltCircleRight } from 'react-icons/fa';

function GetJoke(props){
    const data=props.apiData;
    const functionToGetData=props.getData;
    const {value}=data;
    const [jokeArr,setJoke] = useState([value]);
    const [firstJoke,setFirstJoke]=useState(true);
    const [index,setIndex]=useState(0);


    useEffect(()=>{

  if(jokeArr==""){

    setFirstJoke(true);
  }else{
    setFirstJoke(false);
  }

  
  }
  )



    const nextSlide=()=>{

      functionToGetData();
      setJoke(oldArray => [...oldArray, value] );
   
     setIndex((oldIndex)=>{
    
     let index=oldIndex+1; 
    
    

     console.log(jokeArr.length-1);
     return index; 
     })
 
    }

    const prevSlide=()=>{

      setIndex((oldIndex)=>{
     
        let index=oldIndex-1;
if(index<=0){ 

  index=jokeArr.length-1;

}

return index

      })
    }

    return(<div >

        
         <button className='btnRight' onClick={()=>{ nextSlide()}}>   <FaRegArrowAltCircleRight/></button>
         <button className='btnLeft' onClick={()=>{prevSlide()}}>   <FaRegArrowAltCircleLeft/></button>
      <h3 className="TextValue">{jokeArr.map((joke,jokeIndex)=>{
        
   
        let slide='nextSlide';
        if(jokeIndex===index){
          slide='currentSlide';
        }
    
        if(jokeIndex>index){

          slide = 'previousSlide'
        }
        
           
        return(<div className={slide} key={jokeIndex}><div className='jokeValue' >{firstJoke?value:joke}</div></div>)})}</h3>


        </div>
    )


}


export default GetJoke;