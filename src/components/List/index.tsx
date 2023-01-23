import {} from "../../context/AuthContext";
import { ContainerList } from "./style";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const ListCalculate = () => {
  const { values } = useContext(AuthContext);

  return (
    <ContainerList>
      <div className="formCard">
        <header className="headerList">
          <h4>VOCÊ RECEBERÁ:</h4>
        </header>

        <ul>
          <li className="card">Amanhã: {values["1"]}</li>
          <li className="card">Em 15 dias: {values["15"]}</li>
          <li className="card">Em 30 dias: {values["30"]}</li>
          <li className="card">Em 90 dias: {values["90"]}</li>
        </ul>
      </div>
    </ContainerList>
  );
};

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
