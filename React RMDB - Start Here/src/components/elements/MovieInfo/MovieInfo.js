import React from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../../../config';
import FontAwesome from 'react-fontawesome';
import MovieThumb from '../MovieThumb/MovieThumb';
import './MovieInfo.css';

const MovieInfo = (props) => {
    return (
        <div className="rmdb-movieinfo"
            style={{
                background: props.movie.backdrop_path ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.movie.backdrop_path}')` : '#000'
            }}
        >
            <div className="rmdb-movieinfo-content">
                <div className="rmdb-movieinfo-thumb">
                    <MovieThumb
                        image={props.movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${props.movie.poster_path}` : './image/no_image.jpg'}
                        clickable={false}
                    />
                </div>
                <div className="rmdb-movieinfo-text">
                    <h1>{props.movie.title}</h1>
                    <h3>PLOT</h3>
                    <p>{props.movie.overview}</p>
                    <h3>IMDB RATING</h3>
                    <div className="rmdb-rating">
                        <meter min="0" max="100" optimum="100" low="40" high="70" value={props.movie.vote_average * 10}></meter>
                        <p className="rmdb-score">{props.movie.vote_average}</p>
                    </div>
                    {props.directors.length > 1 ? <h3>DIRECTORS</h3> : <h3>DIRECTOR</h3>}
                    {props.directors.map( (element, i) => {
                        return <p key={i} className="rmdb-director">{element.name}</p>
                    })}

                    {/* custom code */}
                    <div className="btn-group">
                        <button className="want-to"><FontAwesome className="fa-plus" name="plus" size="1x" /> Want to See</button>
                        <span className="btn-margin"></span>
                        <button className="not-interested"><FontAwesome className="fa-times" name="times" size="1x" /> Not Interested</button>
                        <span className="btn-margin"></span>
                        <button className="rate"><FontAwesome className="fa-star" name="star" size="1x" /> Rate</button>
                    </div>
                    {/* end custom code */}
                </div>
                <FontAwesome className="fa-film" name="film" size="5x" />
            </div>
        </div>
    )
}

export default MovieInfo;