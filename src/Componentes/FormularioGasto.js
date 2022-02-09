import React,{useState,useEffect} from 'react';
import {ContenedorFiltros,Formulario,Input,InputGrande,ContenedorBoton} from './../Elementos/ElementosDelFormulario'
import Boton from './../Elementos/Boton'
import {ReactComponent as Iconoplus} from './../imagenes/plus.svg'
import SelectCategorias from './SelectCategorias';
import DatePicker from './DatePicker';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Contextos/AuthContext';
import agregarGasto from '../firebase/AgregarGasto';
import fromUnixTime from 'date-fns/fromUnixTime'
import getUnixTime from 'date-fns/getUnixTime'
import Alerta from '../Elementos/Alerta';
//import {storage,storageRef} from '../firebase/FirebaseConfig'
import { getStorage, ref, uploadBytes,uploadBytesResumable,getDownloadURL } from "firebase/storage";
import { storageRef } from '../firebase/FirebaseConfig';

const FormularioGasto = () => {


  const uploadImage2=()=>{

  
const storage = getStorage();
const storageRef = ref(storage, `images/${NombreImagen}`);

const uploadTask = uploadBytesResumable(storageRef, Imagen);

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
 uploadTask.on('state_changed',
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
    case 'paused':
    console.log('Upload is paused');
    break;
    case 'running':
    console.log('Upload is running');
    break;
    }
  },
  (error) => {
    console.log(error)
  },
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
    });
  }
);
  }
    const {usuario}=useAuth();
    const navigate=useNavigate();
    
  useEffect(()=>{
  if (usuario) {
    return
  } else{navigate('/iniciar-sesion')} 
   
    
  })
    const [inputDescripcion,cambiarInputDescripcion]=useState('');
    const [inputCantidad,cambiarInputCantidad]=useState('');
    const [categoria,cambiarCategoria]=useState('Home');
    const [fecha,cambiarFecha]=useState(new Date());
    const [estadoAlerta,cambiarEstadoAlerta]=useState(false);
    const [alerta,cambiarAlerta]=useState({});
    const [Imagen, setImagen] = useState();
    const [NombreImagen, setNombreImagen] = useState();

    const handleChange=(e)=>{
        switch (e.target.name) {
            case 'descripcion':
                cambiarInputDescripcion(e.target.value);
                break;
                case 'cantidad':
                    cambiarInputCantidad(e.target.value.replace(/[^0-9.]/g,''));
                    break;
            default:
                break;
        }
    }

    const handleSubmit=async(e)=>{
     
      try {
        e.preventDefault();
        let cantidadFloat= parseFloat(inputCantidad).toFixed(2);
        //comprobar validaciones
        if (inputDescripcion!=='' && inputCantidad !=='') 
        {
          if (cantidadFloat) {
            console.log(inputDescripcion,inputCantidad,categoria,fecha);
            await agregarGasto({
                uidUsuario:usuario.uid,
                categoria:categoria,
                descripcion:inputDescripcion,
                cantidad:cantidadFloat,
                fecha:getUnixTime(fecha)
            }) 
            cambiarAlerta({tipo:'exito',mensaje:'Success',})
            cambiarEstadoAlerta(true);
            cambiarInputDescripcion('');
            cambiarInputCantidad('');
            cambiarFecha(new Date());
            

          }else
          {
          cambiarAlerta({tipo:'error',mensaje:'El valor no es correcto',})
          cambiarEstadoAlerta(true);
          }
         
        }else 
        {
          cambiarAlerta({tipo:'error',mensaje:'Por favor complete los campos',})
          cambiarEstadoAlerta(true);
        }
        
      } catch (error) {
        cambiarAlerta({tipo:'error',mensaje:'Error:' + error,})
          cambiarEstadoAlerta(true);
      }
        
        
     
    }

   

    const changeImagen = async (e) => {
    
      setImagen(e.target.files[0]);
       console.log(e.target.files[0].name);
       setNombreImagen(e.target.files[0].name)
  }


    return ( 
        
        <Formulario onSubmit={handleSubmit}>
            <ContenedorFiltros>
            <SelectCategorias cambiarCategoria={cambiarCategoria} categoria={categoria}></SelectCategorias>
            <DatePicker fecha={fecha} cambiarFecha={cambiarFecha}></DatePicker>
            </ContenedorFiltros>
            <div>
            <Input 
            type='text' 
            name='descripcion' 
            placeholder='Description' 
            id='descripcion'
            value={inputDescripcion}
            onChange={handleChange}>
            
            </Input>
            <InputGrande type='text'
             name='cantidad'
              id='cantidad' 
              placeholder='0.00$'
              value={inputCantidad}
              onChange={handleChange}>
            </InputGrande>
            <input type="file" name="imagen" onChange={(e)=>{changeImagen(e)}} />
            <button onClick={uploadImage2} >GUARDAR IMAGEN</button>
            </div>
            <ContenedorBoton><Boton as='button' primario conIcono type='submit'>
            Add expense<Iconoplus/>
            </Boton></ContenedorBoton>
           
            <Alerta
     tipo={alerta.tipo}
     mensaje={alerta.mensaje}
     estadoAlerta={estadoAlerta}
     cambiarEstadoAlerta={cambiarEstadoAlerta}
      >
      </Alerta>
        </Formulario>
        
     );
}
 
export default FormularioGasto;