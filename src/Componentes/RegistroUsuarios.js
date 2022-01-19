import React from 'react'
import Boton from './../Elementos/Boton';
import { Helmet } from 'react-helmet';
import BtnRegresar from '../Elementos/BtnRegresar';
import {ContenedorFiltros,Formulario,Input,InputGrande,ContenedorBoton} from './../Elementos/ElementosDelFormulario'
import  {Header,Titulo,ContenedorHeader,ContenedorBotones,HeaderPrincipal} from './../Elementos/Header'
const RegistroUsuarios = () => {
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
    <Formulario>
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
    <Input 
    type='password'
    name='password2'
    placeholder='Repeat password'
    ></Input>
    </Formulario>
        </> );
}
 
export default RegistroUsuarios;