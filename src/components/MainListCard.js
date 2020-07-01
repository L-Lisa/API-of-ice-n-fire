import React from "react"
import styled from "styled-components/macro"


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
img{
    width: auto;
    height: unset;
    margin: 5px 0;
    object-fit: contain;
    width: 318px;
}
@media (min-width: 330px) {
    width: 450px;
}
`;

export const MainListCard = ({ name }) => {

    return (
        <CardContainer>
            <h2>{name}</h2>
        </CardContainer >

    )
}

