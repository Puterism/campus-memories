import { Building } from '../types/common';

export const BUILDING_PATH: Record<Building, string> = {
  [Building.R]: '/r',
  [Building.K]: '/k',
  [Building.L]: '/l',
  [Building.J]: '/j',
  [Building.I]: '/i',
  [Building.G]: '/g',
  [Building.H]: '/h',
  [Building.P]: '/p',
  [Building.Q]: '/q',
  [Building.MH]: '/mh',
  [Building.F]: '/f',
  [Building.E]: '/e',
  [Building.U]: '/u',
  [Building.ABCD]: '/abcd',
  [Building.DORM]: '/dorm',
  [Building.T]: '/t',
  [Building.S]: '/s',
  [Building.Z1]: '/z',
  [Building.Z2Z3]: '/z',
  [Building.Z4]: '/z',
  [Building.M]: '/m',
  [Building.PG]: '/pg',
  [Building.YM]: '/ym',
  [Building.DD]: '/dd',
};

const PATH = {
  root: '/',
  menu: '/menu',
  about: '/about',
  ...BUILDING_PATH,
};

export default PATH;
