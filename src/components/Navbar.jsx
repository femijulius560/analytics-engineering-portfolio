import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="container nav">
        <NavLink className="identity" to="/" aria-label="Femi Julius portfolio home">
          <span className="identity-name">Femi Julius</span>
          <span className="identity-role">Analytics Engineer</span>
        </NavLink>
        <nav className="nav-links" aria-label="Primary navigation">
          <NavLink to="/">Work</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </div>
    </header>
  )
}
