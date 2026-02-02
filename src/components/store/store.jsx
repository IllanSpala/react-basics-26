import { useState, useEffect } from 'react';
import './store.css';

function Store() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => console.error("Erro:", err));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (indexToRemove) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'all' || product.category === category;
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', ...new Set(products.map((p) => p.category))];

  const totalCart = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="container">
      <header className="header">
        <div className="logo"><span className="logo-badge">React</span> E-Mart</div>
        <div className="filters">
          <input
            type="text"
            placeholder="Buscar produtos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="category-select">
            <option value="all">Todos</option>
            {categories.filter(c => c !== 'all').map((cat) => (
              <option key={cat} value={cat}>{cat.toUpperCase()}</option>
            ))}
          </select>
        </div>
      </header>

      <main>
        {loading ? <p>Carregando...</p> : (
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="card">
                <div className="image-container">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="card-body">
                  <h3 title={product.title}>{product.title}</h3>
                  <span className="price">R$ {product.price.toFixed(2)}</span>
                  <button className="btn-add" onClick={() => addToCart(product)}>
                    Adicionar ao carrinho
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <section className="cart-section">
        <h2>Seu Carrinho ({cart.length} itens)</h2>
        
        {cart.length === 0 ? (
          <p className="empty-cart">Seu carrinho está vazio.</p>
        ) : (
          <div className="cart-list">
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.title} />
                <div className="cart-info">
                  <h4>{item.title}</h4>
                  <span>R$ {item.price.toFixed(2)}</span>
                </div>
                <button 
                  className="btn-remove" 
                  onClick={() => removeFromCart(index)}
                >
                  Remover
                </button>
              </div>
            ))}
            
            <div className="cart-total">
              <h3>Total: R$ {totalCart.toFixed(2)}</h3>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default Store;