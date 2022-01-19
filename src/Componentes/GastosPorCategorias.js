import React from 'react'
import { Helmet } from 'react-helmet';
import  {Header,Titulo} from './../Elementos/Header'
import BtnRegresar from '../Elementos/BtnRegresar';
const GastosPorCategoria = () => {
    return ( 
        <>
    <Helmet>
    <title>Expenses</title>
    </Helmet>

    <Header>

    <BtnRegresar></BtnRegresar>
    <Titulo>Expenses by categories</Titulo>

    </Header>
     
    </> 
     );
}
 
export default GastosPorCategoria;