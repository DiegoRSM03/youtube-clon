import './assets/sass/style.scss'
import './assets/iconfont/font/flaticon.css'

import { Fragment, useState } from 'react'
import TopBar from './components/TopBar/TopBar'
import LeftBar from './components/LeftBar/LeftBar'

function App() {
  const [ menuStatus, setMenuStatus ] = useState(false)

  const handleToggleMenuStatus = () => {
    setMenuStatus(!menuStatus)
  }

  return (
    <Fragment>
      <TopBar handleToggleMenuStatus={handleToggleMenuStatus}></TopBar>
      <LeftBar menuStatus={menuStatus}></LeftBar>
    </Fragment>
  );
}

export default App
