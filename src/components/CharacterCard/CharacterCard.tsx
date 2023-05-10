import React from "react";
import styles from "./CharacterCard.module.scss";
import { arrShot } from "@constants/index";
import { RMCharacter } from "@customTypes/index";
import { ReactComponent as TransparentStar } from "@assets/img/Home/FavoritesFalse.svg";
import { ReactComponent as ColoredStar } from "@assets/img/Home/FavoritesTrue.svg";
import { ReactComponent as SpaceGun } from "@assets/img/CharCard/space_gun.svg";
import { Link } from "react-router-dom";
import { addCharactersInLS } from "@utils/index";
import {
  setCurrentChar,
  updateFavOnFavoritesPage,
  updateFavorites,
} from "@store/slices/charactersSlice";
import { useAppDispatch } from "@store/hooks";
interface Prop {
  char: RMCharacter;
}

const CharacterCard = ({ char }: Prop) => {
  const dispatch = useAppDispatch();
  const handelClickFav = (char: RMCharacter) => {
    addCharactersInLS(char);
    dispatch(updateFavorites(char));
    dispatch(updateFavOnFavoritesPage(char));
  };
  const handelSetSingleChar = (char: RMCharacter) => (e: any) => {
    dispatch(setCurrentChar(char));
  };

  return (
    <div key={char.id} className={styles.charCard}>
      <div
        onClick={(e) => {
          e.stopPropagation();
          handelClickFav(char);
        }}
        className={styles.favorite}
      >
        {char.isFavorite ? <ColoredStar /> : <TransparentStar />}
      </div>
      <Link
        to={`/character/${char.id}`}
        key={char.id}
        onClick={handelSetSingleChar(char)}
      >
        <img
          className={styles.charImage}
          src={char.image}
          alt="character image"
        />
      </Link>
      <p className={styles.charCardText}>Name: {char.name}</p>
      <p className={styles.charCardText}>Status: {char.status}</p>
      <div className={styles.cardGunContainer}>
        <div className={styles.spaceGun}>
          <SpaceGun />
        </div>
        {arrShot.map((shot: any, index) => {
          return (
            <div key={index} className={styles.shot}>
              {shot}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CharacterCard;
