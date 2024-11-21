import React from 'react';
import './ReciclagemMecanica.css';

const ReciclagemMecanica = () => {
  return (
    <div className="reciclagem-container">
      <header className="reciclagem-header">
        <h1>O que é Reciclagem Mecânica?</h1>
        <p className="reciclagem-subtitle">
          Entenda como este processo contribui para um planeta mais sustentável.
        </p>
      </header>

      <main className="reciclagem-content">
        <section className="reciclagem-section">
          <h2>Definição</h2>
          <p>
            A reciclagem mecânica é um processo de reaproveitamento de resíduos
            plásticos através de métodos físicos, como separação, lavagem,
            trituração, extrusão e moldagem. Este método preserva a estrutura química
            do plástico e permite sua reutilização em novos produtos.
          </p>
        </section>

        <section className="reciclagem-section">
          <h2>Como Funciona?</h2>
          <p>
            No processo de reciclagem mecânica, os plásticos coletados são separados
            por tipo, limpos para remover impurezas e, em seguida, triturados em
            pequenos pedaços. Esses pedaços podem ser aquecidos e moldados para
            criar novos produtos.
          </p>
        </section>

        <section className="reciclagem-section">
          <h2>Benefícios</h2>
          <ul>
            <li>Redução do desperdício de plástico.</li>
            <li>Economia de recursos naturais, como petróleo.</li>
            <li>Menor impacto ambiental, contribuindo para a sustentabilidade.</li>
            <li>Criação de novos produtos com menor custo de produção.</li>
          </ul>
        </section>

        <section className="reciclagem-section">
          <h2>Curiosidade</h2>
          <p>
            Sabia que grande parte dos plásticos reciclados através do processo
            mecânico é utilizada para fabricar embalagens, móveis e peças
            automotivas?
          </p>
        </section>
      </main>

      <footer className="reciclagem-footer">
        <a href="/" className="btn dark-btn">Voltar para o Início</a>
      </footer>
    </div>
  );
};

export default ReciclagemMecanica;
