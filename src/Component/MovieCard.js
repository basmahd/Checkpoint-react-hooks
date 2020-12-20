import React from 'react'
import {Card, CardDeck} from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
import PropTypes from 'prop-types';
import './Moviecard.css';


function MovieCard  ({movie}) {
 
 


  return (
    <div>
          <CardDeck className='mycard'>
  <Card>
    <Card.Img className= 'image' variant="top" src={movie.PosterUrl} />
    <Card.Body className='Carddesc'>
  <Card.Title className='title'> {movie.Title}</Card.Title>
  <Card.Text className='description'> {movie.Description} </Card.Text>
    </Card.Body>
    <Card.Footer style={{display: "flex",justifyContent:"center"}} role="img" aria-label="Star" >
    
    <ReactStars {...movie.rate} classNames="rating" />

          
        
        
    </Card.Footer>
  </Card>
  </CardDeck>
    </div>
  );
  }

      
      MovieCard.propTypes = {
        Title: PropTypes.string,
        Description: PropTypes.string,
        PosterUrl:PropTypes.string,
        rate: PropTypes.object,
    }


export default MovieCard;
