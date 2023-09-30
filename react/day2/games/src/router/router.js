import { Route, Routes } from "react-router-dom";
import Home from '../pages/home';
import About from '../pages/about';
import Blog from '../pages/blog';
import Contact from '../pages/contact';
import Game from '../pages/game';
import Notf from "../pages/not_found";

export default function Routers(){
    return(
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/game' element={<Game/>} />
          <Route path='/blog/:id' element={<Blog/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact-us' element={<Contact/>}/>
          <Route path='*' element={<Notf/>}/>
        </Routes> 
    );

}