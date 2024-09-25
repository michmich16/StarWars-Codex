import { useQuery } from "@tanstack/react-query";
import React from "react";
import { request } from "graphql-request";
import { allFilms } from "../allFilms";
import { Link } from "react-router-dom";
import style from './Film.module.scss';
import { useState } from 'react';
import Modal from "../components/Modal/Modal";

export const Films = () => {
    // Modal start
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

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
                    <li onClick={() => setModalOpen(true)} to={`search/${item.id}`} key={item.title}>
                        {item.title}
                    
                        <span >{item.releaseDate.slice(0, 4)}</span>
                    </li>
                );
            })}
      </ul>
    </div>
    <div>
      
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2></h2>
        <p>Modal Content</p>
      </Modal>
    </div>
    </>
  );
};