import React from "react"
import styled from "styled-components"

export const HouseCard = ({ name, region, words, coatOfArms }) => {
    return (
        <CardContainer>
            <h1>{name}</h1>
            <h1>{region}</h1>
            <h1>{words}</h1>
            <h1>{coatOfArms}</h1>
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