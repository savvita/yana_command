import React from "react";
import { useState } from "react";

const Cards=({pix})=>{
  
    return(
        pix.map((item, index)=>(
            <div key={index} className="cart">
                <img className="img_gadget" src={item}></img>
            </div>
        ))  
    )
}
export default Cards