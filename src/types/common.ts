export enum Building {
  R = 'R',
  K = 'K',
  P = 'P',
}

export interface Comment {
  id: string;
  text: string;
  building: Building;
  createdAt: Date;
}
