import React, { useState } from "react";

function ToyCard({ id, name, img, likes, onToyDelete }) {
  const [likeCount, setLikeCount] = useState(likes)

  function handleDelete() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE"
    })
      .then((r) => r.json())
      .then(() => onToyDelete(id))
  }

  function handleLike() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "likes": (likeCount + 1)
      })
    })
      .then((r) => r.json())
      .then((data) => setLikeCount(data.likes))
  }
  
  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={img}
        alt={name}
        className="toy-avatar"
      />
      <p>{likeCount} Likes </p>
      <button className="like-btn" onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
