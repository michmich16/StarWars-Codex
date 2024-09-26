import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';
import { singleFilm } from '../../singleFilm';

// const filmList = [
//   { id: 1, title: 'Film 1', description: 'Description of Film 1' },
//   { id: 2, title: 'Film 2', description: 'Description of Film 2' },
//   { id: 3, title: 'Film 3', description: 'Description of Film 3' },
// ];




const ModalPage = () => {
  const { id } = useParams(); 
  console.log(id);
  
  const { data, isLoading, error } = useQuery({
    queryKey: ["singleFilm"],
    queryFn: async () =>
      request(
        "https://swapi-graphql.netlify.app/.netlify/functions/index",
        singleFilm,
        { filmId: id }
      ),
  });
  
  if (isLoading) {
    return <div>Loading......</div>;
  }
  
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  console.log(data);




  // const navigate = useNavigate();

  // const film = filmList.find((film) => film.id === parseInt(id));

  // if (!film) {
  //   return <div>Film not found</div>;
  // }

   const closeModal = () => {
     navigate("/"); 
   };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{data.film.title}</h2>
        <p>{data.film.openingCrawl}</p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default ModalPage;
