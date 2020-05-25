import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cancion from './components/Cancion';
import Info from './components/Info';
import axios from 'axios';


function App() {

  // definir el state
  const [busquedaletra, guardarBusquedaLetra] = useState({});
  let { cancion } = busquedaletra;

  // state para guardar la letra
  const [letra, setLetra] = useState('');

  // state para guardar la indo y pasarlo a componente de info
  const [info, setInfo] = useState({});

  // consulta api
  useEffect(() => {

    // para que no inicie a la primera sin buscar nada
    if (Object.keys(busquedaletra).length === 0) return;


    let consultarApiLetra = async () => {

      const { artista, cancion } = busquedaletra;

      let url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`
      let url2 = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`

      // consultar dos apis al mismo tiempo
      let [letra, informacion] = await Promise.all([
        axios(url),
        axios(url2)
      ]);
      // destructuramos la primera consulta de api con el nombre que le asignamos en ese orden o sea letra
      let { lyrics } = letra.data;
      // lo guradamos en su state para pasarlo a su componente
      setLetra(lyrics)

      setInfo(informacion.data.artists[0])


    }
    consultarApiLetra();

  },[busquedaletra])

  return (
    <>
      <Formulario
      guardarBusquedaLetra={guardarBusquedaLetra}
      />
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-6">
            <Info
              className=""
              info={info}
            />
          </div>
          <div className="col-12 col-md-6">
            <Cancion
              letra={letra}
              cancion={cancion}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
