import React, { useContext, useState } from "react";
import { Button } from "../components/Button.sc";
import CanOptionsCard from "../components/CanOptionsCard";
import WallForm from "../components/WallForm";
import { PaintContext } from "../context/PaintContext";
import { cansPossibilities, filterUniqueValue, multipleCansPossibility } from "../utils/calcCanOptions";
import { IndividualCanDiv, MiddleSection, MultipleCansDiv, OptionsContainer, WallSelectionGroup } from "./LandingPage.sc";

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
      <WallSelectionGroup>
        <WallForm />
        <WallForm />
        <WallForm />
        <WallForm />
      </WallSelectionGroup>

      <MiddleSection>
        <h4>Total: { total } litros</h4>

        <Button onClick={ handleCanOptions }>Calcular quantidade de latas necessárias</Button>
      </MiddleSection>

      <OptionsContainer>

        <IndividualCanDiv>
          <p>Opção 1: Latas do mesmo tamanho</p>
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
        </IndividualCanDiv>

        <MultipleCansDiv>
          <p>Opção 2: Multiplas latas</p>
          { canQtds && canQtds.map((value) => {
            if (value.counter) {
              return (
                <CanOptionsCard canType={ value.liters } quantity={ value.counter } />
              )
            }
            return ''
          }) }
        </MultipleCansDiv>

      </OptionsContainer>

    </>
  )
}

export default LandingPage;
