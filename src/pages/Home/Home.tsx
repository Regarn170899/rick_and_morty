import React, { useEffect } from "react";
import styles from "./Home.module.scss";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  getCharacters,
  selectCharacters,
  selectPage,
  setPage,
} from "@store/slices/charactersSlice";
import CharacterCard from "@components/CharacterCard/CharacterCard";
import { RMCharacter } from "@customTypes/index";

const Home = () => {
  const page = useAppSelector(selectPage);
  const characters = useAppSelector(selectCharacters);
  const dispatch = useAppDispatch();

  const handleMoreChars = () => {
    dispatch(setPage(page + 1));
  };

  useEffect(() => {
    dispatch(getCharacters(page));
  }, [dispatch, page]);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeCardContainer}>
        {characters.map((char: RMCharacter) => {
          return <CharacterCard key={char.id} char={char} />;
        })}
      </div>
      <div className={styles.homeBtnContainer}>
        <button
          onClick={(e) => handleMoreChars()}
          className={styles.btnShowMore}
        >
          Show more
        </button>
      </div>
    </div>
  );
};

export default Home;
