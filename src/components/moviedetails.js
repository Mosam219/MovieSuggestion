import axios from "axios";
import React, { useEffect } from "react";
import { generatePath, useParams } from "react-router-dom";

import "../styles/moviedetails.css";
const API_BASE_URL = "https://www.omdbapi.com";

export default function MovieDetails() {
  let { imdbID } = useParams();

  // https://www.omdbapi.com/?i=tt0499549&apikey=aa660442

  const [isLoading, setIsLoading] = React.useState(false);
  const [name, setName] = React.useState("");
  const [year, setYear] = React.useState("");
  const [released, setReleased] = React.useState("");
  const [genre, setGenre] = React.useState("");
  const [director, setDirector] = React.useState("");
  const [writer, setWriter] = React.useState("");
  const [awards, setAwards] = React.useState("");
  const [plot, setPlot] = React.useState("");
  const [imdbRating, setImdbRating] = React.useState("");
  const [boxOffice, setBoxOffice] = React.useState("");
  const [poster, setPoster] = React.useState("");

  const [popUpShow, setPopUpShow] = React.useState(false);

  const copyMovieLink = () => {
    setPopUpShow(true);
    navigator.clipboard.writeText(window.location.href);
    setTimeout(() => {
      setPopUpShow(false);
    }, 2000);
  };

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      console.log(imdbID);
      let response = await axios.get(
        API_BASE_URL + "/?i=" + imdbID + "&apikey=aa660442"
      );
      console.log(response.data);
      setName(response.data.Title);
      setYear(response.data.Year);
      setReleased(response.data.Released);
      setGenre(response.data.Genre);
      setDirector(response.data.Director);
      setWriter(response.data.Writer);
      setAwards(response.data.Awards);
      setPlot(response.data.Plot);
      setImdbRating(response.data.imdbRating);
      setBoxOffice(response.data.BoxOffice);
      setPoster(response.data.Poster);
      setIsLoading(false);
    };
    getData();
  }, []);

  return (
    <div className="movieDetail">
      {isLoading && (
        <div className="loader">
          <div className="set1">
            <div className="ball"></div>
            <div className="ball"></div>
          </div>
          <div className="set2">
            <div className="ball"></div>
            <div className="ball"></div>
          </div>
        </div>
      )}
      {popUpShow && <div className="popup">Movie Link copied to clipboard</div>}
      {!isLoading && (
        <>
          <div className="shareBtn" onClick={copyMovieLink}>
            Copy Movie Link
          </div>
          <img src={poster} className="poster" />
          <div className="details">
            {/* <h1>Title: {name}</h1>
                    <p>About: {plot}</p>
                    <p>Year: {year}</p>
                    <p>Released: {released}</p>
                    <p>Genre: {genre}</p>
                    <p>Director: {director}</p>
                    <p>writer: {writer}</p>
                    <p>Awards: {awards}</p>
                    <p>BoxOffice: {boxOffice}</p>
                    <h3>IMDB Rating: {imdbRating}/10</h3> */}
            <table>
              <tr>
                <th>Title:</th>
                <th>{name}</th>
              </tr>
              <tr>
                <th>About:</th>
                <th>{plot}</th>
              </tr>
              <tr>
                <th>Year:</th>
                <th>{year}</th>
              </tr>
              <tr>
                <th>Released:</th>
                <th>{released}</th>
              </tr>
              <tr>
                <th>Genre:</th>
                <th>{genre}</th>
              </tr>
              <tr>
                <th>Director:</th>
                <th>{director}</th>
              </tr>
              <tr>
                <th>writer:</th>
                <th>{writer}</th>
              </tr>
              <tr>
                <th>Awards:</th>
                <th>{awards}</th>
              </tr>
              <tr>
                <th>BoxOffice:</th>
                <th>{boxOffice}</th>
              </tr>
              <tr>
                <th>IMDB Rating:</th>
                <th>{imdbRating}/10</th>
              </tr>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
