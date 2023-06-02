import React from "react";
import { Link } from 'react-router-dom';
import UserInfo from './UserInfo/UserInfo';

const Cards=({pix, deleteCard, userInfo })=>{
    if(!pix) return null;
  
    return(
        pix.map((item, index)=>(
            <div key={index} className="cart">
                <div className="img_container">
                    <img className="img_gadget" src={item.largeImageURL} alt={ item.tags } />
                </div>
                { deleteCard && <button id={index} className="btnDelete" onClick={()=>deleteCard(index)}>Delete</button> }
                {userInfo && <Link to={`/user/${ item.user }`}><UserInfo item={ item } /></Link> }
            </div>
        ))  
    )
}
export default Cards