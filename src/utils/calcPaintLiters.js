const WINDOW_AREA = 2 * 1.2;
const DOOR_AREA = 0.8 * 1.9;

const calcWallArea = (height, width, hasDoor, hasWindow) => {
  if (hasDoor && height <= 2.2) {
    throw new Error('Altura da parede inválida');
  }

  if (hasWindow &&  width < 2) {
    throw new Error('Largura da parede inválida');
  }

  return height * width;
}

const calcPaitableArea = (windowQtd, doorQtd, wallArea) => {
  const windowAndDoorArea = (WINDOW_AREA * windowQtd) + (DOOR_AREA * doorQtd);

  return { paintableArea: wallArea - windowAndDoorArea, windowAndDoorArea };
}

const doorAndWindowAreaCheck = (windowQtd, doorQtd, wallArea) => {
  if (wallArea < 1 || wallArea > 15) {
    throw new Error('Área da parede inválida');
  }

  const { windowAndDoorArea, paintableArea } = calcPaitableArea(windowQtd, doorQtd, wallArea);

  if (windowAndDoorArea >= wallArea * 0.5) {
    throw new Error('Área da porta e parade inválidas');
  }

  return paintableArea;
}

const paintLitersNeeded = (paintableArea) => paintableArea / 5;

const calcPaintLiters = (wallHeigth, wallWidth, windowQtd, doorQtd, hasDoor, hasWindow) => {
  const wallArea = calcWallArea(wallHeigth, wallWidth, hasDoor, hasWindow);
  const paintableArea = doorAndWindowAreaCheck(windowQtd, doorQtd, wallArea);

  return paintLitersNeeded(paintableArea);
}

export default calcPaintLiters;
