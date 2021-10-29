import React, { useState, useContext } from 'react';
import { PaintContext } from '../context/PaintContext';
import calcPaintLiters from '../utils/calcPaintLiters';

const INITIAL_STATE = {
  wallHeigth: 0,
  wallWidth: 0,
  doorQuantity: 0,
  windowQuantity: 0
};

function WallForm() {
  const [hasDoor, setHasDoor] = useState(false);
  const [hasWindow, setHasWindow] = useState(false);
  const [wallOptions, setWallOptions] = useState(INITIAL_STATE);
  const [errorMsg, setErrorMsg] = useState('');
  const { calcTotal, wallHeigth, updateHeigth } = useContext(PaintContext);

  const handleState = ({ target: { name, value } }) => setWallOptions({
    ...wallOptions,
    [name]: +value,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const litersNeeded = calcPaintLiters(
        wallHeigth,
        wallOptions['wallWidth'],
        wallOptions['windowQuantity'],
        wallOptions['doorQuantity'],
        hasDoor,
        hasDoor
      )

      calcTotal(litersNeeded);
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  return (
    <div style={{display: 'flex', flexDirection:"column"}}>
      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="wallHeigth">Informe a altura da parede: </label>
          <input
            type="number"
            id="wallHeigth"
            name="wallHeigth"
            value={ wallHeigth }
            onChange={ updateHeigth }
          />
        </div>

        <div>
          <label htmlFor="wallWidth">Informe a largura da parede: </label>
          <input
            type="number"
            id="wallWidth"
            name="wallWidth"
            value={ wallOptions['wallWidth'] }
            onChange={ handleState } />
        </div>

        <div>
          <label htmlFor="hasDoor">A parede possuí porta?</label>
          <input
            type="checkbox"
            id="hasDoor"
            name="hasDoor"
            value={ hasDoor }
            onChange={ () => setHasDoor(!hasDoor) }
          />
        </div>

        <div>
          <label htmlFor="hasWindow">A parede possuí janela?</label>
          <input
            type="checkbox"
            id="hasWindow"
            name="hasWindow"
            value={ hasWindow }
            onChange={ () => setHasWindow(!hasWindow) }
          />
        </div>

        { hasDoor && (
          <div>
            <label htmlFor="doorQuantity">Informe a quantidade de portas: </label>
            <input
              type="number"
              id="doorQuantity"
              name="doorQuantity"
              value={ wallOptions['doorQuantity'] }
              onChange={ handleState }
            />
          </div>
        ) }

        { hasWindow && (
          <div>
            <label htmlFor="windowQuantity">Informe a quantidade de janelas: </label>
            <input
              type="number"
              id="windowQuantity"
              name="windowQuantity"
              value={ wallOptions['windowQuantity'] }
              onChange={ handleState }
            />
          </div>
        ) }

        <button type="submit">Enviar Valores</button>

      </form>
      { errorMsg && <span>{ errorMsg }</span> }
    </div>
  )
}

export default WallForm;
