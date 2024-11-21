import React from 'react';
import './ReciclagemEnergetica.css';

const ReciclagemEnergetica = () => {
  return (
    <div className="reciclagem-container">
      <header className="reciclagem-header">
        <h1>O que é Reciclagem Energética?</h1>
        <p className="reciclagem-subtitle">
          Saiba como os resíduos podem ser transformados em energia útil para a sociedade.
        </p>
      </header>

      <main className="reciclagem-content">
        <section className="reciclagem-section">
          <h2>Definição</h2>
          <p>
            A reciclagem energética é o processo de conversão de resíduos em energia, como
            eletricidade ou calor, por meio de tecnologias como incineração, pirólise e
            gasificação. Este método aproveita o potencial energético de materiais que não
            podem ser reciclados mecanicamente ou quimicamente.
          </p>
        </section>

        <section className="reciclagem-section">
          <h2>Como Funciona?</h2>
          <p>
            Os resíduos são coletados e classificados. Aqueles que não podem ser reciclados
            diretamente são enviados para instalações de reciclagem energética, onde são
            queimados ou submetidos a processos que geram energia térmica, elétrica ou
            mesmo biocombustíveis.
          </p>
        </section>

        <section className="reciclagem-section">
          <h2>Benefícios</h2>
          <ul>
            <li>Reduz a quantidade de resíduos enviados para aterros sanitários.</li>
            <li>Geração de energia renovável, substituindo combustíveis fósseis.</li>
            <li>Minimiza o impacto ambiental de resíduos não recicláveis.</li>
            <li>Promove a economia circular e a sustentabilidade energética.</li>
          </ul>
        </section>

        <section className="reciclagem-section">
          <h2>Curiosidade</h2>
          <p>
            Sabia que uma tonelada de resíduos pode gerar energia suficiente para abastecer
            uma casa por um mês em algumas tecnologias de reciclagem energética?
          </p>
        </section>
      </main>

      <footer className="reciclagem-footer">
        <a href="/" className="btn dark-btn">Voltar para o Início</a>
      </footer>
    </div>
  );
};

export default ReciclagemEnergetica;
