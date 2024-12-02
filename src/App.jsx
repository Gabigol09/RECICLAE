import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Conheca from './Components/Conheca/conheca';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Tipos from './Components/Tipos/Tipos';
import IA from './Components/IA/IA';
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
                <IA />
                <Title subTitle="Inteligencia Artifical e Reciclagem" title="Como Seria o Mundo Sem Reciclagem Segundo a I.A" />
                <Tipos />
                <Title subTitle="conheça" title="TIPOS DE RECICLAGEM" />
                <Conheca />
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