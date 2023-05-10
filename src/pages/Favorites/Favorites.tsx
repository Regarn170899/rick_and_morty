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
      <div>
        <img
          className={styles.favoriteLogoContainer}
          src={FavoritesLogo}
          alt="Favorite logo"
        />
      </div>
      <Swiper
        navigation={true}
        spaceBetween={-40}
        modules={[Navigation]}
        className={styles.swiper}
        breakpoints={{
          1100: {
            // width: 576,
            slidesPerView: 3,
          },
          800: {
            // width: 576,
            slidesPerView: 2,
          },
          768: {
            // width: 768,
            slidesPerView: 1,
          },
        }}
      >
        {characters.map((char: RMCharacter) => {
          return (
            <SwiperSlide key={char.id}>
              <CharacterCard char={char} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Favorites;
