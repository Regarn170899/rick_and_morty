import React, {MouseEventHandler} from 'react';
import styles from "./CharactersCard.module.scss";
import {useAppDispatch, useAppSelector} from "@store/hooks";
import {selectCharacters, setCurrentChar, updateFavorites} from "@store/slices/charactersSlice";
import {arrShot} from "@constants/index";
import {addCharactersInLS} from "@utils/index";
import {RMCharacter} from "@customTypes/index";
import { ReactComponent as TransparentStar } from '@assets/img/Home/FavoritesFalse.svg'
import { ReactComponent as ColoredStar } from '@assets/img/Home/FavoritesTrue.svg'
import { ReactComponent as SpaceGun } from '@assets/img/CharCard/space_gun.svg'
import { Link } from "react-router-dom";

const CharactersCard = () => {

    const characters = useAppSelector(selectCharacters);

    const dispatch=useAppDispatch()
    const handelClickFav=(char:RMCharacter)=>{
        addCharactersInLS(char);
        dispatch(updateFavorites(char));
    }
    const handelSetSingleChar=(char:RMCharacter)=>(e:any)=>{
        dispatch(setCurrentChar(char))
    }

    return (
        <>
            {characters.map((char:RMCharacter)=>{
                return(
                        <div key={char.id} className={styles.charCard}>
                            <div  onClick={(e)=> {
                                e.stopPropagation();
                                handelClickFav(char)
                            }} className={styles.favorite}>{char.isFavorite?<ColoredStar/>: <TransparentStar/>}</div>
                            <Link to={`${char.id}`} key={char.id} onClick={handelSetSingleChar(char)} >
                                <img className={styles.charImage} src={char.image} alt="character image"/>
                            </Link>
                            <p className={styles.charCardText}>Name: {char.name}</p>
                            <p className={styles.charCardText}>Status: {char.status}</p>
                            <div className={styles.cardGunContainer}>
                                <div className={styles.spaceGun} ><SpaceGun/></div>
                                {arrShot.map((shot:any)=>{
                                    return(
                                        <div className={styles.shot}>{shot}</div>)
                                })}
                            </div>
                        </div>

                )

            })}

        </>
    );
};

export default CharactersCard;