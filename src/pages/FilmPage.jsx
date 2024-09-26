import { useQuery } from "@tanstack/react-query";
import React from "react";
import { request } from "graphql-request";
import { allFilms } from "../allFilms";
import { Link } from "react-router-dom";
import style from './Film.module.scss';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const Films = () => {
  const navigate = useNavigate();

  const openFilmModal = (id) => {
    navigate(`/film/${id}`); // Navigating to Modal page with the selected film ID
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["allFilms"],
    queryFn: async () =>
      request(
        "https://swapi-graphql.netlify.app/.netlify/functions/index",
        allFilms
      ),
  });

  console.log(data);

  if (isLoading) {
    return <div>Loading......</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
    <div  className={style.AllFilm}>
        <ul>
            {data.allFilms.films.map((item) => {
             
                return (
                    <li key={item.id}>
                       {console.log(item.id)}
              
                        {item.title}
                        <span >{item.releaseDate.slice(0, 4)}</span>
                        <button onClick={() => openFilmModal(item.id)}>View Details</button>
                    </li>
                );
            })}
      </ul>
    </div>
    <div>
      
    </div>
    </>
  );
};