
import {} from '../../context/AuthContext';
import { ContainerList } from './style';
import { useAuthContext } from '../../context/AuthContext';



export const ListCalculate = () => {
    const { valoresFuturos} = useAuthContext();
   
    console.log("Resultado do calculo:",valoresFuturos)
    
    
    return(
    <ContainerList>

        <div className="formCard">
        <header className="headerList">
        <h4>VOCÊ RECEBERÁ:</h4>
        </header>
        
        <ul>
            <li className="card" >Amanhã: {valoresFuturos.slice(0, 1)}</li>
            <li className="card">Em 15 dias: {valoresFuturos.slice(0, 15)}</li>
            <li className="card">Em 30 dias: {valoresFuturos.slice(0, 30)}</li>
            <li className="card">Em 90 dias: {valoresFuturos.slice(0, 90)}</li>
        </ul>
        

    </div>
    </ContainerList>

    )
}

        /* <div className="card">
            <p>Amanhã:</p>
            <div className="cardValue">
            <span>{`R$0,00`}</span>
            </div>
        </div>
        <div className="card">
            <p>Em 15 dias:</p>
            <div className="cardValue">
            <span>{`R$0,00`}</span>
            </div>
        </div>
        <div className="card">
            <p>Em 30 dias:</p>
            <div className="cardValue">
            <span>{`R$0,00`}</span>
            </div>
        </div>
        <div className="card">
            <p>Em 90 dias:</p>
            <div className="cardValue">
            <span>{`R$0,00`}</span>
            </div>
        </div> */