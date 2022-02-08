import {useState,useEffect} from 'react';
import {db} from './../firebase/FirebaseConfig'
import { collection,addDoc,onSnapshot, where, query, orderBy,limit } from 'firebase/firestore';
import { useAuth } from '../Contextos/AuthContext';

const   useObtenerGastos= () => {
    const [gastos,cambiarGastos]=useState([]);
    const {usuario}=useAuth();

    const consulta =query(
        collection(db,'gastos'),
        where('uidUsuario','==',usuario.uid),
        orderBy('fecha', 'desc'),
        limit(10)
    )
  
    useEffect(()=>{
        const unsuscribe=onSnapshot(collection(db,'gastos'),(snapShot)=>{
            const arregloGastos=snapShot.docs.map((documento)=>{
               // console.log(snapShot)
                return {...documento.data(), id:documento.id}
                
            });
           cambiarGastos(arregloGastos);
        },(error)=>{console.log(error)})

        return unsuscribe;
    },[usuario])
    return [gastos]
}
 
export default useObtenerGastos ;