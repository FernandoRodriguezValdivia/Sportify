import "./Search.css";
import styled from 'styled-components'
import {useContext, useState} from 'react'
import { UserContext } from '../../context/userContext';


const Button = styled.button`
background: #aaa;
border-radius: 15px;
width: 30px;
height: 30px;
`

export default function Search() {
  const [x, setX] = useState()
  const {setSearch} = useContext(UserContext);
  const buscar = (e) =>{
    e.preventDefault()
    setSearch(x)

  }

  const leer = (e) =>{
    setX(e.target.value)
  }
  return (
    <div className="topnav__search-text topnav__center">

        <input name="buscar" type="search" className="topnav__buscar" placeholder="Buscar..." onChange={leer}/>
        <Button onClick={buscar}><i className="fa fa-search"></i></Button>

    </div>
  );
}
