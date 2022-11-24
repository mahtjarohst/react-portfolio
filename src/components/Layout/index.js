import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import './index.scss'

const Layout = () => {
  return (
    <>
      <Sidebar />
      <div className="App">
        <Sidebar />
        <div>
            <span>&lt;body;</span>
            <Outlet />
        </div>
      </div>
    </>
  )
}

export default Layout
