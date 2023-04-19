import React from 'react';
import styles from "./CharactersCard.module.scss";
import {useAppSelector} from "@store/hooks";
import {selectCharacters} from "@store/slices/charactersSlice";
import {arrShot} from "@constants/index";

const CharactersCard = () => {

    const characters = useAppSelector(selectCharacters);
    return (
        <>
            {characters.map((char:any)=>{
                return(
                    <div key={char.id} className={styles.charCard} >
                        <img className={styles.charImage} src={char.image} alt=""/>
                        <p className={styles.charCardText}>Name: {char.name}</p>
                        <p className={styles.charCardText}>Status: {char.status}</p>
                        <div className={styles.cardGanContainer}>
                            <div className={styles.spaceGan} ></div>
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