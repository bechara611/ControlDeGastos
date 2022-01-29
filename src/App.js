import React, { useEffect } from 'react';
import Boton from './Elementos/Boton';
import { Helmet } from 'react-helmet';
import  {Header,Titulo,ContenedorHeader,ContenedorBotones,HeaderPrincipal} from './Elementos/Header'
import BotonCerrarSesion from './Elementos/BotonCerrarSesion'
import { auth } from './firebase/FirebaseConfig';
import { useAuth } from './Contextos/AuthContext';
import { useNavigate } from 'react-router-dom';


const App = () => {
  const {usuario}=useAuth();
  const navigate= useNavigate();
  console.log(usuario);
  useEffect(()=>{
  if (usuario) {
    return
  } else{navigate('/iniciar-sesion')} 
   
    
  })
  return ( 
    <>
  
    <Helmet>
    <title>Agregar gastos</title>
    </Helmet>
    <Header>
    <ContenedorHeader>
    <Titulo>Add expenses</Titulo>
    <ContenedorBotones>
    <Boton to='/categorias'>Categories</Boton>
    <Boton to='/lista'>Expenses List</Boton>
    <BotonCerrarSesion></BotonCerrarSesion>
    </ContenedorBotones>
    </ContenedorHeader>
    </Header>
   
    </> 
     );
}
 
export default App;
