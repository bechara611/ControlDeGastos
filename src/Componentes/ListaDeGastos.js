import React,{useContext,useEffect,useState} from 'react'
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
import {fromUnixTime,format} from 'date-fns'
import BorrarDocumento from '../firebase/BorrarGasto';

const ListaDeGastos = () => {
  const [gastos,ObtenerMasGastos,hayMasPorCargar]= useObtenerGastos();
  const [gastoTOTAL, cambiargastoTOTAL] = useState(0);
 

  const totaal = () => {
     let numero=0;
    let i=0;
    gastos.forEach(element => {
   //  console.log(gastos[i].cantidad)
   numero=numero+gastos[i].cantidad
   // console.log(numero)
     i++
     });
     cambiargastoTOTAL(numero);
    
      }
useEffect(()=>{
  totaal();
},[gastos])
  const formatearfecha=(fecha)=>{
    return format(fromUnixTime(fecha),"dd/MM/yyyy");
  }
  const fechaesigual = (gastos,index,gasto) => {
    if (index!==0)
     {
       const fechaactual=formatearfecha(gasto.fecha);
       const fechaanterior=formatearfecha(gastos[index-1].fecha);
      if (fechaactual===fechaanterior){
        return true;
      }
     }
    
    
  }
   
  

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
        {gastos.map((gasto,index)=>{
          return (
            <>
            <>
            {!fechaesigual(gastos,index,gasto) && <Fecha>{formatearfecha(gasto.fecha)}</Fecha> }
            
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
            <BotonAccion onClick={()=>{
              BorrarDocumento(gasto.id)
            }}><IconoBorrar></IconoBorrar></BotonAccion>
            </ContenedorBotones>
            
            </ElementoLista>
            </>
         
            </>
          );
        })}

        {hayMasPorCargar && 
          <ContenedorBotonCentral>
          <BotonCargarMas onClick={()=>ObtenerMasGastos()}>Load more</BotonCargarMas>
          </ContenedorBotonCentral>
        }
       
       
        {gastos.length===0 && 
        <ContenedorSubtitulo>
        <Subtitulo>Empty</Subtitulo>
        <Boton as={Link} to='/'>Agregar gasto</Boton>
        </ContenedorSubtitulo>
        }
        </Lista>
        <BarraTotalGastado gastoTOTAL={gastoTOTAL}></BarraTotalGastado>
        </> 
        );
}
 
export default ListaDeGastos;