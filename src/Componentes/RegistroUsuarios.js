import React,{useState} from 'react'
import Boton from './../Elementos/Boton';
import {ReactComponent as Svglogin} from './../imagenes/registro.svg'
import { Helmet } from 'react-helmet';
import BtnRegresar from '../Elementos/BtnRegresar';
import {ContenedorFiltros,Formulario,Input,InputGrande,ContenedorBoton} from './../Elementos/ElementosDelFormulario'
import  {Header,Titulo,ContenedorHeader,ContenedorBotones,HeaderPrincipal} from './../Elementos/Header'
import styled from 'styled-components';
import {app,auth,db} from './../firebase/FirebaseConfig'

const Svg3= styled(Svglogin)`
width:100%;
max-height:6.25rem;
margin-bottom:1.25rem;
`

const RegistroUsuarios = () => {
    const [correo,establecerCorreo]=useState('');
    const [password,establecerPassword]=useState('');
    const [password2,establecerPassword2]=useState('');
    
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
    const handleSubmit=(e)=>{
        e.preventDefault();

        //comprobamos del lado del cliente que el correo sea valido

        const expresionRegular= /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/
        if (!expresionRegular.test(correo)) {
         console.log('Please, add a valid email.')
            return;
           //esto en caso de que no sea un correo 
        }
        if (correo==='' || password==='' || password2==='') {
            console.log('Please, add your login information.')
            return
        }
        if (password!==password2) {
            console.log("Check your password")
            return
        }

        //si en un ningun if entra entonces ejecuta
        console.log("registramos usuarios")
        try 
        {
     //   auth.createUserWithEmailAndPassword(correo,password);
        } catch (error) {
            console.log(error);
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
    
    </Formulario>
        </> );
}
 
export default RegistroUsuarios;