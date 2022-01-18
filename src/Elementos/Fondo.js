import React from 'react';
import styled from 'styled-components'
import {ReactComponent as Puntos} from './../imagenes/puntos.svg'
const Fondo = () => {
    return ( <>
        <PuntosArriba></PuntosArriba>
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,96L288,0L576,256L864,32L1152,128L1440,160L1440,320L1152,320L864,320L576,320L288,320L0,320Z"></path></Svg>
        <PuntosAbajo></PuntosAbajo>
        
        </> );

}
 
export default Fondo


const Svg = styled.svg`
    height: 50vh;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 0;
    path {
        fill: rgba(135,182,194, .15);
    }
`;
 
const PuntosArriba = styled(Puntos)`
    position: fixed;
    z-index: 1;
    top: 2.5rem; /* 40px */
    left: 2.5rem; /* 40px */
`;
 
const PuntosAbajo = styled(Puntos)`
    position: fixed;
    z-index: 1;
    bottom: 2.5rem; /* 40px */
    right: 2.5rem; /* 40px */
`;