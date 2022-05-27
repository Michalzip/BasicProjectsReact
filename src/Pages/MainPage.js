import React, { useState, useEffect } from 'react'
import Header from '../Layouts/MainPage/Header.js';
import Footer from '../Layouts/MainPage/Footer.js';
import Main from '../Layouts/MainPage/Main.js'

function MainPage() {
    
    return (
        <div className="ContentPage">
            <Header/>
            <Main/>
           <Footer/>
        </div>
    )


    

}


export default MainPage;

