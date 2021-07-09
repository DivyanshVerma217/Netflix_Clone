import React from 'react'
import  "./HomeScreen.css";
import Navbar from '../Navbar';
import Banner from "../Banner"
import Row from "../Row"
import Footer from "../Footer"
import requests from '../Requests';

function HomeScreen() {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Row title = "NETFLIX ORIGINALS" fetchUrl ={requests.fetchNetflixOriginals} isLargeRow/>
            <Row title = "TRENDING NOW" fetchUrl= {requests.fetchTrending}/>
            <Row title = "TOP RATED" fetchUrl= {requests.fetchTopRated}/>
            <Row title = "ACTION MOVIES" fetchUrl= {requests.fetchActionMovies}/>
            <Row title = "HORROR MOVIES" fetchUrl= {requests.fetchHorrorMovies}/>
            <Row title = "ROMANCE MOVIES" fetchUrl= {requests.fetchRomanceMovies}/>
            <Row title = "DOCUMENTARIES" fetchUrl= {requests.fetchDocumentaries}/>
            
            <Footer/>
            
        </div>
    )
}

export default HomeScreen;