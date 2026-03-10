import "./css/App.css";
import Favorites from "./pages/Favorite";
import Home from "./pages/Home"
import {Routes, Route} from "react-router-dom"
import NavBar from "./components/navbar";
import { MovieProvider } from "./contexts/MovieContext";
// import {MovieCard} from "./components/MovieCard"
function App() {
// const movieNumber = 2;
//   return (
//   <>
//        #1 way to solve the conditional rendering 
//        {movieNumber === 1 ?(<MovieCard movie = {{title : "tim's Film", release_date: "2024-06-01"}} />) :
//        (<MovieCard movie = {{title : "joes Film", release_date: "2024-05-01"}} />)} */}

//        {/* #2 way to solve the conditional rendering
//        {movieNumber === 1 && <MovieCard movie = {{title : "tim's Film", release_date: "2024-06-01"}} />}
//         </>
//   ) 
return ( 
    <MovieProvider>

    <NavBar />
    <main className = "main-content">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
        </Routes>
    </main>
    </MovieProvider>
);
}


export default App;
