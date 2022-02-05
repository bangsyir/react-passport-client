import React from 'react';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';

function Navbar({user}:{user:any}) {
  const [cookies, setCookie, removeCookie] = useCookies(['session']);
  const logout = () => {
    window.open("http://localhost:8000/auth/logout","_self")
    removeCookie('session')
  }
  return (
    <div className="navbar">
      <span className="logo">
        <Link to="/" className="logoLink">
          Lama App
        </Link>
      </span>
        {user ? (
          <ul className="list">
            <li className="listItem">
              <img src={user.photos[0].value} alt="" className="avatar"/>
            </li>
            <li className="listItem">{user.displayName}</li>
            <li className="listItem" onClick={logout}>Logout</li>
          </ul>

        ):(
          <ul className="list">
            <li className="listItem">
              <Link to="/login" className="itemListLink">Login</Link>
            </li>
          </ul>
        )}
    </div>
  )
}

export default Navbar;
