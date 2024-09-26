import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';
import { singleFilm } from '../../singleFilm';


const ModalPage = ({ film, handleClose }) => {
  if (!film) return null; 

  console.log(film);
  
  const { id } = useParams(); 

  
  const { data, isLoading, error } = useQuery({
    queryKey: ["singleFilm"],
    queryFn: async () =>
      request(
        "https://swapi-graphql.netlify.app/.netlify/functions/index",
        singleFilm,
        { filmId: film }
      ),
  });
  
  if (isLoading) {
    return <div>Loading......</div>;
  }
  
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  console.log(data);



  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{data.film.title}</h2>
        <p>{data.film.openingCrawl}</p>
        <button onClick={handleClose}>Close</button> 
      </div>
    </div>
  );
};

export default ModalPage;