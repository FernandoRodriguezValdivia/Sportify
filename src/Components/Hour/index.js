import { useState, useEffect, useContext, useRef } from 'react'
import {useHistory} from 'react-router-dom'
import { UserContext } from "../../context/userContext";
import styled from 'styled-components'

const Contenedor = styled.div`
display: flex;
flex-direction: column;
`

const Accept = styled.button`
background: #42a692;
border-radius: 25px;
padding: 10px 15px;
margin: 10px;
margin-top: 20vh;
`

const Hours = styled.div`
width: 50vw;
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: center;
justify-content: center;`


const Button = styled.button`
border: none;
border-radius: 5px;
padding: 5px 10px;
margin: 5px;
font-size: 16px;
background: ${props => props.type==='busy'? "#333" : props.type==='availableSelected'? "rgb(255,50,50)" : "rgb(109,238,63)"}
`

const getAll = async(data)=>{
    let response = await fetch(`http://localhost:3001/api/reservation/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    response = await response.json()
    return response
}


export default function Hour ({day, month, year, soccerFieldId}) {
    const mountedRef = useRef(true)
    const [hour, setHour] = useState([])
    const history = useHistory()
    const [selection, setSelection] = useState([])
    const { user } = useContext(UserContext);
    useEffect(()=>{
        getAll({day, month, year, soccerFieldId: soccerFieldId.id})
        .then(data=>{
            setHour(data)
        })
        return () => { mountedRef.current = false }
    },[day, month, year, soccerFieldId])
    const cancel = () =>{
        history.push('/')
    }
    const confirmar = async () =>{
        if(selection.length ===0){
            alert('no seas vivo selecciona algo')
        }else{
            const data = []
            for(let el of selection ){
                let aux = {day, month, year}
                aux.time = el
                data.push(aux)
            }
            const response = await fetch(`http://localhost:3001/api/reservation/create/${soccerFieldId.id}`, {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                 },
                body: JSON.stringify({data}),
              });
              const resjson = await response.json()
              console.log(resjson)
              alert(resjson.sucess)
              history.push('/')
        }
    }
    const selec = (x)=>{
        if(user.name === ""){
            history.push('/login/user')
        }
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
        <Hours>
        {
            
            hour.map((x,i) => <Button key={i} type={x.state} onClick={()=>selec(x)}>{x.hour}</Button>)
        }   
        </Hours>
        <Hours>
            <Accept onClick={cancel}>Cancelar</Accept>
            <Accept onClick={confirmar}>Confirmar</Accept> 
        </Hours>        
      </ Contenedor>
  )
}