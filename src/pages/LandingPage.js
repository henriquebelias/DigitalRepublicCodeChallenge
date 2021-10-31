import React, { useContext, useState } from "react";
import CanOptionsCard from "../components/CanOptionsCard";
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
        <WallForm />
        <WallForm />
        <WallForm />
        <WallForm />
      </div>
      <p>Total: { total } litros</p>
      <button onClick={ handleCanOptions }>Calcular quantidade de latas</button>
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <div>
          { canQtds && canQtds.map((value) => {
            if (value.cansNeeded) {
              return (
                <CanOptionsCard
                  canType={ value.liters }
                  quantity={ Math.ceil(value.cansNeeded) }
                />
              )
            }
            return ''
          }) }
        </div>
        <div>
          { canQtds && canQtds.map((value) => {
            if (value.counter) {
              return (
                <CanOptionsCard canType={ value.liters } quantity={ value.counter } />
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
