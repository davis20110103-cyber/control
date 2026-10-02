import logo from '../img/logo.png'
import search from '../img/search.png'
import login from '../img/log-in.png'
import '../Header/Header.css'

export default function Header() {
  return (
    <header className="site-header">
      <div className="header_cont">
        <a className="header-logo" href="#">
          <img src={logo} alt="logo" />
        </a>
        <nav className="header-nav">
          <ul>
            <li><a href="#catalog">Каталог</a></li>
            <li><a href="#gallery">Галерея</a></li>
            <li><a href="#about">О лаборатории</a></li>
            <li><a href="#contacts">Контакты</a></li>
          </ul>
        </nav>

        <div className="header-actions">
            <img src={search} alt="search" />
          
           <img src={login} alt="login" />
          
        </div>
      </div>
    </header>
  )
}
