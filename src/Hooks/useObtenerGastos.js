import {useState,useEffect} from 'react';
import {db} from './../firebase/FirebaseConfig'
import { collection,addDoc,onSnapshot, where, query, orderBy,limit } from 'firebase/firestore';
import { useAuth } from '../Contextos/AuthContext';

const   useObtenerGastos= () => {
    const [gastos,cambiarGastos]=useState([]);
    const {usuario}=useAuth();

  
    useEffect(()=>{

        const consulta =query(
            collection(db,'gastos'),
            where('uidUsuario','==',usuario.uid),
            orderBy('fecha', 'desc'),
            limit(10)
        )//
        const unsuscribe=onSnapshot(consulta,(snapShot)=>{
            const arregloGastos=snapShot.docs.map((documento)=>{
                return {...documento.data(), id:documento.id}
            })
            cambiarGastos(arregloGastos);
        })

        return unsuscribe;
    },[usuario])
    return [gastos]

    
}
 
export default useObtenerGastos ;