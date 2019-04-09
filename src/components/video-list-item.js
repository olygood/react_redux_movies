import React from 'react'
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/w500/"
const VideoListItem = ({movie})=> {
    console.log(movie);
    return <li>
        <h2> {movie.title}</h2>
        <hr />
        <img height="100px" width="100px" alt="images_themoviedb.org"src ={`${IMAGE_BASE_URL}${movie.backdrop_path}`}/>

        
        </li>
    
}
export default VideoListItem;
