import React, {useEffect} from 'react';
import {Params, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "@store/hooks";
import {
    changeIsFavoriteCurrentChar,
    getCurrentChar,
    selectCurrentChar,
    updateFavorites
} from "@store/slices/charactersSlice";
import styles from "./SingleCharacter.module.scss";
import {RMCharacter} from "@customTypes/index";
import {addCharactersInLS} from "@utils/index";
import { ReactComponent as TransparentStar } from '@assets/img/Home/FavoritesFalse.svg';
import { ReactComponent as ColoredStar } from '@assets/img/Home/FavoritesTrue.svg';
import SpaceGun  from '@assets/img/singleCharCard/sapceGun.svg';
import Planet  from '@assets/img/singleCharCard/planet.svg';
import Atom  from '@assets/img/singleCharCard/atom.svg';
import Spaceship from '@assets/img/singleCharCard/spaceship.svg';


const SingleCharacter = () => {

    const {id}:Params<string>=useParams()
    const currentChar = useAppSelector(selectCurrentChar);
    const dispatch=useAppDispatch()

    useEffect(()=>{
        if (!currentChar && id){
            dispatch(getCurrentChar(id))
        }
    },[currentChar])
    const handelClickFav=(char:RMCharacter)=>{
        addCharactersInLS(char);
        dispatch(updateFavorites(char));
        dispatch(changeIsFavoriteCurrentChar());
    }
    return (
        <>
        {currentChar && (<div className={styles.singleCharContainer}>
        <div className={styles.singleCharCard}>
            <div onClick={(e) => handelClickFav(currentChar)} className={styles.favorite}>{currentChar.isFavorite ?
                <ColoredStar/> : <TransparentStar/>}</div>
            <img className={styles.singleCharImg} src={currentChar.image} alt="Character image"/>
            <div className={styles.descriptionContainer}>
                <div className={styles.textContainer}>
                    <span className={styles.charName}>Name: {currentChar.name}</span>
                    <span>Status:{currentChar.status}</span>
                    <span>Species:{currentChar.species}</span>
                    <span>Location:{currentChar.location?.name}</span>
                </div>
                <div className={styles.iconContainer}>
                    <img src={SpaceGun} alt="icon image"/>
                    <img src={Atom} alt="icon image"/>
                    <img src={Planet} alt="icon image"/>
                    <img src={Spaceship} alt="icon image"/>
                </div>
            </div>
        </div>
    </div>)
}
        </>
    );
};

export default SingleCharacter;