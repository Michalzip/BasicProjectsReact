
import React,{ useState, useEffect } from 'react';
import Joke from '../../Components/ApiApp/Joke.js';
import '../../Assets/Styles/ApiApp/ApiApp.css';
import chuckNorrisImage from '../../Assets/Images/chuckNorris.jpg'
function  ApiContent () {

const [api, setApi]=useState([]); 


const getData = async  () => {
 const response= await fetch('https://api.chucknorris.io/jokes/random');
 const data =await response.json();

  setApi(data);

  }



useEffect(()=>{ 
    
        getData();
     
  
},[])

     return(<div>


  <div className="Box">


<div className="apiContainer">
<div className="PositionImage">

 
<img className="Image"
src={chuckNorrisImage}
alt="ChuckNorris"
/>
   <div>

   </div>
<div className="Text">
{<Joke apiData={api} getData={getData}/>}


</div>
</div>


</div>
      </div>     
     <div>
     </div>
     </div>)
    
    
     
}


export default ApiContent;


