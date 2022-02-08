import React,{useEffect} from 'react'
import { Helmet } from 'react-helmet';
import  {Header,Titulo} from './../Elementos/Header'
import BtnRegresar from '../Elementos/BtnRegresar';
import { useAuth } from '../Contextos/AuthContext';
import { useNavigate } from 'react-router-dom';
import BarraTotalGastado from './BarraTotalGastado';

const GastosPorCategoria = () => {
    
    const {usuario}=useAuth();
    const navigate=useNavigate();
    useEffect(()=>{
        if (usuario) {
            return
        }else{navigate('/iniciar-sesion')}
    });

    return ( 
        <>
    <Helmet>
    <title>Expenses</title>
    </Helmet>

    <Header>

    <BtnRegresar></BtnRegresar>
    <Titulo>Expenses by categories</Titulo>

    </Header>
     <BarraTotalGastado></BarraTotalGastado>
    </> 
     );
}
 
export default GastosPorCategoria;