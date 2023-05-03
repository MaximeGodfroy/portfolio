import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Accueil from './pages/Accueil';
import MesProjets from './pages/MesProjets';
import MonProjet from './pages/MonProjet';
import Contact from './pages/Contact';
import Error404 from './pages/Error404';
import Footer from './components/Footer';


function App() {

    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/portfolio' element={<Accueil />} />
                <Route path='/portfolio/mes-projets' element={<MesProjets />} />
                <Route path='/portfolio/mes-projets/:id' element={<MonProjet />} errorElement={<Error404 />} />
                <Route path='/portfolio/contact' element={<Contact />} />
                <Route path='/portfolio*' element={<Error404 />} />
                <Route path='/*' element={<Error404 />} />
            </Routes>
            <Footer />   
        </Router>
    );
}

export default App;
