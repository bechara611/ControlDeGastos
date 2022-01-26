import React,{useState} from 'react'
import Boton from './../Elementos/Boton';
import {ReactComponent as Svglogin} from './../imagenes/registro.svg'
import { Helmet } from 'react-helmet';
import BtnRegresar from '../Elementos/BtnRegresar';
import {ContenedorFiltros,Formulario,Input,InputGrande,ContenedorBoton} from './../Elementos/ElementosDelFormulario'
import  {Header,Titulo,ContenedorHeader,ContenedorBotones,HeaderPrincipal} from './../Elementos/Header'
import styled from 'styled-components';
import {app,auth,db} from './../firebase/FirebaseConfig'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import Alerta from '../Elementos/Alerta';

const Svg3= styled(Svglogin)`
width:100%;
max-height:6.25rem;
margin-bottom:1.25rem;
`

const RegistroUsuarios = () => {
    const Navigate=useNavigate();
    const [correo,establecerCorreo]=useState('');
    const [password,establecerPassword]=useState('');
    const [password2,establecerPassword2]=useState('');
    const [estadoAlerta,cambiarEstadoAlerta]=useState(false);
    const [alerta,cambiarAlerta]=useState({});
    let mensaje;
    const handledChange=(e)=>{
        switch (e.target.name) {
            case 'email': 
            establecerCorreo(e.target.value);
                break;
            case 'password':
                establecerPassword(e.target.value);
                break;
            case 'password2':
                establecerPassword2(e.target.value);
                break;
            default:
                break
        }
    }
    const handleSubmit=async (e)=>{
        e.preventDefault();
        cambiarEstadoAlerta(false);
        cambiarAlerta({});
        //comprobamos del lado del cliente que el correo sea valido

        const expresionRegular= /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/
        if (!expresionRegular.test(correo)) {
         cambiarEstadoAlerta(true);
         mensaje='Please, add a valid email.'
         cambiarAlerta({tipo:'error',mensaje:mensaje})
            return;
           //esto en caso de que no sea un correo 
        }
        if (correo==='' || password==='' || password2==='') {
            cambiarEstadoAlerta(true);
            mensaje='Please, add your login information.'
            cambiarAlerta({tipo:'error',mensaje:mensaje})
          
            return
        }
        if (password!==password2) {
            cambiarEstadoAlerta(true);
            mensaje="Check your password"
            cambiarAlerta({tipo:'error',mensaje:mensaje})
          
            
            return
        }

        //si en un ningun if entra entonces ejecuta
        try 
        {
      await createUserWithEmailAndPassword(auth,correo,password);
      cambiarEstadoAlerta(true);
      cambiarAlerta({tipo:'exito',mensaje:'Success'})
      
      Navigate('/')
        } catch (error) {
            cambiarEstadoAlerta(true);
            switch(error.code){
                case 'auth/invalid-password':
                    mensaje = 'At least 6 characters in the password'
                   
                    break;
                case 'auth/email-already-in-use':
                    mensaje = 'Ops, Email already registered'
               
                   
                break;
                case 'auth/invalid-email':
                    mensaje = 'Please use a valid email'
                 
                break;
                default:
                    mensaje = 'Error.'
                   
                break;
            }
            cambiarAlerta({tipo:'error',mensaje:mensaje})
             console.log(error.code)
        }
    }
    return (
        <>
        <Helmet>
        <title>Create</title>
        </Helmet>
        <Header>
    <ContenedorHeader>
    <Titulo>Register</Titulo>
   <div>
   <Boton to='/iniciar-sesion'>Login</Boton>
   </div>
    </ContenedorHeader>
    </Header>
    <Formulario onSubmit={handleSubmit}>
    <Input 
    type='email'
    name='email'
    placeholder='EMAIL'
    value={correo}
    onChange={(e)=>{handledChange(e)}}
    ></Input>
    <Input 
    type='password'
    name='password'
    placeholder='Password'
    value={password}
    onChange={(e)=>{handledChange(e)}}
    ></Input>
    <Input 
    type='password'
    name='password2'
    placeholder='Repeat password'
    value={password2}
    onChange={(e)=>{handledChange(e)}}
    ></Input>
    <ContenedorBoton><Boton primario as='button' type='submit'>Register</Boton></ContenedorBoton>
    <Alerta
     tipo={alerta.tipo}
     mensaje={alerta.mensaje}
     estadoAlerta={estadoAlerta}
     cambiarEstadoAlerta={cambiarEstadoAlerta}
      >
      </Alerta>
    </Formulario>
        </> );
}
 
export default RegistroUsuarios;