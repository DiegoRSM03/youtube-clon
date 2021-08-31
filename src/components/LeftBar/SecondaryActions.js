import React, { useState, Fragment } from 'react'

function SecondaryActions() {

  const [ showMoreActivated, setShowMoreActivated ] = useState(false)

  return (
    <ul className="leftbar__actions-list">
      <li className="leftbar__action"> <i className="leftbar__action-icon flaticon-library"></i>Biblioteca</li>
      <li className="leftbar__action"> <i className="leftbar__action-icon flaticon-history"></i>Historial</li>
      <li className="leftbar__action"> <i className="leftbar__action-icon flaticon-youtube"></i>Mis Videos</li>
      <li className="leftbar__action"> <i className="leftbar__action-icon flaticon-like"></i>Videos que me gustan</li>

      { showMoreActivated ? (
        <Fragment>
          <li className="leftbar__action"> <i className="leftbar__action-icon flaticon-playlist"></i>Playlist de Ejemplo</li>
          <li className="leftbar__action"> <i className="leftbar__action-icon flaticon-playlist"></i>Playlist de Ejemplo</li>
          <li className="leftbar__action"> <i className="leftbar__action-icon flaticon-playlist"></i>Playlist de Ejemplo</li>
          <li className="leftbar__action"> <i className="leftbar__action-icon flaticon-playlist"></i>Playlist de Ejemplo</li>
          <li className="leftbar__action"> <i className="leftbar__action-icon flaticon-playlist"></i>Playlist de Ejemplo</li>
          <li className="leftbar__action"> <i className="leftbar__action-icon flaticon-playlist"></i>Playlist de Ejemplo</li>
          <li className="leftbar__action"> <i className="leftbar__action-icon flaticon-playlist"></i>Playlist de Ejemplo</li>
          <li className="leftbar__action"> <i className="leftbar__action-icon flaticon-playlist"></i>Playlist de Ejemplo</li>
          <li className="leftbar__action"> <i className="leftbar__action-icon flaticon-playlist"></i>Playlist de Ejemplo</li>
          <li className="leftbar__action"> <i className="leftbar__action-icon flaticon-playlist"></i>Playlist de Ejemplo</li>
          <li className="leftbar__action"> <i className="leftbar__action-icon flaticon-playlist"></i>Playlist de Ejemplo</li>
        </Fragment>
      ) : (
        null
      ) }

      <li onClick={ () => setShowMoreActivated(!showMoreActivated)} className="leftbar__action">
        <i className="leftbar__action-icon" className={ !showMoreActivated ? 'flaticon-down-arrow' : 'flaticon-up-arrow' }></i>
        { !showMoreActivated ? 'Mostrar Mas' : 'Mostrar Menos' }
      </li>
    </ul>
  )
}

export default SecondaryActions
