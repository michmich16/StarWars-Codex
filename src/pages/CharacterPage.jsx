import { useQuery } from "@tanstack/react-query";
import React from "react";
import { request } from "graphql-request";
import { allCharacters } from "../allCharacters";
import { Link } from "react-router-dom";
import style from './CharacterPage.module.scss';

export const CharacterPage = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["allCharacters"],
        queryFn: async () =>
            request(
                "https://swapi-graphql.netlify.app/.netlify/functions/index",
                allCharacters
            )
    });

    console.log(data);

    if (isLoading) {
        return <div>Loading......</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            {data?.allPeople.people.map((item) =>{
                return(
                        <li>
                        <Link to={`characters/${item.id}`} key={item.name}>
                            {item.name}
                        </Link>
                    </li>
                    );
              
            })}
        </div>
    )
}