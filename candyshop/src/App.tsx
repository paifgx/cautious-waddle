import './App.css'

import HomeIcon from './assets/home.svg?react'
import CartIcon from './assets/cart.svg?react'
import TreeIcon from './assets/tree.svg?react'

function App() {
  
  return (
    <>
      <header>
        <h1>Garten</h1>

        <nav>
          <a className='nav-link' href='/'>
            <HomeIcon className='nav-icon' />
            <span>Home</span>
          </a>
          <a className='nav-link' href='/'>
            <TreeIcon className='nav-icon' />
            <span>Items</span>
          </a>
          <a className='nav-link' href='/'>
            <CartIcon className='nav-icon' />
            <span>Cart</span>
          </a>
        </nav>
      </header>

      <main></main>

      <footer></footer>
    </>
  )
}

export default App