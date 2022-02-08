import React,{useContext,useEffect} from 'react'
import Boton from './../Elementos/Boton';
import { Helmet } from 'react-helmet';
import BtnRegresar from '../Elementos/BtnRegresar';
import { AuthContext } from '../Contextos/AuthContext';
import  {Header,Titulo,ContenedorHeader,HeaderPrincipal} from './../Elementos/Header'
import { useAuth } from '../Contextos/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import BarraTotalGastado from './BarraTotalGastado';
import useObtenerGastos from '../Hooks/useObtenerGastos';
import { Lista, ElementoLista, ListaDeCategorias,ElementoListaCategorias,ContenedorBotones,Categoria,Descripcion,Valor,Fecha,BotonAccion,BotonCargarMas,ContenedorBotonCentral,ContenedorSubtitulo,Subtitulo } from '../Elementos/ElementosDeLista';
import IconoCategoria from '../Elementos/IconoCategoria';
import FormatearCantidad from '../Funciones/ConvertirMoneda';
import {ReactComponent as IconoEditar} from './../imagenes/editar.svg'
import {ReactComponent as IconoBorrar} from './../imagenes/borrar.svg'

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
        <Lista>
        {gastos.map((gasto)=>{
          return (
            <>
            <ElementoLista key={gasto.id}>
            <Categoria>
            <IconoCategoria
             id={gasto.categoria}
            />
            {gasto.categoria}
            </Categoria>
            <Descripcion>{gasto.descripcion}</Descripcion>
            <Valor>{FormatearCantidad(gasto.cantidad)}</Valor>
            <ContenedorBotones>
            <BotonAccion as={Link} to={`/editar/${gasto.id}`}><IconoEditar></IconoEditar></BotonAccion>
            <BotonAccion><IconoBorrar></IconoBorrar></BotonAccion>
            </ContenedorBotones>
            
            </ElementoLista>
            </>
          );
        })}
        <ContenedorBotonCentral>
        <BotonCargarMas>Load more</BotonCargarMas>
        </ContenedorBotonCentral>
        {gastos.length===0 && 
        <ContenedorSubtitulo>
        <Subtitulo>Empty</Subtitulo>
        <Boton as={Link} to='/'>Agregar gasto</Boton>
        </ContenedorSubtitulo>
        }
        </Lista>
        <BarraTotalGastado></BarraTotalGastado>
        </> 
        );
}
 
export default ListaDeGastos;