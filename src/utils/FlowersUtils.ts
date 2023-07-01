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

export function getFlowers() {
  const result: string[] = [];
  for (let i = 0; i < flowers.length; i++) {
    flowers[i].flower.forEach((e) => {
      if (result.indexOf(e) === -1) result.push(e);
    });
  }

  return result;
}
