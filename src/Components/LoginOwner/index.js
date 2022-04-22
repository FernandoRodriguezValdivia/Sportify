import {useState, useContext} from 'react';
import soccer from '../../images/soccer.jpg';
import './Login.css';
import { Link, useHistory} from 'react-router-dom';
import { UserContext } from '../../context/userContext';

export default function LoginOwner() {
  const { ChangeTokenState } = useContext(UserContext);
  const [userState, setUser] = useState({});
  const history = useHistory()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...userState, [name]: value });
  };
  const submit = async(e)=>{
    e.preventDefault();
    let response = await fetch('http://localhost:3001/api/owner/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userState),
    });
    response = await response.json()
    if(response.message === "Correo o contraseña incorrecta"){
      alert(response.message)
    }else{
      ChangeTokenState(response.token, response.name, response.type);
      history.push('/')
    }
  }
  return (
    <div className='login'>
      <div className='login-text'>
        <div className='login-text__logo'>
          <i className='fas fa-futbol'></i>
          <Link to={'/'} className='login-text__logo-name color'>Sportify</Link>
        </div>
        <Link to={'/'} className='login-text__begin link color'>Volver al inicio</Link>
        <div className='login-text__info'>
          <p className='login-text__info-title'>
            Bienvenido a <br /> Sportify
          </p>
          <form className='login-text__info-form'>
            <input
              name='email'
              className='login-text__info-form-email'
              type='text'
              placeholder='Ingresa tu correo'
              onChange={handleChange}
            ></input>
            <input
              name='password'
              className='login-text__info-form-password'
              type='password'
              placeholder='Ingresa tu contraseña'
              onChange={handleChange}
            ></input>
          </form>
        </div>
            <button className='login-text__button' type='submit' onClick={submit}>Ingresar</button>
        <div className='login-text__register small'>
          <p>¿No tienes una cuenta?</p>
          <Link to={'/register/owner'} className='login-text__register-link link small color'>
            Regístrate aquí
          </Link>
        </div>
      </div>
      <div className='login-image'>
        <img className='soccer' src={soccer} alt='' />
      </div>
    </div>
  );
}
