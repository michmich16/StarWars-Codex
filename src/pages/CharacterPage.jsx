import { useQuery } from "@tanstack/react-query";
import React from "react";
import { request } from "graphql-request";
import { allCharacters } from "../allCharacters";
import { Link } from "react-router-dom";
import style from './CharacterPage.module.scss';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { CharacterModal } from "../components/CharacterModal/CharacterModal";

export const CharacterPage = () => {
    const [selectedPerson, setSelectedPerson] = useState(null); 
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openCharacterModal = (person) => {
        setSelectedPerson(person); 
        setIsModalOpen(true);   
    };

    const closeModal = () => {
        setSelectedPerson(null);  
        setIsModalOpen(false);  
      };


    const { data, isLoading, error } = useQuery({
        queryKey: ["allCharacters"],
        queryFn: async () =>
            request(
                "https://swapi-graphql.netlify.app/.netlify/functions/index",
                allCharacters
            )
    });

 

    if (isLoading) {
        return <div>Loading......</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            <div className={style.characterStyle}>
                <ul>
                    {data?.allPeople.people.map((item) => {
                    
                        return (
                            <li key={item.id}>
                                 {/* {console.log(item.id)} */}

                                {item.name}
                                <button onClick={() => openCharacterModal(item.id)}>View Details</button>
                            </li>
                        );

                    })}
                </ul>
            </div>
            <div>
                {isModalOpen && <CharacterModal person={selectedPerson} handleClose={closeModal} />}
            </div>
        </>
    )
}