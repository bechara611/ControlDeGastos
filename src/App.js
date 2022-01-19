import React,{useState} from 'react';





const App = () => {
  let matriz = [[]];
matriz[0][0]=14;
 
const [matrizEstado, setToody] = useState([
  [1,2,3],
  [4,5,6]
]
)



  return ( 
    <>
      <h2>{matrizEstado[0][0]}</h2>
      <button onClick={()=>{setToody(matriz)}}>Boton</button>
    </> 
     );
}
 
export default App;
