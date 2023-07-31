import React from "react";
import { Link } from "react-router-dom";


function UsersCheckIn({ allUsers }) {
  console.log(allUsers)
  return (
    <div className="checkin-container">
      {allUsers.slice(0, 3).map((user, index) => {
        const decodedUrl = decodeURIComponent(user.avatar.url);
        console.log(user)
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
