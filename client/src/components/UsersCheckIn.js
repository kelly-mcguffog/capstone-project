import React from "react";


function UsersCheckIn({allUsers}) {
   


    return (
        <div className="checkin-container">
            {allUsers.slice(0, 3).map((user, index) => {
                return(
                    <div key={user.id} className={`img-container checkin checkin${index + 1}`}>
                        <img className="img checkin-img"  alt={user.username} src={user.avatar} />
                    </div>
                )
            })}
        </div>
    )
}

export default UsersCheckIn;