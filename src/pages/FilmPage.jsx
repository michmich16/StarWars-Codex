import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from 'react';
import { request } from "graphql-request";
import { allFilms } from "../allFilms";
import { Link } from "react-router-dom";
import style from './Film.module.scss';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import ModalPage from "../components/Modal/Modal";

import image1 from './../assets/ZmlsbXM6MQ==.jpg';
import image2 from './../assets/ZmlsbXM6Mg==.jpg';



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

  
  const imageArray = [
    image1,
    image2,
    image1,
    image1,
    image2
   
  ];

  

  return (
    <>
    <div  className={style.AllFilm}>
        <ul>
            {data.allFilms.films.map((item) => {
             
                return (
                    <li key={item.id}>
                       {console.log(item.id)}
              
                        {item.title}
                        {imageArray.map((image, index) => (
                     <img key={index} src={image} alt={`Image ${index + 1}`} />
                        ))}
                        <span >{item.releaseDate.slice(0, 4)}</span>
                        <p>{item.id}.jpg</p>
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