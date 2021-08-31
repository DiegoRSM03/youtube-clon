import React from 'react'

import MenuAndLogo from './MenuAndLogo'
import SearchBox from './SearchBox'
import UserAndMore from './UserAndMore'

function TopBar({ handleToggleMenuStatus }) {
  return (
    <div className="topbar container">
      <div className="sub-container">
        <MenuAndLogo handleToggleMenuStatus={handleToggleMenuStatus}></MenuAndLogo>
        <SearchBox></SearchBox>
        <UserAndMore></UserAndMore>
      </div>
    </div>
  )
}

export default TopBar
