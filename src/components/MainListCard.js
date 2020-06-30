import React from 'react'
import styled from "styled-components"

export const MainListCard = ({ url, name }) => {

    return (
        <CardContainer>
            <h2>{name}  {url}</h2>
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
}
@media (min-width: 330px) {
    width: 450px;
}
`; 