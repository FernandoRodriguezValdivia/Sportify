import "./Search.css";

export default function Search() {
  return (
    <div className="topnav__search-text topnav__center">
      <i className="fa fa-search"></i>
      <input type="search" className="topnav__buscar" placeholder="Buscar..." />
    </div>
  );
}
