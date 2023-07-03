import flowers from '../API/flowers.json';

export function getTypes() {
  const result: string[] = [];
  for (let i = 0; i < flowers.length; i++) {
    if (result.indexOf(flowers[i].category) === -1) {
      result.push(flowers[i].category);
    }
  }

  return result;
}

export function getOccasions() {
  const result: string[] = [];
  for (let i = 0; i < flowers.length; i++) {
    flowers[i].occasions.forEach((e) => {
      if (result.indexOf(e) === -1) result.push(e);
    });
  }

  return result;
}

interface flowerNumber {
  flower: string;
  number: number;
}

export function getFlowers() {
  const tempFlowers: flowerNumber[] = [];
  const flowerNumber: number[] = [];
  const flowerName: string[] = [];
  for (let i = 0; i < flowers.length; i++) {
    flowers[i].flower.forEach((flower) => {
      if (flowerName.indexOf(flower) === -1) {
        flowerName.push(flower);
        flowerNumber.push(1);
        tempFlowers.push({ flower: flower, number: 1 });
      } else {
        flowerNumber.push(flowerName.indexOf(flower));
        tempFlowers.forEach((el) => {
          if (Object.values(el).indexOf(flower) !== -1) {
            el = { ...el, number: (el.number += 1) };
          }
        });
      }
    });
  }

  const resFlowers = tempFlowers.sort((a, b) => {
    if (a.number < b.number) return 1;
    else return -1;
  });

  const result: string[] = [];
  for (let i = 0; i < 10; i++) {
    result.push(resFlowers[i].flower);
  }

  return result;
}

export function getColors() {
  const result: string[] = [];
  for (let i = 0; i < flowers.length; i++) {
    flowers[i].color.forEach((color) => {
      if (result.indexOf(color) === -1) result.push(color);
    });
  }

  return result;
}

export function getMinPrice() {
  return flowers.reduce((a, b) => (a.price < b.price ? a : b)).price;
}

export function getMaxPrice() {
  return flowers.reduce((a, b) => (a.price > b.price ? a : b)).price;
}

export function getMaxSize() {
  return flowers.reduce((a, b) => (a.size > b.size ? a : b)).size;
}

export function getMinSize() {
  return flowers.reduce((a, b) => (a.size < b.size ? a : b)).size;
}
