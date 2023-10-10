
import './App.css'

// 1 - config react router
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom"

//Components
import Navbar from './components/Navbar'
import SearchForm from './components/SearchForm'

// import pages
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Info from './pages/Info'
import NotFound from './pages/NotFound'
import Search from './pages/Search'



function App() {


  return (
    <>
      <div>
        <h1>React-Router</h1>
        <BrowserRouter>
        {/* 2 - Link com react router*/}
        <Navbar />
        {/* 9 - Search*/}
          <SearchForm />
          <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/About' element={<About />} />
           {/* 4 - Rota dinâmica*/}
           <Route path='/products/:id' element={<Product />} />
           {/* 6 - nested router */}
           <Route path='/products/:id/info' element={<Info />} />
           {/* 9 - Search */}
           <Route path='/search' element={<Search />} />
           {/* 10 - redirect */}
           <Route path='/company' element={<Navigate to="/About" />} />
           {/* 7 No match Router (404) */}
           <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>

        </div>      
    </>
  )
}

export default App
