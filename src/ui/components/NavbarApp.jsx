import { Link, NavLink } from 'react-router-dom';

export const NavbarApp = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <Link className="navbar-brand" to="/"> Navbar </Link>

            <ul className="navbar-nav d-flex justify-content-center align-items-center">
              <li className="nav-item">
                <NavLink className={({isActive}) => `nav-link ${ isActive ? 'active' : ''}`} to="/home"> Home </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className={({isActive}) => `nav-link ${ isActive ? 'active' : ''}`} to="/about"> About </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className={({isActive}) => `nav-link ${ isActive ? 'active' : ''}`} to="/projects"> Projects </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className={({isActive}) => `nav-link ${ isActive ? 'active' : ''}`} to="/contact"> Contact </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
