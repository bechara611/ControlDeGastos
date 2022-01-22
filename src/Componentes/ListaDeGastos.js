import React from 'react'
import Boton from './../Elementos/Boton';
import { Helmet } from 'react-helmet';
import BtnRegresar from '../Elementos/BtnRegresar';
import  {Header,Titulo,ContenedorHeader,ContenedorBotones,HeaderPrincipal} from './../Elementos/Header'
const ListaDeGastos = () => {
    return (
         
        <>
        <Helmet>
    <title>Lista de gastos</title>
    </Helmet>
        <Header>
        <BtnRegresar></BtnRegresar>
        <Titulo>Expenses lists</Titulo>
      
       
        </Header>
        </> 
        );
}
 
export default ListaDeGastos;