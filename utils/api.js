const API_KEY = import.meta.env.VITE_TMDB_KEY;

const BASE_URL = "https://api.themoviedb.org/3";

export const fetchTrending = async() =>{
    try{
    const url = `${BASE_URL}/trending/all/week?api_key=${API_KEY}`
    console.log("Fetching URL:", url);
    const response = await fetch(url);
    console.log("HTTP Status:", response.status);
    const data= response.json();
    return data;
    }
    catch(error){
            console.log("Full Error :",error);
        throw error;
    }


}