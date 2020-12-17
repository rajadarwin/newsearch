import React from 'react';
import BannerGenre from './BannerGenre';
import requests from './requests';
import '../../App.css';
import RowGenre from './RowGenre';
import Carousel from "react-elastic-carousel";
import Row from './Row';
import { Link } from 'react-router-dom';

export default function Drama() {
  return (
    <div className='app'>
      <h1 className='home'>Drama</h1>
    <BannerGenre fetchUrl={requests.fetchDramaMovies}/>
    <Row title='Drama' fetchUrl={requests.fetchDramaMovies} isLargeRow />
    <RowGenre title='Drama' start='0' end ='4' fetchUrl={requests.fetchDramaMovies} isLargeRow />
    <RowGenre start='5' end ='9' fetchUrl={requests.fetchDramaMovies} isLargeRow />
    <RowGenre start='10' end ='14' fetchUrl={requests.fetchDramaMovies} isLargeRow />
    <RowGenre start='15' end ='19' fetchUrl={requests.fetchDramaMovies} isLargeRow />
    </div>
  );
}

