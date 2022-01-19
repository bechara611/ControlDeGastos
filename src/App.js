import React from 'react';
import Boton from './Elementos/Boton';
import { Helmet } from 'react-helmet';
import  {Header,Titulo,ContenedorHeader,ContenedorBotones,HeaderPrincipal} from './Elementos/Header'
const App = () => {
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
    <Boton to=''>X</Boton>
    </ContenedorBotones>
    </ContenedorHeader>
    </Header>
     
    </> 
     );
}
 
export default App;
