import './index.scss'
import LogoMR from '../../../assets/images/logo-mr.png'
import { useRef } from 'react'

const Logo = () => {

    const bgRef = useRef()
    const outlineLogoRef = useRef()
    const solidLogoRef = useRef()

  return (
    <div className="logo-container">
      <img className="solid-logo" src={LogoMR} alt="MR" />
    </div>
  )
}

export default Logo
