import React, { useState } from 'react';

const Formulario = ({guardarBusquedaLetra}) => {

  const [busqueda, setBusqueda] = useState({
    artista: '',
    cancion: ''
  });

  // state del error;
  const [error, setError] = useState(false);

  // extraer artista y cancion
  const { artista, cancion } = busqueda;


  // funcion a cada input para leer su contenido
  let actualizarState = e => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    })
  }

  // consultar las apis
  const buscarInfo = e => {

    e.preventDefault();

    // validamos
    if (artista.trim() === '' || cancion.trim() === '') return setError(true);
    // si pasa esta validacion pasamos el estado de nuevo a falso
    setError(false);

    // pasar al componente principal
    guardarBusquedaLetra(busqueda);

  }



  return (
    <div className="bg-info">
          { error ?
            <p className="alert alert-danger text-center p-2">Todos los campos son obligatorios</p>
            :
            null
          }
      <div className="container">
        <div className="row">
          <form
            onSubmit={buscarInfo}
            className="col card text-white bg-transparent mb-5 pt-5 pb-2"
          >
            <fieldset>
              <legend className="text-center">Buscar Letra de Canciones</legend>
            </fieldset>

            <div className="row">
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label htmlFor="">Artista</label>
                  <input
                    type="text"
                    className="form-control"
                    name="artista"
                    placeholder="Nombre Artista"
                    onChange={actualizarState}
                    value={artista}
                  />
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label htmlFor="">Canción</label>
                  <input
                    type="text"
                    className="form-control"
                    name="cancion"
                    placeholder="NombreCanción"
                    onChange={actualizarState}
                    value={cancion}
                  />
                </div>
                <br/>
              <button
                type="submit"
                className="btn btn-lg btn-primary float-right col-12 col-md-6 col-lg-4"
              >Buscar</button>
              </div>



            </div>
          </form>
        </div>
      </div>
    </div>
   );
}

export default Formulario;