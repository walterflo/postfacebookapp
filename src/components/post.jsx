import imgBici from "./../assets/bicicleta_ruta.webp"
import { useState, useEffect } from "react";
import CommentForm from "./commentform";
import ListComments from "./listcomments";
let Post = () => {
    // manejo de estados de los likes
    let [likes, setLike] = useState(0);
    let updateLikes = () => {
        setLike(likes + 1);
    };

    // manejo de estados de los comentarios
    let [btnComment, setBtnComment] = useState (false)
    let isShowComment = () => setBtnComment(!btnComment)
    let [comentar, setComentar] = useState(0);
    
    // funcion para obtener comentarios del formulario
    let [textComment, setTextComment] = useState("")
    let getCommentData = (comment) =>{
        setTextComment(comment)       
    }
    // listado de comentarios
    let listCom = [
        {id:1, text: "Me gusta mucho el ciclismo."},
        {id:2, text: "Muestrame rutas"}
    ];
    let nextID = 3
    let [id, setId] = useState(nextID)
    let [listData, setListDada] = useState(listCom)
    // comprobar si hay un nuevo comentario
    useEffect(()=>{
        
        if(textComment){
            setListDada([
                ...listData,
                {id: nextID+1, text: textComment}
            ])
        }
    }, [textComment])
    return(
        <div className="card" style={{"width": "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>                
                <img src={imgBici} className="card-img-top" alt="..."/>
        </div>
         <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-around">
                <span>😂🥰👍 {likes}</span> 
                <span>{listData.length}💬</span>
            </li>
             <li className="list-group-item d-flex justify-content-around">
              <button className="btn btn-secondary"
                onClick={updateLikes}
              >👍Likes</button> 
              <button className="btn btn-secondary"
                onClick={isShowComment}
              >💬Comments</button>
            </li>
        </ul>
        <div className="card-footer"> 
            { btnComment && <CommentForm getCommentData = {getCommentData} /> }
        </div>
        <ListComments listComData = {listData}/>
    </div>
    )

}

export default Post;