export const cansPossibilities = (liters, cans) => {
  for (let index = 0; index < cans.length; index += 1) {
    if (cans[index]['liters'] <= liters) {
      cans[index]['cansNeeded'] = liters / cans[index]['liters'];
    }
  }

  return cans;
}

export const multipleCansPossibility = (liters, cans) => {
  const currentPosition = cans[cans.length - 1];

  if (liters < 0) {
    return cans;
  }

  if (liters - currentPosition['liters'] < 0 && cans.length === 1) {
    currentPosition['counter'] += 1;

    return cans;
  } else if (currentPosition['liters'] > liters) {
    return multipleCansPossibility(liters, cans.slice(0, -1));
  } else if (liters - currentPosition['liters'] < 0) {
    return multipleCansPossibility(liters, cans.slice(0, -1));
  } else {
    liters -= currentPosition['liters'];
    currentPosition['counter'] += 1;

    return cans.concat(multipleCansPossibility(liters, cans));
  }
}

export const filterUniqueValue = (array) => {
  const output = [];

  for (let index = 0; index < array.length; index += 1) {
    if (!output.includes(array[index])) {
      output.push(array[index]);
    }
  }

  return output;
}
