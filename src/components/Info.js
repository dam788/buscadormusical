import React from 'react';

const Info = ({ info }) => {

  // Objects.keys se utiliza cuando queremos saber si un objeto viene vacio o no
  if (Object.keys(info).length === 0) return null;

  const { strArtistThumb, strArtist, strGenre, strBiographyES } = info;

  return (
    <>
      <div className="card-border-light">
        <div className="card card-header bg-primary text-light font-weight-bold">
          Información Artista: {strArtist}
        </div>
        <div className="card card-body">
          <img
            className="img-fluid img-thumbnail"
            src={strArtistThumb}
            alt="Logo Artista"
          />
          <p className="card-text">Género: {strGenre}</p>
          <h2 className="card-text">Biografía</h2>
          <p className="card-text">{strBiographyES}</p>
          <p className="card-text">
            <a href={`https://${info.strFacebook}`} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
            </a>
            <a href={`https://${info.strTwitter}`} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
            </a>
            <a href={`${info.strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-lastfm"></i>
            </a>
          </p>
        </div>
      </div>
    </>
   );
}

export default Info;