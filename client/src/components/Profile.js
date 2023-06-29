import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import TripsContainer from "./TripsContainer";


function Profile(){
    const {user, setUser} = useContext(UserContext)
    const [users, setUsers] = useState([])

    // console.log(user)
    useEffect(() => {
        fetch('/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])

    const user1 = users.find(user => user.first_name === "Olivia")
    if(!user1) return <h1>loading</h1>
    console.log(user1)

    const {email, first_name, last_name, trips, username, tsa_precheck} = user1
    
    // console.log(email)
    return(
        <>
        <div className="my-trips">
            <h3>{first_name} {last_name}</h3>
            <h5>Email Address: {email}</h5>
            <h5>Username: {username}</h5>
            <h5>TSA Precheck: {tsa_precheck}</h5>
        </div>
        <TripsContainer trips={trips}/>
        </>
    )
}

export default Profile;