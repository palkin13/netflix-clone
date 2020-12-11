import React from "react";
import Row from "./components/Row";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import requests from "./requests";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* NAVBAR */}
      <Nav />
      {/* BANNER */}
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchedActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchedComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchedHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchedRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
