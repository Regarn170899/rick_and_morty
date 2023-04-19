import React, {useEffect} from 'react';
import styles from "./Home.module.scss"
import {useAppDispatch, useAppSelector} from "@store/hooks";
import {getCharacters, selectPage, setPage} from "@store/slices/charactersSlice";
import CharactersCard from "@components/CharacterCard/CharactersCard";




const Home = () => {
    const page =useAppSelector(selectPage);
    const dispatch=useAppDispatch()
    const handleMoreChars=()=>{
       dispatch(setPage(page+1));
    }

    useEffect(()=>{
        dispatch(getCharacters(page))
    },[dispatch,page])

    return (
        <div className={styles.homeContainer}>
            <div className={styles.homeCardContainer}>
                <CharactersCard />
            </div>
            <div className={styles.homeBtnContainer}>
                <button  onClick={(e)=>handleMoreChars()} className={styles.btnShowMore}>Show more</button>
            </div>

        </div>
    );
};

export default Home;