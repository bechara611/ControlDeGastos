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

const FormularioGasto = () => {
  //  import { useNavigate } from 'react-router-dom';
//import { useAuth } from '../Contextos/AuthContext';
    const {usuario}=useAuth();
    const navigate=useNavigate();
  useEffect(()=>{
  if (usuario) {
    return
  } else{navigate('/iniciar-sesion')} 
   
    
  })
    const [inputDescripcion,cambiarInputDescripcion]=useState('');
    const [inputCantidad,cambiarInputCantidad]=useState('');
    const [categoria,cambiarCategoria]=useState('hogar');
    const [fecha,cambiarFecha]=useState(new Date());
    const [estadoAlerta,cambiarEstadoAlerta]=useState(false);
    const [alerta,cambiarAlerta]=useState({});
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