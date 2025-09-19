import imgBici from "./../assets/bicicleta_ruta.webp"
import { useState } from "react";
import CommentForm from "./commentform";
let Post = () => {
    // manejo de estados de los likes
    let [likes, setLike] = useState(0);

    // manejo de estados de los comentarios
    let [btnComment, setBtnComment] = useState (false)
    let isShowComment = () => setBtnComment(!btnComment)
    let [comentar, setComentar] = useState(0);
    return(
        <div className="card" style={{"width": "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>                
                <img src={imgBici} className="card-img-top" alt="..."/>
        </div>
         <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-around">
                <span>😂🥰👍 {likes}</span> <span> 2 mil 💬</span>
            </li>
             <li className="list-group-item d-flex justify-content-around">
              <button className="btn btn-secondary"
                onClick={()=> setLike(likes + 1)}
              >👍Likes</button> 
              <button className="btn btn-secondary"
                onClick={isShowComment}
              >💬Comments</button>
            </li>
        </ul>
        <div className="card-footer"> 
            { btnComment && <CommentForm/> }
        </div>
    </div>
    )

}

export default Post;