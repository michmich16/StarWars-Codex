import React, { useEffect } from 'react';
import style from './CharacterModal.module.scss';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';
import { singleCharacter } from '../../singleCharacter';

export const CharacterModal = ({ person, handleClose }) => {
  if (!person) return null;

  const { id } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ['singleCharacter'],
    queryFn: async () =>
      request(
        'https://swapi-graphql.netlify.app/.netlify/functions/index',
        singleCharacter,
        { personId: person }
      ),
  });

  useEffect(() => {
    document.body.classList.add(style.blurBackground);
    return () => {
      document.body.classList.remove(style.blurBackground);
    };
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data || !data.person) {
    return <p>No character data found</p>;
  }

  return (
    <div className={style.modalStyle}>
      <div className={style.modalContent}>
        <h2>{data.person.name}</h2>
        <p>Gender: {data.person.gender}</p>
        <p>Year of birth: {data.person.birthYear}</p>
        <p>Homeworld: {data.person.homeworld.name}</p>
        <p>Skin Color: {data.person.skinColor}</p>
        <p>Hair Color: {data.person.hairColor}</p>
        <p>Eye Color: {data.person.eyeColor}</p>
        <p>Height: {data.person.height} cm</p>
        <p>Mass: {data.person.mass} kg</p>
        <button className={style.buttonStyle} onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};
