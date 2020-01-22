import React, { useState } from "react";
import { Route } from "react-router-dom";
import Users from "./components/Users";
import usersData from "./userData";
import UserDetails from "./components/UserDetails";
// import Counter from "./components/Counter";

import "./styles.css";

export default function App() {
  const [users, setUsers] = useState(usersData);

  const handleLikes = id => {
    const updatedLikes = users.map(user =>
      user._id === id ? { ...user, likes: user.likes + 1 || 1 } : user
    );

    setUsers(updatedLikes);
  };

  const deleteUser = id => {
    const updatedUsers = users.filter(user => user._id !== id);
    setUsers(updatedUsers);
  };

  const sortByLikes = () => {
    const sorted = users.sort((a, b) => b.likes - a.likes);
    setUsers([...sorted]);
  };

  const filterByName = username => {
    return users.filter(user =>
      user.name.toLowerCase().includes(username.toLowerCase())
    );
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "1000px", margin: "0 auto" }}>
      <Route exact path="/">
        <Users
          handleLikes={handleLikes}
          deleteUser={deleteUser}
          sortByLikes={sortByLikes}
          filterByName={filterByName}
        />
      </Route>
      <Route
        exact
        path="/user/:id"
        render={props => <UserDetails {...props} users={users} />}
      />
    </div>
  );
}
