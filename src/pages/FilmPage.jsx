import { useQuery } from "@tanstack/react-query";
import React from "react";
import { request } from "graphql-request";
import { allFilms } from "../allFilms";
import { Link } from "react-router-dom";
import style from './Film.module.scss';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import ModalPage from "../components/Modal/Modal";



export const Films = () => {
  const [selectedFilm, setSelectedFilm] = useState(null); 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (film) => {
    setSelectedFilm(film); 
    setIsModalOpen(true);   
  };

  const closeModal = () => {
    setSelectedFilm(null);  
    setIsModalOpen(false);  
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
                        <button onClick={() => openModal(item.id)}>View Details</button>
                    </li>
                );
            })}
      </ul>
    </div>
    <div>
    {isModalOpen && <ModalPage film={selectedFilm} handleClose={closeModal} />}
    </div>
    </>
  );
};