import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Banner Principal */}
      <section className="banner">
        <div className="banner-content">
          <div className="banner-text">
            <h1 className="banner-title">
              Bem-vindo ao IaDevOps
            </h1>
            <p className="banner-subtitle">
              Plataforma inteligente para automatização e otimização de processos DevOps
            </p>
            <div className="banner-actions">
              <button className="btn btn-primary">
                Começar Agora
              </button>
              <button className="btn btn-secondary">
                Saiba Mais
              </button>
            </div>
          </div>
          <div className="banner-image">
            <img 
              src="/assets/banner-hero.svg" 
              alt="IaDevOps Platform" 
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Seção de Recursos */}
      <section className="features">
        <div className="container">
          <h2>Principais Recursos</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Automação Inteligente</h3>
              <p>IA para otimizar seus pipelines de CI/CD</p>
            </div>
            <div className="feature-card">
              <h3>Monitoramento</h3>
              <p>Visibilidade completa de sua infraestrutura</p>
            </div>
            <div className="feature-card">
              <h3>Integração</h3>
              <p>Conecte todas suas ferramentas DevOps</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;