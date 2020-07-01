import React, { useState, useEffect } from "react"
/* import { useParams } from "react-router-dom" */
/* import styled from "styled-components/macro" */
/* import { Link } from "react-router-dom" */
import { CharacterCard } from "components/CharacterCard"

export const Characters = () => {
    const [characters, setCharacters] = useState([])
    const PPL_URL = `https://www.anapioficeandfire.com/api/characters?page=1&pageSize=100`

    //Characters
    useEffect(() => {
        fetch(PPL_URL)
            .then((res) => res.json())
            .then((json) => setCharacters(json))
    }, [PPL_URL])
    console.log()

    //Friends
    return (

        <div>
            <h1 >Characters in Game of Thrones</h1>
            {characters.map((person) => (

                <CharacterCard {...person} />

            ))
            }
        </div >
    )
}

