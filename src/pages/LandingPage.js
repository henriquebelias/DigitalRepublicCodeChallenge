import React, { useContext, useState } from "react";
import WallForm from "../components/WallForm";
import { PaintContext } from "../context/PaintContext";
import { cansPossibilities, filterUniqueValue, multipleCansPossibility } from "../utils/calcCanOptions";

const CAN_TYPES = [
  {liters: 0.5, counter: 0},
  {liters: 2.5, counter: 0},
  {liters: 3.6, counter: 0},
  {liters: 18, counter: 0}
];

function LandingPage() {
  const { total } = useContext(PaintContext);
  const [canQtds, setCanQtds] = useState([]);

  const handleCanOptions = () => {
    cansPossibilities(total, CAN_TYPES)
    const canArray = multipleCansPossibility(total, CAN_TYPES);
    setCanQtds(filterUniqueValue(canArray));
  }

  return (
    <>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <WallForm></WallForm>
        <WallForm></WallForm>
        <WallForm></WallForm>
        <WallForm></WallForm>
      </div>
      <p>Total: { total } litros</p>
      <button onClick={ handleCanOptions }>Calcular quantidade de latas</button>
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <div>
          { canQtds && canQtds.map((value) => {
            if (value.cansNeeded) {
              return (
                <div key={ value.liters }>
                  <p>Tamanho da lata: { value.liters }</p>
                  <p>Quantidade necessária: { Math.ceil(value.cansNeeded) } latas</p>
                </div>
              )
            }
            return ''
          }) }
        </div>
        <div>
          { canQtds && canQtds.map((value) => {
            if (value.counter) {
              return (
                <div key={ value.liters }>
                  <p>Tamanho da lata: { value.liters }</p>
                  <p> Quantidade necessária: { value.counter } </p>
                </div>
              )
            }
            return ''
          }) }
        </div>
      </div>
    </>
  )
}

export default LandingPage;
