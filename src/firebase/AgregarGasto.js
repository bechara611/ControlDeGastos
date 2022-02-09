import { collection,addDoc } from 'firebase/firestore';
import {db,app} from './FirebaseConfig'


const agregarGasto = async ({descripcion,cantidad,categoria,fecha,uidUsuario}) => {
    try {
        await addDoc(collection(db,'gastos'),{
            uidUsuario:uidUsuario,
            categoria:categoria,
            descripcion:descripcion,
            cantidad:Number(cantidad),
            fecha:fecha,
            
             })
    } catch (error) {
        console.log(error)
    }
  
        
}
 
export default agregarGasto;