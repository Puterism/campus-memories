export enum Building {
  R = 'R',
  K = 'K',
  L = 'L',
  J = 'J',
  I = 'I',
  G = 'G',
  H = 'H',
  P = 'P',
  Q = 'Q',
  MH = 'MH',
  F = 'F',
  E = 'E',
  U = 'U',
  ABCD = 'ABCD',
  DORM = 'DORM', // 제2기숙사,
  T = 'T',
  S = 'S',
  Z = 'Z',
  M = 'M',
  PG = 'PG', // 운동장,
  YM = 'YM', // 영원한 미소,
  DD = 'DD', // 동땡
}

export interface Comment {
  id: string;
  text: string;
  building: Building;
  createdAt: Date;
}
