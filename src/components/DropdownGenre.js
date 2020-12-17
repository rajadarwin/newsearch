import React, { useState } from 'react';
import { MenuItemsGenre } from './MenuItemsGenre';
import './Dropdown.css';
import { Link } from 'react-router-dom';

function DropdownGenre() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (

      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItemsGenre.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>

  );
}

export default DropdownGenre;
