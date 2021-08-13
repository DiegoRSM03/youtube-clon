import React from 'react'

function UserAndMore() {
  return (
    <div className="topbar__user-and-more">
      <ul className="topbar__actions-group">
        <li className="topbar__actions-item topbar__create-video"> <i className="flaticon-video-camera-with-play-button"></i> </li>
        <li className="topbar__actions-item topbar__applications"> <i className="flaticon-grid"></i> </li>
        <li className="topbar__actions-item topbar__notifications"> <i className="flaticon-bell"></i> </li>
        <li className="topbar__actions-item topbar__profile"> <i className="flaticon-user"></i> </li>
      </ul>
    </div>
  )
}

export default UserAndMore
