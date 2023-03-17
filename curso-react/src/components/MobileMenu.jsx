import React from 'react'
import { Link } from "react-router-dom";
import '@styles/MobileMenu.scss'

const MobileMenu = () => {
    return (
      <div className="mobile-menu">
        <ul>
          <li>
            <Link to={"/"}>CATEGORIES</Link>
          </li>
          <li>
            <Link to={"/"}>All</Link>
          </li>
          <li>
            <Link to={'/'}>Clothes</Link>
          </li>
          <li>
            <Link to={'/'}>Electronics</Link>
          </li>
          <li>
            <Link to={'/'}>Furnitures</Link>
          </li>
          <li>
            <Link to={'/'}>Toys</Link>
          </li>
          <li>
            <Link to={'/'}>Other</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to={'/'}>My orders</Link>
          </li>
          <li>
            <Link to={'/'}>My account</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to={'/'} className="email">
              platzi@example.com
            </Link>
          </li>
          <li>
            <Link to={'/'} className="sign-out">
              Sign out
            </Link>
          </li>
        </ul>
      </div>
    );
}
 
export default MobileMenu;