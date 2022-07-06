import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Components/pages/home';
import Navbar from "./Components/sections/navbar";


function App() {
  return (
   <>
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />} >
          <Route path='/' element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>

    <Home />
   </>
  );
}

export default App;
