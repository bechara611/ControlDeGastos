import React,{useContext,useEffect} from 'react'
import Boton from './../Elementos/Boton';
import { Helmet } from 'react-helmet';
import BtnRegresar from '../Elementos/BtnRegresar';
import { AuthContext } from '../Contextos/AuthContext';
import  {Header,Titulo,ContenedorHeader,ContenedorBotones,HeaderPrincipal} from './../Elementos/Header'
import { useAuth } from '../Contextos/AuthContext';
import { useNavigate } from 'react-router-dom';
import BarraTotalGastado from './BarraTotalGastado';
import useObtenerGastos from '../Hooks/useObtenerGastos';

const ListaDeGastos = () => {
  const [gastos]= useObtenerGastos();
  console.log(gastos);
    const {usuario}=useAuth();
    const navigate=useNavigate();
  useEffect(()=>{
  if (usuario) {
    return
  } else{navigate('/iniciar-sesion')} 
   
    
  })
    return (
         
        <>
        <Helmet>
    <title>Lista de gastos</title>
    </Helmet>
        <Header>
        <BtnRegresar></BtnRegresar>
        <Titulo>Expenses lists</Titulo>
      
       
        </Header>
        <BarraTotalGastado></BarraTotalGastado>
        </> 
        );
}
 
export default ListaDeGastos;