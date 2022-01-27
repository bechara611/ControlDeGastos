import React,{useState} from 'react'
import Boton from './../Elementos/Boton';
import {ReactComponent as Svglogin} from './../imagenes/registro.svg'
import {ReactComponent as Svglogin2} from './../imagenes/login.svg'
import { Helmet } from 'react-helmet';
import BtnRegresar from '../Elementos/BtnRegresar';
import {ContenedorFiltros,Formulario,Input,InputGrande,ContenedorBoton} from './../Elementos/ElementosDelFormulario'
import  {Header,Titulo,ContenedorHeader,ContenedorBotones,HeaderPrincipal} from './../Elementos/Header'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/FirebaseConfig';
import {signInWithEmailAndPassword} from 'firebase/auth'
import Alerta from '../Elementos/Alerta';



const Svg= styled(Svglogin)`
width:100%;
max-height:6.25rem;
margin-bottom:1.25rem;
`

const Svg2= styled(Svglogin2)`
width:100%;
max-height:12.25rem;
margin-bottom:1.25rem;
`

const InicioSesion = () => {
    let mensaje;
    const Navigate=useNavigate();
    const [correo,establecerCorreo]=useState('');
    const [password,establecerPassword]=useState('');
    const [estadoAlerta,cambiarEstadoAlerta]=useState(false);
    const [alerta,cambiarAlerta]=useState({});

    const handledChange=(e)=>{
        switch (e.target.name) {
            case 'email': 
            establecerCorreo(e.target.value);
                break;
            case 'password':
                establecerPassword(e.target.value);
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
        if (correo==='' || password==='') {
            cambiarEstadoAlerta(true);
            mensaje='Please, add your login information.'
            cambiarAlerta({tipo:'error',mensaje:mensaje})
          
            return
        }
       

        //si en un ningun if entra entonces ejecuta
        try 
        {
            await signInWithEmailAndPassword(auth,correo,password);
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
                case 'auth/user-not-found':
                    mensaje = 'User not found, please check your information'
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
        <title>Login</title>
        </Helmet>
        <Header>
    <ContenedorHeader>
    <Titulo>Login</Titulo>
   <div>
   <Boton to='/Crear-cuenta'>Register</Boton>
   </div>
    </ContenedorHeader>
    </Header>
    <Formulario onSubmit={handleSubmit}>
    <Svg2></Svg2>
    <Input 
    type='email'
    name='email'
    value={correo}
    placeholder='EMAIL'
    onChange={(e)=>{handledChange(e)}}
    ></Input>
    <Input 
    type='password'
    name='password'
    value={password}
    onChange={(e)=>{handledChange(e)}}
    placeholder='Password'
    ></Input>
    <ContenedorBoton><Boton primario as='button' type='submit'>Login</Boton></ContenedorBoton>
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
 
export default InicioSesion;