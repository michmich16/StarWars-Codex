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

  if (isLoading) {
    return <p>Loading...</p>;  // Added return
  }
  if (error) {
    return <p>Error: {error.message}</p>;  // Added return
  }

  if (!data || !data.person) {
    return <p>No character data found</p>;  // Check if `data.person` exists
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{data.person.name}</h2>
        <p>{data.person.skinColor}</p>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};
