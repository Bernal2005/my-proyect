import HeaderComponent from "../components/HeaderComponent"

function BlogPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("El formulario se ha enviado")
  }
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <div>BlogPage</div>
        <h1>Fórmulario - Tú opinión</h1>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <label htmlFor="userName">Nombre:</label>
              <input type="text" id="userName" />
            </fieldset>
            <fieldset>
              <label htmlFor="comentario">Comentario:</label>
              <input type="text" id="comentario" />
            </fieldset>
            <button>Enviar</button>
          </form>
    </>
  )
}

export default BlogPage