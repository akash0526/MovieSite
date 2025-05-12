import { fetchTrending } from "../utils/api";
fetchTrending()
.then(data=>console.log(data.results))
.catch(error=>console.error("API Error :" ,error));