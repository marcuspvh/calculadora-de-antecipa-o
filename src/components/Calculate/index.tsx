// import { useEffect, useState} from 'react';
// import { useAuthContext,  } from '../../context/AuthContext';


// interface ICalculate {
    
//     calculate = ():void
   
// }


export default function Calculate(){
    // const {values} = useAuthContext();
    // const [valoresFuturos, setValoresFuturos] = useState([]);
    
    // const calculate = ():void => {

    //     let valorVenda = values.amount
    //     let percentual = values.mdr
    //     let parcelas = values.installments


    //     const valorDiario = (valorVenda * (1 + (percentual / 100)) ** (parcelas/30));
    //     let newValoresFuturos = []
    //     for (let i = 0; i < 30; i++) {
    //         newValoresFuturos.push(valorDiario * (i+1));
    //     }
    //     setValoresFuturos(valoresFuturos);
    // };

      
    //     useEffect(() => {
    //         return () => {
    //           setValoresFuturos([]);
    //         }
    //       },[]);
     
          return (
            <ul>
                {/* {valoresFuturos.map((valor, index) => (
                    <li key={index}>{valor}</li>
                ))} */}
            </ul>
            
            
       
          )
      
    };

  