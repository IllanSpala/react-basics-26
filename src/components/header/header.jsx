import "./header.css";

export function Header() {
  return (
    <header className="header">
      <div className="container">
        <h2 className="logo">MeuSite</h2>

        <nav>
          <ul className="nav-list">
            <li><a href="#">Home</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;