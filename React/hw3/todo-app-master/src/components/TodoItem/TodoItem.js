import React from "react";
import "./TodoItem.css";

function Todo(props) {
  const { content, onDelete, id} = props;

 
  function handleClick(e){
        if(e.target.style.textDecoration !== "line-through"){
            e.target.style.textDecoration = "line-through";
        } else {
          e.target.style.textDecoration = "none";
        }
  }



  return <div>
            <div onClick={handleClick}>{content}</div>  
            <button value={id} onClick={onDelete} className="delete-btn">Sil</button>
         </div>;
}

export default Todo;
