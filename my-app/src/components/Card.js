import { Link } from "react-router-dom";
import UserInfo from "./UserInfo/UserInfo";

import '../cssFiles/style_main.css';

const Card = ({ item, deleteCard, userInfo}) => {
    return (
        <div className="cart">
            <a href={ item.largeImageURL } target="_blank" className="img_gadget" >
                <div className="img_container">
                    { 
                        item && <img className="img_gadget" src={item.webformatURL} alt={ item.tags } />
                            
                    }
                </div>
            </a> 
            { deleteCard && <button className="btnDelete" onClick={ ()=>deleteCard(item.id) }>Delete</button> }
            { userInfo && <Link to={`/user/${ item.user }/images`}><UserInfo item={ item } /></Link> }
        </div>
    );
}

export default Card;