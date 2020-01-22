import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { FaEnvelope, FaBuilding, FaHeart, FaUserFriends } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const UserDetails = props => {
  const { id } = useParams();
  const history = useHistory();
  const user = props.users.find(u => u._id === id);
  const {
    _id,
    picture,
    name,
    gender,
    age,
    friends,
    email,
    address,
    company,
    likes
  } = user;

  const userFriends = friends.map(friend => (
    <li key={friend.id}>{friend.name}</li>
  ));

  const handleHistory = () => {
    history.push("/");
  };
  return (
    <>
      <button className="back-btn" onClick={handleHistory}>
        Go Back
      </button>
      <div className="users-container">
        <div className="user-card" key={_id}>
          <div className={`${likes ? "likes-heart" : "heart"}`}>
            <FaHeart />
            <span>{likes === 0 ? null : likes}</span>
          </div>
          <img className="avatar" src={picture} alt={user} />
          <h2>
            <strong>{name}</strong>
          </h2>
          <span>
            <strong>{gender}</strong>
          </span>{" "}
          - <span>{age}</span>
          <p className="data">
            <FaEnvelope style={{ marginRight: ".5rem", fontSize: "20px" }} />
            <strong>{email}</strong>{" "}
          </p>
          <p className="data">
            <FaBuilding style={{ marginRight: ".5rem", fontSize: "20px" }} />
            <strong>{company}</strong>
          </p>
          <p className="data">
            <strong>
              <MdLocationOn
                style={{ marginRight: ".2rem", fontSize: "25px" }}
              />{" "}
              {address}
            </strong>
          </p>
          <div className="friends-container">
            <FaUserFriends style={{ marginRight: ".5rem", fontSize: "20px" }} />
            <span>Friends</span>
            <ul style={{ borderTop: "1px solid #d1d1d1" }}>{userFriends}</ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
