import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { HouseCard } from "../components/HouseCard";
import { LoadingText } from "pages/MainList"


export const DetailsPage = () => {
    const params = useParams()
    const [theHouse, setTheHouse] = useState([])
    const GOT_URL = `https://www.anapioficeandfire.com/api/houses/?page=1&pageSize=50`
    const houseMatch = theHouse.find((selectedHouse) => selectedHouse.name === params.name)

    useEffect(() => {
        fetch(GOT_URL)
            .then((res) => res.json())
            .then((json) => setTheHouse(json))
    }, [GOT_URL])
    console.log(houseMatch)

    if (!houseMatch) {
        return <LoadingText>Loading..</LoadingText>
    }
    return (
        <>
            <HouseCard  {...houseMatch} />
        </>
    )
}
