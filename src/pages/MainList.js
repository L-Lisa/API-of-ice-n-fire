import React, { useState, useEffect } from "react"
import { MainListCard } from "../components/MainListCard"
import styled from "styled-components"
import { Link } from "react-router-dom"

export const MainList = () => {
    //Fetch houses
    const GOT_URL = "https://www.anapioficeandfire.com/api/houses?page=1&pageSize=100"
    const [houses, setHouses] = useState([])

    useEffect(() => {
        fetch(GOT_URL)
            .then(res => res.json())
            .then(json => setHouses(json))
    }, [GOT_URL])
    console.log(houses)
    if (!houses) {
        return <LoadingText>Loading..</LoadingText>
    }
    return (
        <MainListSection>
            <h1 >The Houses of Game of Thrones</h1>
            {houses.map((oneHouse) => (
                <Link to={`house/${oneHouse.name}`} key={oneHouse.name}>
                    <MainListCard {...oneHouse} />
                </Link>
            ))
            }
        </MainListSection >
    )
}


export const LoadingText = styled.p`
text-align: center;
text-transform: uppercase;
letter-spacing: 4.5px;
font-weight: bolder;
`;

export const MainListSection = styled.main`
padding: 15px;
background:snow;
display: flex;
flex-direction: column;
align-items: center;
a{
    text-decoration:none;
}
h1{
text-align:center;
color:#303030;
text-transform: uppercase;
letter-spacing: 4.5px;
font-weight: bolder;
}
`;

