import React from 'react'

import MenuAndLogo from '../TopBar/MenuAndLogo'

import PrimaryActions from './PrimaryActions'
import SecondaryActions from './SecondaryActions'
import MoreActions from './MoreActions'

function LeftBar({ menuStatus }) {
  return (
    <div className={ 'modal-leftbar ' + (menuStatus ? 'modal-leftbar--activated' : 'modal-leftbar--desactivated') }>
      <div className="leftbar">
        <MenuAndLogo></MenuAndLogo>
        <hr className="leftbar__separator"/>

        <PrimaryActions></PrimaryActions>
        <hr className="leftbar__separator"/>

        <SecondaryActions></SecondaryActions>
        <hr className="leftbar__separator"/>

        <MoreActions></MoreActions>
      </div>
    </div>
  )
}

export default LeftBar
