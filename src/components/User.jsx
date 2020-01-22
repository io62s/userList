import React from "react";
import { Link } from "react-router-dom";
import { MdDeleteForever, MdThumbUp } from "react-icons/md";

const User = ({ user, handleLikes, deleteUser }) => {
  const { _id, picture, name, likes } = user;

  const userLikes = likes > 0 && (
    <span>
      <strong>{likes}</strong> {likes > 1 ? "likes" : "like"}
    </span>
  );

  return (
    <div className="user-card" key={_id}>
      <img className="avatar" src={picture} alt={user} />
      <h2>
        <strong>{name}</strong>
      </h2>
      <div className="likes">
        <MdThumbUp
          className={`${likes > 0 ? "like-btn" : "no-likes"}`}
          onClick={() => handleLikes(_id)}
        />

        <span>{userLikes}</span>
      </div>
      <button className="delete-btn" onClick={() => deleteUser(_id)}>
        <span>
          <MdDeleteForever />
        </span>
      </button>
      <Link to={`/user/${_id}`}>
        <button className="detail-btn">User Details</button>
      </Link>
    </div>
  );
};

export default User;
