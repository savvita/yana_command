import React from "react";
import { useState } from "react";

const Cards=({pix,deleteCard})=>{
  
    return(
        pix.map((item, index)=>(
            <div key={index} className="cart">
                <img className="img_gadget" src={item}></img>
                <button id={index} className="btnDelete" onClick={(e)=>deleteCard(e)}>Delete</button>
            </div>
        ))  
    )
}
export default Cards