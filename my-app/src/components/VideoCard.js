import { Link } from "react-router-dom";
import UserInfo from "./UserInfo/UserInfo";




const VideoCard = ({ item, deleteCard, userInfo }) => {
    if(!item) {
        return null;
    }

    return (
        <div className="cart video-card__container">
            <div className="img_container">
                <video className='movie' width="400" height="300" controls="controls">
                    { item.videos && item.videos.tiny && <source src={ item.videos.tiny.url} type='video/ogg; codecs="theora, vorbis"' /> }
                    Тег video не поддерживается вашим браузером.
                </video>
            </div>
            { deleteCard && <button className="btnDelete" onClick={()=>deleteCard(item.id)}>Delete</button> }
            { userInfo && <Link to={`/user/${ item.user }/videos`}><UserInfo item={ item } /></Link> }
        </div>
    );
}

export default VideoCard;