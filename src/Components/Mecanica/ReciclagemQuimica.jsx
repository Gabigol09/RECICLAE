import React from 'react';
import './ReciclagemQuimica.css';

const ReciclagemQuimica = () => {
  return (
    <div className="reciclagem-container">
      <header className="reciclagem-header">
        <h1>O que é Reciclagem Química?</h1>
        <p className="reciclagem-subtitle">
          Descubra como a reciclagem química pode transformar resíduos em novos materiais.
        </p>
      </header>

      <main className="reciclagem-content">
        <section className="reciclagem-section">
          <h2>Definição</h2>
          <p>
            A reciclagem química é um processo que transforma resíduos plásticos em
            novos produtos químicos ou combustíveis por meio de reações químicas, como
            pirólise, gasificação e despolimerização. Este método quebra as cadeias
            moleculares dos materiais, permitindo que sejam reaproveitados de forma
            mais eficiente.
          </p>
        </section>

        <section className="reciclagem-section">
          <h2>Como Funciona?</h2>
          <p>
            Os resíduos plásticos passam por tratamentos químicos que os transformam em
            matérias-primas básicas. Esses materiais podem ser reutilizados em processos
            industriais, reduzindo a necessidade de recursos naturais e o impacto
            ambiental causado pelos plásticos descartáveis.
          </p>
        </section>

        <section className="reciclagem-section">
          <h2>Benefícios</h2>
          <ul>
            <li>Redução significativa do lixo plástico em aterros.</li>
            <li>Produção de combustíveis e novos produtos químicos.</li>
            <li>Possibilidade de reciclar plásticos que não são recicláveis mecanicamente.</li>
            <li>Contribuição para uma economia circular sustentável.</li>
          </ul>
        </section>

        <section className="reciclagem-section">
          <h2>Curiosidade</h2>
          <p>
            Sabia que alguns processos de reciclagem química podem transformar plásticos
            em óleo combustível, substituindo o uso de combustíveis fósseis?
          </p>
        </section>
      </main>

      <footer className="reciclagem-footer">
        <a href="/" className="btn dark-btn">Voltar para o Início</a>
      </footer>
    </div>
  );
};

export default ReciclagemQuimica;
