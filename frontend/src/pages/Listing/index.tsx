import axios from "axios";
import MovieCard from "components/MovieCard";


import Pagination from "components/Pagination";
import { useState, useEffect } from "react";
import { BASE_URL } from "utils/resquest";
import { MoviePage } from "types/movies";


function Listing(){



    const [pageNumber, setPageNumber ] = useState(0);


    useEffect(() => {

        axios.get('http://localhost:9000/movies?size=12&page=1')
            .then(response => {
                const data = response.data as MoviePage ;
                console.log(data);
               setPageNumber(data.number);

            });

    },[]);
    //  FORMA ERRADA

    

    return(

        <>
        <p>{pageNumber}</p>
        <Pagination/>
    <div className="container">
        <div className="row">
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                <MovieCard/>
                </div>

                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                <MovieCard/>
                </div>


                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                <MovieCard/>
                </div>


                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                <MovieCard/>
                </div>


                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                <MovieCard/>
                </div>

                
        </div>

        
     </div>
        
        </>
    );
}

export default Listing;