import Image from "next/image";
// import Link from "next/link";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";


const MoviePage = async ({ params }) => {
   const movieId = params.id

   // get movie in movie details page 
   const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`)
   const movie = await res.json();

   return (
      <>
         <div className='w-full'>
            <div className='p-4 md:pt-8 flex flex-col md:flex-row item-center content-center 
         max-w-5xl mx-auto md:space-x-6 '>
               {/* <h1>Movie : {movie.title || movie.name}</h1> */}

               <Image
                  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path
                     }`}
                  width={500}
                  height={300}
                  alt="movie image"
                  className="rounded-lg"
                  // placeholder="blur"
                  // blurDataURL=""
                  style={{ maxWidth: "100%", height: "100%" }}
               ></Image>
               <div className="p-2">
                  <h2 className='font-bold text-xl mb-3'>{movie.title || movie.name}</h2>

                  <p className='mb-3 text-lg'>
                     <span className="font-semibold mr-1">OverView : </span>
                     {movie.overview}
                  </p>

                  <p className="p-2">
                     <span className="font-semibold mr-1">Release Date : </span>
                     {movie.first_air_date || movie.release_date}
                  </p>

                  <p className="flex items-center p-2">
                     <span className="font-semibold mr-1">Rating : </span>
                     <AiOutlineHeart className="text-red-500 ml-3 mr-1" /> {movie.vote_count}{" "}
                  </p>

                  <p className=" items-center p-2">
                     <span className="font-semibold mr-1">Description : </span>
                  {movie.overview}
                  </p>
               </div>
            </div>
         </div>
      </>
   )
}

export default MoviePage