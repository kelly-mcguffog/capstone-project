import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Home(){
    const {user} = useContext(UserContext)
    return(
        <div className="wrapper">
            <h1>Hi</h1>
        </div>
    )
}

export default Home;