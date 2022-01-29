import React,{useContext} from 'react'
import Boton from './../Elementos/Boton';
import { Helmet } from 'react-helmet';
import BtnRegresar from '../Elementos/BtnRegresar';
import { AuthContext } from '../Contextos/AuthContext';
import  {Header,Titulo,ContenedorHeader,ContenedorBotones,HeaderPrincipal} from './../Elementos/Header'
import { useAuth } from '../Contextos/AuthContext';
const ListaDeGastos = () => {
    const {usuario}=useAuth();
    console.log(usuario);
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