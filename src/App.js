import React, { useState } from "react";
import Movielist from "./Component/Movielist";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Random } from "react-animated-text";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddMovies from "./Component/AddMovies";
import Search from "./Component/Search";

function App() {
  const [ListOfMovies, setListOfMovies] = useState([
    {
      Title: "Million Ways to die in the west",
      Description:
        "A Million Ways to Die in the West originated as an inside joke between MacFarlane and co-writers Sulkin and Wild, while they were watching Hang 'Em High. The joke evolved into riffing on the idea of how dull, depressing, and dangerous it must have been to live in the Wild West.",
      PosterUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgvPrBka0iLn8snxZ_BXF8qYnlm6RsmUtSQwtpzvcOfYl1ie6G",
      rate: {
        value: 4,
        edit: false,
      },
      id: "2",
      watched: false,
    },
    {
      Title: "Dark Knight",

      Description:
        "Batman est plus que jamais déterminé à éradiquer le crime organisé qui sème la terreur en ville. Epaulé par le lieutenant Jim Gordon et par le procureur de Gotham City, Harvey Dent, Batman voit son champ d'action s'élargir. La collaboration des trois hommes s'avère très efficace et ne tarde pas à porter ses fruits jusqu'à ce qu'un criminel redoutable vienne plonger la ville de Gotham City dans le chaos.",
      PosterUrl: "https://fr.web.img2.acsta.net/medias/nmedia/18/63/97/89/18949761.jpg",
      rate: {
        value: 5,
        edit: false,
      },
      id: "3",
      watched: false,
    },
    {
      Title: "Pirates Caribbean",
      Description:
        "Lorsque le pirate fantôme Davy Jones vient réclamer sa dette de sang à l'excentrique capitaine Jack Sparrow, ce dernier cherche un moyen d'échapper à ce cruel destin qui garantirait la damnation de son âme pour l'éternité. L'astucieux pirate parvient à interrompre le mariage des amis de Jack, Will Turner et Elizabeth Swann.",
      PosterUrl:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSh0arJamf7P2sJw6zz_yyvtDDRvv1QE8kUySIG0ta35nIza5kZ",
      rate: {
        value: 2,
        edit: false,
      },
      id: "5",
      watched: false,
    },
  ]);
  const addMovie = (newMovie) => {
    setListOfMovies([...ListOfMovies, {Title:newMovie.Title, Description:newMovie.Description, PosterUrl:newMovie.PosterUrl, rate:{value:newMovie.rate, edit:false}, id:Math.round(), watched: false},
    ]);
    
  };

  const [search, setSearch] = useState("");
  const searchbytitle = (value) => {
    setSearch(value);
  };
  const [ratefiltring, setRatefiltring] = useState(0);
  const searchbyrate = (value) => {
    setRatefiltring(value);
  };
  const handleRemove = (id) =>{
    setListOfMovies(ListOfMovies.Search((el) => el.id !== id))
    
  }
console.log(ListOfMovies);
  return (
    <div>
      <div className="header">
 
        <FontAwesomeIcon className="icon" icon={faFilm} />
        <h1>
          {" "}
          <Random text="MOVIE APP" />
        </h1>

        <FontAwesomeIcon className="icon" icon={faFilm} />
      </div>
      <div>
        <Search searchbytitle={searchbytitle} searchbyrate={searchbyrate} />
      </div>

      <div className="card" style={{backgroundColor: "#282c34"}}>
        <Movielist
          ListOfMovies={ListOfMovies}
          handleRemove={handleRemove}
          search={search}
          ratefiltring={ratefiltring}
        />
        <div className='ajoutmovie'>
        <AddMovies addMovie={addMovie} />
        </div>
      </div>
    </div>
  );
}

export default App;
