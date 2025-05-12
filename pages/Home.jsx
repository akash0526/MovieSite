 import { fetchTrending } from "../utils/api";
 import { useState,useEffect } from "react";
 import MediaCard from "../components/MediaCard/MediaCard";
import './Home.css'

 const Home = ()=>{
    const [media, setMedia] = useState([]);
    const[loading, setLoding]= useState(true);
    const[error,setError] = useState(null);
    

    useEffect(()=>{
        console.log(import.meta.env.VITE_TMDB_KEY); 
                const loadData = async()=>{
                    try{
                        const data= await fetchTrending();
                        setMedia(data.results);

                    }
                    catch(err){
                        setError(err.message)
                    }
                    finally{
                        setLoding(false)
                    }
                }
                loadData();
        }
        ,[])
        if(loading) return(<div>loading...</div>)
            if(error) return(<div>Failed To fetch Data</div>)
    return(
        <div className="media-grid">
            {media.map(item=>{
                return <MediaCard key={item.id} item={item}/>
            })}
        </div>
    );
            
}
export default Home;