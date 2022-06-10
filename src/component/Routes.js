import { Route,Routes } from "react-router-dom"
import { AddMovies } from "./addMovies/addMovies"

import { Footer } from "./footer/Footer"
import { Navbar } from "./Navbar/navbar"
import {ShowMovies} from "./ShowMovies/showMovies"



export const Routess = ()=>{
    return<>
<Navbar/>
    <Routes>
        <Route path="/addmovies" element={<AddMovies/>}/>
        <Route path="/" element={<ShowMovies/>}/>
    </Routes>
    <Footer/>

    </>
}