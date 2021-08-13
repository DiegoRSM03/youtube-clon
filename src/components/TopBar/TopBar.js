import React from 'react'

import MenuAndLogo from './MenuAndLogo'
import SearchBox from './SearchBox'
import UserAndMore from './UserAndMore'

function TopBar() {
  return (
    <div className="topbar container">
      <div className="sub-container">
        <MenuAndLogo></MenuAndLogo>
        <SearchBox></SearchBox>
        <UserAndMore></UserAndMore>
      </div>
    </div>
  )
}

export default TopBar
