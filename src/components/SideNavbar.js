import { NavLink } from "react-router-dom";

import "./SideNavbar.css";

const SideNavbar = () => {
  return (
    <div className="sidebar">
      <NavLink activeClassName="active" to="/contact">Contact US</NavLink>
      <NavLink activeClassName="active" to="/leaflet-map">Maps and Charts</NavLink>
    </div>
  );
};

export default SideNavbar;
