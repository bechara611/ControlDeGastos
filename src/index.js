import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WebFont from 'webfontloader'
import Contenedor from './Elementos/Contenedor'
import {Route,Routes,BrowserRouter,NavLink} from 'react-router-dom'
import InicioSesion from './Componentes/InicioSesion';
import EditarGastos from './Componentes/EditarGastos';
import GastosPorCategorias from './Componentes/GastosPorCategorias';
import ListaDeGastos from './Componentes/ListaDeGastos';
import RegistroUsuarios from './Componentes/RegistroUsuarios';
import {Helmet} from 'react-helmet';
import favicon from './imagenes/logo.png';
import Fondo from './Elementos/Fondo'
import Header from './Elementos/Header';

WebFont.load({
  google: {
    families: ['Work Sans:400,500,700', 'Sans-serif']
  }
});
const Index = () => {
  return (
    <>
    <Helmet>
    <link rel="shortcut icon" href={favicon} type="image/x-icon"/>
    </Helmet>
    <BrowserRouter>
    <Contenedor>
    <Routes>
     <Route path='/iniciar-sesion' element={<InicioSesion/>}></Route>
    <Route path='/crear-cuenta' element={<RegistroUsuarios/>}/ >
    <Route path='/categorias' element={<GastosPorCategorias/>}/ >
    <Route path='/lista' element={<ListaDeGastos/>}/ >
    <Route path='/editar/:id' element={<EditarGastos/>}/ >
    <Route path='/' element={<App/>}/ >
    <Route path='/*' element={<App/>}/ >
    </Routes>  
     </Contenedor>
     </BrowserRouter>
     <Fondo></Fondo>
     </>
     );
}
 

ReactDOM.render( <Index />,document.getElementById('root')
);

