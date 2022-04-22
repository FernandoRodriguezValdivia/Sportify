import InfoReserva from "./InfoReserva"
import styled from "styled-components"

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
  return (
    <div>
      <p style={{"fontSize": "25px"}}>Tus reservas:</p>
      <Contenedor>
        <div>
          <p><b>Canchita 2</b></p>
          <p>Hora: 10am</p>
          <p>Dirección: Av Siempre viva 123 Villa Maria del triunfo</p>
        </div>
        <Button>Eliminar</Button>
      </Contenedor>

    </div>
  )
}

export default Reserva