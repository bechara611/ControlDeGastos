import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WebFont from 'webfontloader'
import Contenedor from './Elementos/Contenedor'
import {Route,Routes,BrowserRouter,NavLink} from 'react-router-dom'
WebFont.load({
  google: {
    families: ['Work Sans:400,500,700', 'Sans-serif']
  }
});
const Index = () => {
  return (
    <Contenedor>
     <App>
     </App> 
   
     </Contenedor>
     );
}
 

ReactDOM.render( <Index />,document.getElementById('root')
);

