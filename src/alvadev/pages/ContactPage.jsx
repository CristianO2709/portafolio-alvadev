export const ContactPage = () => {
  return (
    <>
      <form>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="floatingNombre"/>
          <label htmlFor="floatingNombre">Tu Nombre</label>
        </div>
        <div className="form-floating mb-3">
          <input type="email" className="form-control" id="floatingInput"/>
          <label htmlFor="floatingInput">Correo Electronico</label>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="floatingAsunto"/>
          <label htmlFor="floatingAsunto">Asunto</label>
        </div>
        <div className="form-floating mb-3">
          <textarea className="form-control" id="floatingTextarea"></textarea>
          <label htmlFor="floatingTextarea">Mensaje</label>
        </div>
        <button className="btn btn-outline-primary brn-lg">Send</button>
      </form>
    </>
  )
}
