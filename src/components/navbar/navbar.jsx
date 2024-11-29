import { NavLink } from 'react-router-dom';
import classes from './navbar.module.scss';
import hamIcon from '/icons/ham.svg';
import { useState } from 'react';
import Title from '@/lib/components/title/title';

function Navbar({ title, menuItems }) {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={classes.navbar}>
      <Title title={title} />

      <>
        <button
          onClick={() => setToggle(!toggle)}
          className={classes.hamButton}
        >
          <img src={hamIcon} alt="hamburger" />
        </button>
        <ul data-toggle={toggle}>
          {menuItems.map((item) => (
            <li key={item}>
              <NavLink
                to={`/${item}`}
                className={({ isActive }) => (isActive ? classes.active : '')}
                onClick={() => setToggle(false)}
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </>
    </nav>
  );
}

export default Navbar;
