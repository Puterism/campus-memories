import { BrowserRouter, Link } from 'react-router-dom';
import styles from './App.module.css';
import AsideRoutes from './AsideRoutes';
import PATH from './constants/path';

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <AsideRoutes />
        <section className={styles.mapContainer}>
          {Object.entries(PATH).map(([building, path]) => (
            <Link to={path}>{building}</Link>
          ))}
        </section>
      </div>
    </BrowserRouter>
  );
};

export default App;
