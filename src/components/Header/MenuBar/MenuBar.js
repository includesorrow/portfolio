import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Menu from './Menu/Menu';

function MenuBar() {
  return (
    <ul className="row justify-content-center w-100 mx-0">
      <li className="col-3 col-md-2">
        <Link to="/portfolio"><Menu menuName="Projects" /></Link>
      </li>
      <li className="col-3 col-md-2">
        <Menu menuName="About" />
      </li>
      <li className="col-3 col-md-2">
        <Menu menuName="Blog" />
      </li>
    </ul>
  );
}

MenuBar.propTypes = {
  className: PropTypes.string,
};

export default MenuBar;