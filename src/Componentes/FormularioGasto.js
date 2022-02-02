import React,{useState,useEffect} from 'react';
import {ContenedorFiltros,Formulario,Input,InputGrande,ContenedorBoton} from './../Elementos/ElementosDelFormulario'
import Boton from './../Elementos/Boton'
import {ReactComponent as Iconoplus} from './../imagenes/plus.svg'
import SelectCategorias from './SelectCategorias';
import DatePicker from './DatePicker';

const FormularioGasto = () => {
    const [inputDescripcion,cambiarInputDescripcion]=useState('');
    const [inputCantidad,cambiarInputCantidad]=useState('');
    const [categoria,cambiarCategoria]=useState('hogar');
    const [fecha,cambiarFecha]=useState(new Date());
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

    const handleSubmit=(e)=>{
        e.preventDefault();
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
            Agregar Gasto<Iconoplus/>
            </Boton></ContenedorBoton>
        </Formulario>
        
     );
}
 
export default FormularioGasto;