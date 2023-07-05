import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import TripsContainer from "./TripsContainer";
import TripsDetailsContainer from "./TripsDetailsContainer";


function Profile(){
    const {user} = useContext(UserContext)
    // const [users, setUsers] = useState([])

    // console.log(user)
    // useEffect(() => {
    //     fetch('/users')
    //     .then(res => res.json())
    //     .then(data => setUsers(data))
    // },[])

    // const user1 = users.find(user => user.first_name === "Olivia")
    // if(!user1) return <h1>loading</h1>
    // console.log(user1)

    const {email, first_name, last_name, trips, username, tsa_precheck} = user
    
    // console.log(email)
    return(
        <div className="side-bar">
            <div className="my-trips">
                <div className="img-container">
                    <img className="img" src="https://spectrumservicesnyc.com/wp-content/uploads/2022/08/Screenshot-2022-08-15-at-12.28.04-PM.jpeg"/>
                </div>
                <div className="img-conatiner">
                </div>
                <div className="profile-info">
                    <h3>{first_name} {last_name}</h3>
                    <h5 className="user-title">Email Address</h5>
                    <h5 className="user-input">{email}</h5>
                    <h5 className="user-title">Username</h5>
                    <h5 className="user-input">{username}</h5>
                    <h5 className="user-title">TSA Precheck</h5>
                    <h5 className="user-input">{tsa_precheck}</h5>
                </div>
                <div className="listings">
                    <TripsContainer trips={trips}/>
                </div>
            </div>
            <div className="itinerary">
                <TripsDetailsContainer trips={trips}/>
            </div>
        </div>
    )
}

export default Profile;