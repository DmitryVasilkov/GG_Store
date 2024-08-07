// src/hooks/useGames.js
import { useDispatch, useSelector } from 'react-redux';
import { filterGames } from '../store/slice/gamesSlice';

const useGames = () => {
  const dispatch = useDispatch();
  const { games, sales, filter } = useSelector((state) => state.games);

  const handleFilterGames = (query) => dispatch(filterGames(query));

  return {
    games, sales, filter, handleFilterGames
  };
};

export default useGames;
