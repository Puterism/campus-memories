import { Building } from '../types/common';

interface Props {
  building: Building;
}

const Detail = ({ building }: Props) => {
  return <div>{building}</div>;
};

export default Detail;
