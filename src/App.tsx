import { BrowserRouter } from 'react-router-dom';
import styles from './App.module.css';
import AsideRoutes from './AsideRoutes';
import CampusMap from './pages/CampusMap/CampusMap';

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <AsideRoutes />
        <CampusMap />
      </div>
    </BrowserRouter>
  );
};

export default App;
