import React, { useState, useEffect } from "react"
import styled from "styled-components/macro"
import img from "../images/background.jpg"

export const CardContainer = styled.div`
background-image: url(${img});
background-size:cover;
background-position:50% 50%;
color:#303030;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
h1{
    margin: 0;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: bolder;
    padding: 15px;
    background:snow;
}
h2{
    font-weight: 400;
    margin-top: 15px;
    margin-bottom: 2px;
}
h3{
    font-weight: bold;
    margin-left: 3px;
    margin: unset;
    width: 80%;
    font-size: 1.5rem;
}
img{
    width: auto;
    height: unset;
    margin: 5px 0;
    object-fit: contain;
    width: 318px;
    margin:0 auto;
}
div{
    display: flex;
    flex-direction: column;
    align-content:center;
    background-color: #dce2e4;
    padding: 5px;
    
}
`;
export const InfoContainer = styled.section`
width: 80%;
margin: 0 auto;
display: flex;
align-content: center;
flex-direction: column;
margin: 15px;
border-radius: 13px;
background-color: #c5d5cb;
background-image: linear-gradient(336deg, #c5d5cb 0%, #f7f7e3 50%, #c5d5cb 100%);
`;

export const HouseCard = ({ currentLord, overlord, name, region, url, words, coatOfArms }) => {
    const [biglord, setBiglord] = useState("")
    const [lordNow, setLordNow] = useState("")

    //Current Ruling Lord
    useEffect(() => {
        fetch(currentLord)
            .then(res => res.json())
            .then(json => setLordNow(json.name))
    }, [currentLord])
    console.log(lordNow)

    // House of Ruling overlord
    useEffect(() => {
        fetch(overlord)
            .then(res => res.json())
            .then(json => setBiglord(json.name))
    }, [overlord])
    console.log(biglord)

    return (
        <CardContainer>
            <h1>{name}</h1>
            <InfoContainer>
                {region && <div><h2>Residing in the region of:</h2><h3>{region}</h3></div>}
                {lordNow && <div><h2>Current Lord of the House:</h2><h3>"{lordNow}"</h3></div>}
                {words && <div><h2>Their famous words:</h2><h3>"{words}"</h3></div>}
                {biglord && <div><h2>House of the ruling overlord:</h2><h3>"{biglord}"</h3></div>}
                {coatOfArms && <div><h2> Coat of Arms described as:</h2><h3>{coatOfArms}</h3></div>}
            </InfoContainer>
        </CardContainer >
    )
}
