import flowers from "../API/flowers.json";

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
    flowers[i].flower.forEach((e) => {
      if (flowerName.indexOf(e) === -1) {
        flowerName.push(e);
        flowerNumber.push(1);
        tempFlowers.push({ flower: e, number: 1 });
      } else {
        flowerNumber.push(flowerName.indexOf(e));
        tempFlowers.forEach((el) => {
          if (Object.values(el).indexOf(e) !== -1) {
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
