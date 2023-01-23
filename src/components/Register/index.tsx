import {useForm} from 'react-hook-form'

import { useAuthContext } from '../../context/AuthContext';
import { ContainerRegister } from './style';


export interface IRegister {
    amount: number;
    installments: number;
    mdr: number;
   
}

export default function Register() {
    const {registerValue} = useAuthContext();
    const {handleSubmit, register} = useForm<IRegister>();
  

  return (
    <ContainerRegister>

    <div>
        <form className="FormForm" onSubmit={handleSubmit(registerValue)} >
          <div className="Value">
            <header className="headerForm">
              <h2>Simule sua Antecipação</h2>
            </header>
            <div className="number">
              <label htmlFor="vr">Informe o valor da venda *</label>
              <input
                id="vr"
                type="number"
                {...register('amount')}
            />
            </div>
            <div className="number">
              <label htmlFor="parc">Em quantas parcelas *</label>
              <input
                id="parc"
                type="number"
                {...register('installments')}
                />
            </div>
            <div className="number">
              <label htmlFor="perc">Informe o percentual de MDR *</label>
              <input
                id="perc"
                type="number"
                {...register('mdr')}
                />
            </div>
          
            <button className="btnCalc" type="submit">
            Calcular
            </button>
        </div>
        </form>
    </div>
    </ContainerRegister>
      
    
  );
}
