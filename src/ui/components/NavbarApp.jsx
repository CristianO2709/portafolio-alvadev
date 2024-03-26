import { Link, NavLink } from 'react-router-dom';
import { useMode } from '../hooks/useMode';
import { useTranslation } from 'react-i18next';

import './styles/navbarstyle.css';

export const NavbarApp = () => {
  const { checked, toggleThemeChange} = useMode();
  const { t,  i18n } = useTranslation("global");

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid navbar-content">
          <Link className="navbar-brand" to="/"> {"< alvadev />"} </Link>         

          <div className="collapse navbar-collapse" id="navbarContent">
            {/* d-flex justify-content-center align-items-center */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink 
                  className={({isActive}) => `nav-link ${ isActive ? 'active-navbar' : ''}`} 
                  to="/home">
                    { t('navbar.home') }
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink 
                  className={({isActive}) => `nav-link ${ isActive ? 'active-navbar' : ''}`} 
                  to="/about"> 
                    { t('navbar.about') }
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink 
                  className={({isActive}) => `nav-link ${ isActive ? 'active-navbar' : ''}`} 
                  to="/projects"> 
                    { t('navbar.projects') }
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink 
                  className={({isActive}) => `nav-link ${ isActive ? 'active-navbar' : ''}`} 
                  to="/contact"> 
                    { t('navbar.contact') } 
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="mode-translate">
            <label className="ui-switch">
              <input 
                type="checkbox"
                defaultChecked={checked}
                onChange={() => toggleThemeChange()}
              />
              <div className="slider">
                <div className="circle"></div>
              </div>
            </label>
            <div className="btn-group ms-4" role="group" aria-label="Basic radio toggle button group">
              <input type="radio" className="btn-check" onClick={() => i18n.changeLanguage("es")} name="btnradio" id="btnradio1" autoComplete='off' defaultChecked="checked"/>
              <label className="btn btn-outline-danger" htmlFor="btnradio1">ES</label>

              <input type="radio" className="btn-check" onClick={() => i18n.changeLanguage("en")} name="btnradio" id="btnradio2" autoComplete="off"/>
              <label className="btn btn-outline-danger" htmlFor="btnradio2">EN</label>
            </div>
          </div>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </>
  )
}
