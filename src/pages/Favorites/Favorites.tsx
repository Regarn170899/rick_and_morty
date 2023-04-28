import React, { useEffect } from "react";
import styles from "./Favorites.module.scss";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  getOnlyFavChars,
  selectOnlyFavoriteChars,
} from "@store/slices/charactersSlice";
import { RMCharacter } from "@customTypes/index";
import CharacterCard from "@components/CharacterCard/CharacterCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./Swiper.css";
import FavoritesLogo from "@assets/img/Favorites/favoritesLogo.svg";
const Favorites = () => {
  const characters = useAppSelector(selectOnlyFavoriteChars);
  const ids = JSON.parse(localStorage.getItem("favCharsIds")!);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getOnlyFavChars(ids));
  }, [dispatch]);

  return (
    <div>
      <div className={styles.favoriteLogoContainer}>
        <img src={FavoritesLogo} alt="Favorite logo" />
      </div>
      <Swiper
        navigation={true}
        slidesPerView={3}
        spaceBetween={-40}
        modules={[Navigation]}
        className={styles.swiper}
      >
        {characters.map((char: RMCharacter) => {
          return (
            <SwiperSlide>
              <CharacterCard char={char} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Favorites;
