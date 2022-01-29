import React from 'react';
import {ReactComponent as IconoCerrarSesion} from './../imagenes/log-out.svg';
import Boton from './Boton';
import { auth } from '../firebase/FirebaseConfig';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
const BotonCerrarSesion = () => {
  const navigate=useNavigate();
    const CerrarSesion = async () => {
       try {
        await signOut(auth);
        navigate('/iniciar-sesion');

       } catch (error) {
           console.log(error);
       }
      
    }
     
 
    return ( 
        <Boton iconoGrande as="button" onClick={()=>{
            CerrarSesion();
        }}>
        <IconoCerrarSesion></IconoCerrarSesion>
        </Boton>
     );
}
 
export default BotonCerrarSesion;