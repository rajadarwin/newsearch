import React, { useState } from 'react';
import { MenuItemsYear } from './MenuItemsYear';
import './Dropdown.css';
import { Link } from 'react-router-dom';

function DropdownYear() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (

      <ul
        onClick={handleClick}
        className={click ? 'dropdown-year clicked' : 'dropdown-year'}
      >
        {MenuItemsYear.map((item, index) => {
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

export default DropdownYear;
