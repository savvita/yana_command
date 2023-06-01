import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import UserInfo from './UserInfo/UserInfo';

const Cards=({pix,deleteCard})=>{
  
    return(
        pix.map((item, index)=>(
            <div key={index} className="cart">
                <img className="img_gadget" src={item}></img>
                <button id={index} className="btnDelete" onClick={(e)=>deleteCard(e)}>Delete</button>
                <Link to={`/user/${ item.user }`}><UserInfo item={ item } /></Link>
            </div>
        ))  
    )
}
export default Cards