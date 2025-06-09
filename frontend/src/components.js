import React, { useState } from 'react';

// ===== HEADER COMPONENT =====
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bottega-header">
      <div className="header-container">
        {/* Logo - REMPLACEZ PAR VOTRE LOGO */}
        <div className="logo">
          <h1>VOTRE MARQUE</h1>
        </div>

        {/* Navigation principale - PERSONNALISEZ VOS CATÉGORIES */}
        <nav className="main-nav">
          <a href="#new">NEW</a>
          <a href="#women">WOMEN</a>
          <a href="#men">MEN</a>
          <a href="#bags">BAGS</a>
          <a href="#accessories">ACCESSORIES</a>
          <a href="#art-of-living">ART OF LIVING</a>
          <a href="#fragrances">FRAGRANCES</a>
          <a href="#gifts">GIFTS</a>
        </nav>

        {/* Icônes utilitaires */}
        <div className="header-icons">
          <button className="icon-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="21 21l-4.35-4.35"></path>
            </svg>
          </button>
          <button className="icon-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>
          <button className="icon-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
          <button className="icon-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

// ===== HERO SECTION =====
export const Hero = () => {
  return (
    <section className="hero-section">
      {/* ZONE POUR VOTRE IMAGE PRINCIPALE - Remplacez l'URL ci-dessous */}
      <div className="hero-image">
        <img 
          src="/api/placeholder/1920/1080" 
          alt="Votre produit phare"
          className="hero-img"
        />
        <div className="hero-overlay"></div>
      </div>

      {/* Boutons d'action - PERSONNALISEZ LE TEXTE */}
      <div className="hero-cta">
        <button className="cta-button">
          WOMEN'S NEW ARRIVALS
        </button>
        <button className="cta-button">
          MEN'S NEW ARRIVALS
        </button>
      </div>
    </section>
  );
};

// ===== GRILLE DE PRODUITS =====
export const ProductGrid = () => {
  // DONNÉES DE PRODUITS - REMPLACEZ PAR VOS PRODUITS
  const products = [
    {
      id: 1,
      name: "VOTRE PRODUIT 1",
      category: "Sacs",
      image: "/api/placeholder/600/600",
      price: "€1,200"
    },
    {
      id: 2,
      name: "VOTRE PRODUIT 2", 
      category: "Chaussures",
      image: "/api/placeholder/600/600",
      price: "€850"
    },
    {
      id: 3,
      name: "VOTRE PRODUIT 3",
      category: "Vêtements",
      image: "/api/placeholder/600/600",
      price: "€1,450"
    },
    {
      id: 4,
      name: "VOTRE PRODUIT 4",
      category: "Accessoires",
      image: "/api/placeholder/600/600",
      price: "€650"
    },
    {
      id: 5,
      name: "VOTRE PRODUIT 5",
      category: "Maroquinerie",
      image: "/api/placeholder/600/600",
      price: "€2,100"
    },
    {
      id: 6,
      name: "VOTRE PRODUIT 6",
      category: "Bijoux",
      image: "/api/placeholder/600/600",
      price: "€750"
    }
  ];

  return (
    <section className="product-section">
      {/* Section Collections */}
      <div className="collections-grid">
        <div className="collection-item large">
          <img src="/api/placeholder/800/600" alt="Collection principale" />
          <div className="collection-overlay">
            <h3>NOUVELLE COLLECTION</h3>
            <p>Découvrez notre dernière création</p>
          </div>
        </div>
        
        <div className="collection-item">
          <img src="/api/placeholder/400/600" alt="Collection femme" />
          <div className="collection-overlay">
            <h3>FEMME</h3>
          </div>
        </div>
        
        <div className="collection-item">
          <img src="/api/placeholder/400/600" alt="Collection homme" />
          <div className="collection-overlay">
            <h3>HOMME</h3>
          </div>
        </div>
      </div>

      {/* Grille de produits */}
      <div className="product-grid-container">
        <h2 className="section-title">NOS CRÉATIONS</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <div className="product-overlay">
                  <button className="view-product">VOIR LE PRODUIT</button>
                </div>
              </div>
              <div className="product-info">
                <p className="product-category">{product.category}</p>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section artisanat */}
      <div className="craftsmanship-section">
        <div className="craft-content">
          <div className="craft-text">
            <h2>L'ART DE LA CRÉATION</h2>
            <p>Chaque pièce est façonnée avec un savoir-faire traditionnel et une attention méticuleuse aux détails. Notre atelier perpétue l'excellence de la maroquinerie française.</p>
            <button className="craft-cta">DÉCOUVRIR NOTRE SAVOIR-FAIRE</button>
          </div>
          <div className="craft-image">
            <img src="/api/placeholder/600/400" alt="Savoir-faire artisanal" />
          </div>
        </div>
      </div>
    </section>
  );
};

// ===== FOOTER =====
export const Footer = () => {
  return (
    <footer className="bottega-footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>SERVICE CLIENT</h4>
            <ul>
              <li><a href="#contact">Nous contacter</a></li>
              <li><a href="#shipping">Livraison</a></li>
              <li><a href="#returns">Retours</a></li>
              <li><a href="#size-guide">Guide des tailles</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>LA MARQUE</h4>
            <ul>
              <li><a href="#about">À propos</a></li>
              <li><a href="#heritage">Notre histoire</a></li>
              <li><a href="#careers">Carrières</a></li>
              <li><a href="#press">Presse</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>SUIVEZ-NOUS</h4>
            <div className="social-links">
              <a href="#instagram">Instagram</a>
              <a href="#facebook">Facebook</a>
              <a href="#twitter">Twitter</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 VOTRE MARQUE. Tous droits réservés.</p>
          <div className="footer-legal">
            <a href="#privacy">Confidentialité</a>
            <a href="#terms">Conditions</a>
            <a href="#cookies">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};