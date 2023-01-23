import {createContext, ReactNode, useContext, useEffect,useState} from 'react';
import { IRegister } from '../components/Register';



interface IAuthProviderProps {
    children: ReactNode
}

interface ICalculate {
    valorVenda:number;
    parcelas:number;
    percentual: number;
    valoresFuturos:number[]
}



interface IAuthContext {
    registerValue(data: IRegister): void;
    values: IRegister
    Calculate(data: ICalculate): void;
    valoresFuturos: number[];
}





const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({children}:IAuthProviderProps) => {
    const [values, setValues] = useState<IRegister>({} as IRegister)
    
    const [valoresFuturos, setValoresFuturos] = useState([]);


    function registerValue(data: IRegister): void {
    const newValue = data

    setValues(newValue)
    console.log(values)
}

const Calculate = (data: ICalculate):void => {
    
    let valorVenda = values.amount
    let percentual = values.mdr
    let parcelas = values.installments/30
    
    console.log(parcelas)

    useEffect(() => {
        const valorDiario = (valorVenda * (1 + (percentual / 100)) ** (parcelas));
        
        let newValoresFuturos = []
        for (let i = 0; i < parcelas; i++) {
            newValoresFuturos.push(valorDiario * (i+1));
        }
        setValoresFuturos(valoresFuturos);
    }, [valorVenda, parcelas, percentual]);   
    
};


  
 
      
      console.log(valoresFuturos)

    return(

        < AuthContext.Provider value={
            {
                registerValue, 
                values,
                Calculate,
                valoresFuturos
            }}  >
            {children}
        </AuthContext.Provider>
    )

}



export function useAuthContext():IAuthContext{
    const context = useContext(AuthContext)

    return context
}