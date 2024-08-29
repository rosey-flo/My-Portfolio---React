import { NavLink } from 'react-router-dom'


function Header(props) {

  const handleNavLink = (event) => {
    event.preventDefault()
  
    const pageName = event.target.innerText

    props.setPage(pageName)

  }


  return (
    <>
      <header className='row justify-between align-center'>
        <h3>{props.title}</h3>
        <nav>
          <a onClick={handleNavLink} href="/">Home</a>
          <a onClick={handleNavLink} href="/about">About</a>
          <a onClick={handleNavLink} href="/contact">Contact</a>
        </nav>
      </header>
    </>

  )
}

export default Header;

