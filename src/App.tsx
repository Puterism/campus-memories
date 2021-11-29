import { BrowserRouter } from 'react-router-dom';
import styles from './App.module.css';
import AsideRoutes from './AsideRoutes';
import { ActiveBuildingContextProvider } from './contexts/ActiveBuildingContext';
import CampusMap from './pages/CampusMap/CampusMap';

const App = () => {
  return (
    <BrowserRouter>
      <ActiveBuildingContextProvider>
        <div className={styles.app}>
          <AsideRoutes />
          <CampusMap />
        </div>
      </ActiveBuildingContextProvider>
    </BrowserRouter>
  );
};

export default App;
