import React, { Fragment } from 'react'

function MoreActions() {
  return (
    <Fragment>
      <span className="leftbar__more-of-youtube">MAS DE YOUTUBE</span>
      <ul className="leftbar__actions-list">
        <li className="leftbar__action"> <i className="leftbar__action-icon flaticon-youtube"></i>Youtube Premium</li>
        <li className="leftbar__action"> <i className="leftbar__action-icon flaticon-film-strip"></i>Peliculas</li>
        <li className="leftbar__action"> <i className="leftbar__action-icon flaticon-gamepad"></i>Videojuegos</li>
        <li className="leftbar__action"> <i className="leftbar__action-icon flaticon-streaming"></i>Directo</li>
        <li className="leftbar__action"> <i className="leftbar__action-icon flaticon-lightbulb-filled-interface-sign"></i>Aprendizaje</li>
        <li className="leftbar__action"> <i className="leftbar__action-icon flaticon-trophy"></i>Deportes</li>
      </ul>
    </Fragment>
  )
}

export default MoreActions
