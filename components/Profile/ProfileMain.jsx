import React from "react";
import { ProfileBody } from "./ProfileBody";
import { ProfileHead } from "./ProfileHead";

export function ProfileMain () {
    let [username, setUserName] = React.useState("AP")
    return (
        <>
            <ProfileHead 
                Name={username}/>
            <ProfileBody 
                Name={username}/>
        </>
    )
}