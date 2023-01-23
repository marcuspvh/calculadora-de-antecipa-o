// import {createContext, ReactNode, useContext, useEffect ,useState} from 'react';
// import { IRegister } from '../components/Register';


// interface ICalculate {
//     valoresFuturos:number[]
// }


// interface ICalculateProviderProps {
//     children: ReactNode
// }

// interface ICalculateContext {
//     calculate(data: ICalculate): void;
//     values: IRegister;
//     valoresFuturos: number[];
// }


// const CalculateContext = createContext<ICalculateContext>({} as ICalculateContext);

export const CalculateProvider = () => {
    // const {values} = useAuthContext();
    // const [valoresFuturos, setValoresFuturos] = useState([]);
   
    // console.log(values.amount)
    
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

    
    
    return(
        <>
        </>
        // < CalculateContext.Provider value={
        //     {
        //         calculate,
        //         valoresFuturos,
        //         values
        //     }}  >
        //     {children}
        // </CalculateContext.Provider>
    )

}

// export const useAuth = () => useContext(CalculateContext);

// export function useAuthContext():ICalculateContext{
//     const contextCalculate = useContext(CalculateContext)

//     return contextCalculate
// }