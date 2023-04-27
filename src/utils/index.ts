import {RMCharacter} from "@customTypes/index";

export const checkIsFavorite=(char:RMCharacter)=>{
    const LsCharacters =JSON.parse(localStorage.getItem("favCharsIds")!)
    if(LsCharacters.includes(char.id)){
        return {
            ...char,
            isFavorite: true
        }
    }
    return {
        ...char,
        isFavorite: false
    }
}

export const setIsFavoriteProp=(results:RMCharacter[])=>{
    return results.map((char: RMCharacter) =>checkIsFavorite(char));
}
export const addCharactersInLS=(char:RMCharacter)=>{
    const LsCharacters =JSON.parse(localStorage.getItem("favCharsIds")!)
    if(LsCharacters.includes(char.id)){
        localStorage.setItem("favCharsIds", JSON.stringify(LsCharacters.filter((id:number)=>id!==char.id)));
        return;
    }
    LsCharacters.push(char.id)
    localStorage.setItem("favCharsIds", JSON.stringify(LsCharacters));

}
