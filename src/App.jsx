import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Testimonials from './Components/Testimonials/Testimonials';
import Footer from './Components/Footer/Footer';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
import Jogo from './Components/Jogo/Jogo'; 
import ReciclagemMecanica from './Components/Mecanica/ReciclagemMecanica';
import ReciclagemQuimica from './Components/Mecanica/ReciclagemQuimica';
import ReciclagemEnergetica from './Components/Mecanica/ReciclagemEnergetica';

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Rotas com Navbar */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <div className="container">
                <About setPlayState={setPlayState} />
                <Title subTitle="Noticias" title="As Principais Noticias Sobre Reciclagem" />
                <Testimonials />
                <Title subTitle="Inteligencia Artifical e Reciclagem" title="Como Seria o Mundo Sem Reciclagem Segundo a I.A" />
                <Campus />
                <Title subTitle="conheça" title="TIPOS DE RECICLAGEM" />
                <Programs />
                <Footer />
              </div>
              <VideoPlayer playState={playState} setPlayState={setPlayState} />
            </>
          }
        />

        {/* Rota sem Navbar */}
        <Route path="/jogo" element={<Jogo />} />

        {/* Páginas de reciclagem */}
        <Route path="/reciclagem-mecanica" element={<ReciclagemMecanica />} />

        <Route path="/reciclagem-quimica" element={<ReciclagemQuimica />} />

        <Route path="/reciclagem-energetica" element={<ReciclagemEnergetica />} />

      </Routes>
    </Router>
  );
};

export default App;
