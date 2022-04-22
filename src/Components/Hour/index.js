import { useState, useEffect } from 'react'
import styled from 'styled-components'

const Accept = styled.button`

`

const Contenedor = styled.div`
width: 30vw;
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: center;
justify-content: center;
border: 1px solid #000;
`

const Button = styled.button`
border: none;
border-radius: 5px;
padding: 5px 10px;
margin: 5px;
font-size: 16px;
background: ${props => props.type==='busy'? "#333" : props.type==='availableSelected'? "rgb(255,50,50)" : "rgb(109,238,63)"}
`

const getAll = async(data)=>{
    let response = await fetch('http://localhost:3001/api/reservation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    response = await response.json()
    return response
}

const Array =[
    {hour: 10, state: 'busy'},
    {hour: 11, state: 'busy'},
    {hour: 12, state: 'availableNoSelected'},
    {hour: 13, state: 'availableNoSelected'},
    {hour: 14, state: 'availableNoSelected'},
    {hour: 15, state: 'busy'},
    {hour: 16, state: 'availableNoSelected'},
    {hour: 17, state: 'availableNoSelected'},
    {hour: 18, state: 'availableNoSelected'},
    {hour: 19, state: 'availableNoSelected'},
    {hour: 20, state: 'availableNoSelected'},
    {hour: 21, state: 'availableNoSelected'},
    {hour: 22, state: 'busy'}]


export default function Hour ({day, month, year, soccerFieldId}) {
    const [hour, setHour] = useState(Array)
    const [selection, setSelection] = useState([])
    useEffect(()=>{
        const h = getAll({day, month, year, soccerFieldId})
    })
    const selec = (x)=>{
        if(x.state !== 'busy'){
            if(x.state === 'availableNoSelected'){ 
                setSelection([...selection, x.hour])
                setHour(hour.map(item=>{
                    if(item.hour===x.hour){
                        return {hour: x.hour, state: 'availableSelected'}
                    }else{
                        return item
                    }
                }))
            } else {
                setSelection(selection.filter(x=>x.hour))
                setHour(hour.map(item=>{
                    if(item.hour===x.hour){
                        return {hour: x.hour, state: 'availableNoSelected'}
                    }else{
                        return item
                    }
                }))
            }
        }
    }
  return (
    <Contenedor>
      {
        hour.map((x,i) => <Button key={i} type={x.state} onClick={()=>selec(x)}>{x.hour}</Button>)
      }
      <Accept>Cancelar</Accept>
      <Accept>Confirmar</Accept>
        
    </Contenedor>
  )
}