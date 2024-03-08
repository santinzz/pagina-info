import { useState } from 'react'
import '../styles/Menubars.css'

export function MenuBars() {
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive((prev) => !prev)
  }

  return (
    <div className='bars-container' onClick={handleClick}>
      <div className={`${isActive ? 'menu-clicked-bars' : ''}`}></div>
      <div className={`${isActive ? 'menu-clicked-bars' : ''}`}></div>
      <div className={`${isActive ? 'menu-clicked-bars' : ''}`}></div>
      <input type="checkbox" />
    </div>
  )
}
