import React, { Component } from 'react'
import Header from "./Header/index";
import BaseBoost from './BaseBoost/index';
import Footer from "./Footer/index";
import "./style.css"

 function Main() {
    return (
        <div className="main-con">
            <BaseBoost></BaseBoost>
            <Header></Header>
            <Footer></Footer>
            
        </div>
    )
}


export default Main;