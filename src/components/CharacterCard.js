/// To DO.. filter null friends values & match


import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useParams } from 'react-router-dom';

export const CharacterCard = ({ name, alias, url }) => {
    const { allegiances } = useParams();
    const friendsUrl = `${allegiances}`
    const [friends, setFriends] = useState([])

    console.log(allegiances)

    useEffect(() => {
        fetch(friendsUrl)
            .then(res => res.json())
            .then(json => setFriends(json))
    }, [friendsUrl])
    if (!friendsUrl) {
        return <>No allegiances </>
    }

    return (
        <CardContainer>
            {name && <div><h3>{name}{allegiances} </h3></div>}
            {friends.map(bff => (
                <div>BFF:{bff}</div>
            ))}
        </CardContainer >
    )
}


export const CardContainer = styled.div`
background-color:#c5d5cb;
color:#303030;
&:hover{
    color:snow;
}
h2{
    padding:4px 6px;
    text-align:center;
}
@media (min-width: 330px) {
    width: 450px;
}
`; 