import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useParams } from "react-router-dom"
import { HouseCard } from "../components/HouseCard";
import { LoadingText } from "pages/MainList"


export const DetailsPage = () => {
    const params = useParams()
    const [theHouse, setTheHouse] = useState([])
    const GOT_URL = `https://www.anapioficeandfire.com/api/houses/`
    const houseMatch = theHouse.find((selectedHouse) => selectedHouse.name === params.name)

    //API fetch
    useEffect(() => {
        fetch(GOT_URL)
            .then((res) => res.json())
            .then((json) => setTheHouse(json))
    }, [])
    console.log(houseMatch)


    if (!houseMatch) {
        return <LoadingText>Loading..</LoadingText>
    }
    return (
        <HouseCard  {...houseMatch} />
    )
}

export const DetailCard = styled.section`
width: 500px;
height: 500px;
`; 