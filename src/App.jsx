import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Home from "./pages/Home"
import Album1 from "./pages/Album1"
import Album2 from "./pages/Album2"
import Album3 from "./pages/Album3"
import ScrollToTop from "./components/ScrollToTop"


function App() {
  return (
    <>
    <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/album1" element={<Album1/>}/>
          <Route path="/album2" element={<Album2/>}/>
          <Route path="/album3" element={<Album3/>}/>
        </Routes>
     <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
