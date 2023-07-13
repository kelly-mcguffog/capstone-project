import React from "react";

function UsersCheckIn({ allUsers }) {
  return (
    <div className="checkin-container">
      {allUsers.slice(0, 3).map((user, index) => {
        const decodedUrl = decodeURIComponent(user.avatar.url);
        return (
          <div key={user.id} className={`img-container checkin checkin${index + 1}`}>
            <img className="img checkin-img" alt={user.username} src={decodedUrl} />
          </div>
        );
      })}
    </div>
  );
}

export default UsersCheckIn;
