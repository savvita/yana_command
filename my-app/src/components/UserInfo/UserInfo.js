

import './UserInfo.css';
import noAvatar from "../../files/icons8-avatar-100.png";

const UserInfo = ({ item }) => {
    if(!item) return null;

    return (
        <div className="user-info">
            <div className="user-info__avatar" style={{ backgroundImage: `url(${(item.userImageURL && item.userImageURL.length > 0) ? item.userImageURL :  noAvatar })`}}></div>
            <div className="user-info__username" >{ item.user }</div>
        </div>
    );
}

export default UserInfo;