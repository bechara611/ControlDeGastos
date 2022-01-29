import { onAuthStateChanged } from 'firebase/auth';
import React, { useContext,useState,useEffect } from 'react';
import { auth } from '../firebase/FirebaseConfig';
const AuthContext= React.createContext();


//Hook que llama al contexto
const useAuth=()=>{
    return useContext(AuthContext);
}
const AuthProvider = ({children}) => {
    const [usuario,cambiarUsuario]=useState();
//estado para evitar que las cosas carguen antes de comprobar si hay o no un usuario
    const [cargando,cambiarCargando]=useState(true);


    //comprobar 1 sola vez si hay un usuario activo
    useEffect(()=>{
        //comprobar si hay un usuario activo
       const CancelarSuscripcion= onAuthStateChanged(auth,(usuario)=>{
            cambiarUsuario(usuario);
            cambiarCargando(false);
        })
        return CancelarSuscripcion;
    },[])
    //........................................
    return (
        <AuthContext.Provider value={{usuario:usuario}}>
        { !cargando && children}
        </AuthContext.Provider>

      );
}
 
export  {AuthProvider,AuthContext,useAuth};