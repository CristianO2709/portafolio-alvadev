import '../styles/aboutstyle.css';
export const AboutPage = () => {
  return (
    <>
      <div className="about">
        <div className="about-paragraph">
          <p>
            Hola soy Cristian, graduado de Ingeniero en informática en el Instituto Tecnológico Superior de la Región de los Llanos.

            Durante la etapa universitaria realice mis prácticas profesionales al desarrollar el Sistema Electrónico de Consultas y Concentrado de Información Médica en el H. R. N° 26 IMMS Prospera. Y
            Cuento con +3 años de experiencia en el desarrollo Full-Stack en la actualización y desarrollo del sistema ERP Interno de la empresa Tormex Industrias S.A de C.V. 
            
            Tengo un gusto por aprender e investigar nuevas tecnologías para mejorar mis habilidades y así dar soluciones a problemas que se presenten, con la finalidad de cumplir los objetivos establecidos y automatizar procesos de una organización.
          </p>
        </div>
        <div className="about-carrusel">
          <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <h3>Mis habilidades</h3>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <img src="/assets/icons/sql-server.svg" className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src="/assets/icons/csharp.svg" className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="/assets/icons/html5.svg" className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="/assets/icons/css.svg" className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="/assets/icons/javascript.svg" className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="/assets/icons/react.svg" className="d-block w-100" alt="..."/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
