import { useState, useEffect } from "react";

export const useFetch = (apiPath, queryTerm="") => {
    const [data, setData] = useState([]);
        
    //const url = `https://api.themoviedb.org/3/${apiPath}?language=en-US&page=1&query=${queryTerm}`
    const url = 'https://670b075cac6860a6c2cb0f06.mockapi.io/movie'

    useEffect(() => {
        async function fetchMovies(){
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${process.env.TMDB_READ_ACCESS_TOKEN}`
                }
            };
            //const response = await fetch(url, options);
            const response = await fetch(url);
            const json = await response.json();
            setData(json.results);
        }
        fetchMovies();
    }, [url])

    return { data }
}