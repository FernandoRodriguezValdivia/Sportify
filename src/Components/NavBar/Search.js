import "./Search.css";
import styled from 'styled-components'

const Button = styled.button`
background: #aaa;
border-radius: 15px;
width: 30px;
height: 30px;
`

export default function Search() {
  return (
    <div className="topnav__search-text topnav__center">
      
      <input type="search" className="topnav__buscar" placeholder="Buscar..." />
      <Button><i className="fa fa-search"></i></Button>
    </div>
  );
}
