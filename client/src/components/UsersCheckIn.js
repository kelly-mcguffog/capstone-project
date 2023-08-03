import React from "react";
import { Link } from "react-router-dom";

function UsersCheckIn({ allUsers }) {
  const uniqueUsers = {};

  allUsers.forEach((user) => {
    uniqueUsers[user.id] = user;
  });

  const uniqueUsersArray = Object.values(uniqueUsers);

  return (
    <div className="checkin-container">
      {uniqueUsersArray.slice(0, 3).map((user, index) => {
        const decodedUrl = decodeURIComponent(user.avatar.url);
        return (
          <div key={user.id} className={`img-container checkin checkin${index + 1}`}>
            {/* <Link to={`/users/${user.id}/trips`} key={user.id} className={`img-container checkin checkin${index + 1}`}> */}
            <img className="img checkin-img" alt={user.username} src={decodedUrl} />
            {/* </Link> */}
          </div>
        );
      })}
    </div>
  );
}

export default UsersCheckIn;
