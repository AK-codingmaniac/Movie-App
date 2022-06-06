import React from "react";

const Movielist = (props) => {
     const favouritecomponent = props.favouritecomponent;
    return (
        <>
            {(props.movies || []).map((movie, index) => (
                <div className='image-container d-flex justify-content-start m-3'>
                    <img src={movie.Poster} alt='movie'></img>
                    <div onClick={()=>props.handleFavouritesClick(movie)} className="overlay d-flex align-items-center justify-content-center">
                        <favouritecomponent/>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Movielist;