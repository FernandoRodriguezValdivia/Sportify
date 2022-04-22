import { useEffect, useState } from "react"
import styled from "styled-components"
import axios from 'axios';
import spinner from '../../images/loading.gif'
import { Center } from "@chakra-ui/react";

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
const obtener = (setReservas) =>{
  axios
      .get('http://localhost:3001/api/reservation/user',{ headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }})
      .then(({ data }) => {
        setReservas(data.data);
      });
}

const ReservaUser = () => {
    const [reservas, setReservas] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        obtener(setReservas)
        setTimeout(()=>
        setLoading(false),1000
      )
    }
      , []);
    
    const eliminar = async (id) => {
      setLoading(true)
      await axios
          .delete(`http://localhost:3001/api/reservation/user/${id}`,{ headers: {
              'Authorization': 'Bearer ' + localStorage.getItem('token')
            }})
      obtener(setReservas)
      setTimeout(()=>
        setLoading(false),1000
      )

    }
  return (
    <div>
      <p style={{"fontSize": "25px"}}>Tus reservas:</p>
      {   loading?


          <Center>
          <img src={spinner} alt='cargando' style={{width: '50px'}}></img>
          </Center>
          

          
          :

          reservas.map((item)=>{
            const date = new Date([item.year,item.month,item.day].join()).toLocaleDateString().split('/')
            const data = `${date[1]}/${date[0]}/${date[2]}`
            return(
                <Contenedor>
                    <div>
                    <p><b>{item.nameLocal}</b></p>
                    <p>Hora: {item.time}:00 h</p>
                    <p>Fecha: {data}</p>
                    <p>Dirección: Av Siempre viva 123 Villa Maria del triunfo</p>
                    </div>
                    <Button onClick={()=>eliminar(item._id)}>Eliminar</Button>
                </Contenedor>
            )
          })

      }
    </div>
  )
}

export default ReservaUser