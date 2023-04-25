import {useEffect} from "react";

export function useFavoriteChars(){
    useEffect(()=>{
        const LsCharacters =JSON.parse(localStorage.getItem("favCharsIds")!)
        if (LsCharacters){
            return
        }
        localStorage.setItem("favCharsIds",JSON.stringify([]))
    },[])
}