import React, { useContext } from "react";
import WallForm from "../components/WallForm";
import { PaintContext } from "../context/PaintContext";

function LandingPage() {
  const { total } = useContext(PaintContext);
  return (
    <>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <WallForm></WallForm>
        <WallForm></WallForm>
        <WallForm></WallForm>
        <WallForm></WallForm>
      </div>
      <p>Total: { total }</p>
      <p>Opções de lata de tinta</p>
      <p>0,5 litros</p>
      <p>2,5 litros</p>
      <p>3,6 litros</p>
      <p>18 litros</p>
    </>
  )
}

export default LandingPage;
