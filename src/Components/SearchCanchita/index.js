import "./NavBar.css";

import Search from "./Search";
import filter from "../../images/filter-solid.svg";
import map from "../../images/location-dot-solid.svg";

export default function SearchBar() {
  return (
    <div className="topnav__search">
      <Search />
      <button type="button" className="topnav__search-filter topnav__center">
        <img src={filter} className="topnav__search-filter-img" alt="" />
        Filtrar
      </button>
      <button type="button" className="topnav__search-map topnav__center">
        <img src={map} className="" alt="" />
        Ver mapa
      </button>
    </div>
  );
}
