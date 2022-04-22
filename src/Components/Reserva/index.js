import { useEffect, useState } from "react"
import styled from "styled-components"
import axios from 'axios';

const Contenedor = styled.div`
border: 1px solid #fff;
border-radius: 15px;
background: #ccc;
padding: 20px;
margin: 15px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`
const Button = styled.button`
background: red;
padding: 5px 15px;
border-radius: 15px;
`

const Reserva = () => {
    const [reservas, setReservas] = useState([])
    useEffect(() => {
        axios
          .get('http://localhost:3001/api/reservation/user',{ headers: {
              'Authorization': 'Bearer ' + localStorage.getItem('token')
            }})
          .then(({ data }) => {
            setReservas(data.data);
          });
      }
      , []);
  return (
    <div>
      <p style={{"fontSize": "25px"}}>Tus reservas:</p>
      {
          reservas.map((item)=>{
            const date = new Date([item.year,item.month,item.day].join()).toLocaleDateString().split('/')
            const data = `${date[1]}/${date[0]}/${date[2]}`
            return(
                <Contenedor>
                    <div>
                    <p><b>{item.name}</b></p>
                    <p>Hora: {item.time}:00 h</p>
                    <p>Fecha: {data}</p>
                    <p>Dirección: Av Siempre viva 123 Villa Maria del triunfo</p>
                    </div>
                    <Button>Eliminar</Button>
                </Contenedor>
            )
          })
      }
    </div>
  )
}

export default Reserva