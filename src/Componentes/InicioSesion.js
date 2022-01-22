import React from 'react'
import Boton from './../Elementos/Boton';
import {ReactComponent as Svglogin} from './../imagenes/registro.svg'
import {ReactComponent as Svglogin2} from './../imagenes/login.svg'
import { Helmet } from 'react-helmet';
import BtnRegresar from '../Elementos/BtnRegresar';
import {ContenedorFiltros,Formulario,Input,InputGrande,ContenedorBoton} from './../Elementos/ElementosDelFormulario'
import  {Header,Titulo,ContenedorHeader,ContenedorBotones,HeaderPrincipal} from './../Elementos/Header'
import styled from 'styled-components';


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
    <Formulario>
    <Svg2></Svg2>
    <Input 
    type='email'
    name='email'
    placeholder='EMAIL'
    ></Input>
    <Input 
    type='password'
    name='password'
    placeholder='Password'
    ></Input>
    <ContenedorBoton><Boton primario as='button' type='submit'>Login</Boton></ContenedorBoton>
    
    </Formulario>
        </> );
}
 
export default InicioSesion;