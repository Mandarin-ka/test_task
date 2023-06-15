import arr from "./../data/flowers.json";
import { IFlower } from "./../data/IFlowers";

interface FlowersService {
  getFlowers(): IFlower[];
}

class FlowersService {
  static getFlowers() {
    return arr;
  }
}

export default FlowersService;
