import { useEffect } from 'react'
import style from './App.module.css'

const App = () => {
  console.log('first')

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then(res => res.json())
      .then(data => console.log(data))
  }, [])
  return (
    <nav className={style.sidebar}>
      <div className={style.menuBar}>
        <ul className={style.menuLinks}>
          <li className={`${style.navLinks}`}>
            <a href='#'>
              <span className={`${style.text} ${style.navText}`}>Item 1</span>
            </a>
          </li>
          <li className={`${style.navLinks}`}>
            <a href='#'>
              <span className={`${style.text} ${style.navText}`}>Item 2</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default App
