import { Building } from '../types/common';

const BuildingMenu = () => {
  return (
    <div>
      <ul>
        {Object.values(Building).map((building) => (
          <li key={building}>{building}</li>
        ))}
      </ul>
    </div>
  );
};

export default BuildingMenu;
