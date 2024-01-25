export const NavbarApp = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <a className="navbar-brand" href="#">Navbar</a>
            <ul className="navbar-nav d-flex justify-content-center align-items-center">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"> Home </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"> About </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"> Projects </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link" href="#"> Contact </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
