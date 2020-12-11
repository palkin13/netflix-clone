import React , {useState, useEffect} from "react";
import requests from "../requests";
import axios from "../axios";
import './Banner.css';

const base_url = "https://image.tmdb.org/t/p/original/";

function Banner() {

  const [movie , setMovie] = useState([]); //  For random movie that will come in banner

  useEffect(() => {
   async function fetchData(){
   const request = await axios.get(requests.fetchNetflixOriginals);
  //  console.log(request.data.results); 
   // [m1 , m2 , m3 , .........]
   // As it will give 20 movies but we want 1 random movie in our banner thus...
   setMovie(
     request.data.results[ 
     Math.floor(Math.random() * request.data.results.length - 1)
     ] 
     );
    }
   fetchData();
  },[]);
  
  console.log(movie);

  
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

return (
  <header className="banner"
         style={{
           backgroundSize:"cover" ,
           backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`,
           backgroundPosition: "center center",
         }}
  >  { /*<<<<< Background Image >>>>>*/}
    <div className = "banner_contents">
    { /* title */ }
    <h1 className="banner_title">
      {movie?.title || movie?.name || movie?.original_name}
    </h1>
    { /* div with 2 buttons */ }
    <div className="banner_buttons">
      <button className="banner_button">Play</button>
      <button className="banner_button">My List</button>
    </div>
        

    { /* description */ }
    <h1 className="banner_description">{movie?.overview}
      {truncate(movie?.overview , 150)}
    </h1>
   </div>
   <div className="banner-fadeBottom">

   </div>  

  

  </header>
)
}
export default Banner;