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
import image3 from './../assets/ZmlsbXM6Mw==.jpg';
import image4 from './../assets/ZmlsbXM6NA==.jpeg';
import image5 from './../assets/ZmlsbXM6NQ==.jpeg';
import image6 from './../assets/ZmlsbXM6Ng==.jpg';




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
    image3,
    image4,
    image5,
    image6
   
  ];

  

  return (
    <>
    <div className={style.AllFilm}>
        <ul>
            {data.allFilms.films.map((item, index) => {
             
                return (
                <div>
                    <li key={item.id}>
                        <img key={index} src={imageArray[index]} />
                         <h3>{item.title}</h3>
                        <span >{item.releaseDate.slice(0, 4)}</span>
                        <button  onClick={() => openModal(item.id)}>View Details</button>
                    </li>
                    
                  </div>
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