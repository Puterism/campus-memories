import { useContext } from 'react';
import ActiveBuildingContext from '../contexts/ActiveBuildingContext';

const useActiveBuilding = () => {
  const value = useContext(ActiveBuildingContext);

  if (!value) throw new Error('Cannot find ActiveBuildingContextProvider');

  return value;
};

export default useActiveBuilding;
