import React, { useState } from "react";
import User from "./User";

const Users = ({ handleLikes, deleteUser, sortByLikes, filterByName }) => {
  const [userName, setUserName] = useState("");

  const handleInputChange = e => {
    setUserName(e.target.value);
  };

  const filterUsersByName = () => {
    return filterByName(userName);
  };

  return (
    <>
      <div className="top">
        <button className="sort-btn" onClick={sortByLikes}>
          Sort Users by Likes
        </button>
        <input
          className="filter-input"
          type="text"
          placeholder="Filter Users by Name"
          value={userName}
          onChange={handleInputChange}
          name="username"
        />
      </div>
      <div className="users-container">
        {filterUsersByName().map(user => (
          <User
            key={user._id}
            user={user}
            handleLikes={handleLikes}
            deleteUser={deleteUser}
          />
        ))}
      </div>
    </>
  );
};

export default Users;
