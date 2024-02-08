import { ReactTyped } from "react-typed";
import '../styles/homestyle.css';

export const HomePage = () => {

  return (
    <>
      <div className="home">
        <div className="home-paragraph">
          <div className="mask">
            <div className='mask-title'> {"{ alvadev };"} </div>
          </div>
          <p className="information">Hola, Yo soy{" "}
            <br/>
            <ReactTyped strings={["Cristian Omar", "Desarrollador FullStack"]} typeSpeed={100} loop />
          </p>
          <p className="description">
            Soy un desarrollador full stack con experiencia en el desarrollo de aplicaciones web y movíles...
          </p>
          <button type="button" className="btn btn-outline-primary">Descargar CV</button>
        </div>
        <div className="home-image text-center">
          <img src="/assets/images/profile.png" className="rounded" alt="Cristian Alvarado"/>
        </div>
      </div>
    </>
  )
}
