import { Link } from 'wouter';
import styles from './App.module.css';
import Routes from './Routes';
import PATH from './constants/path';

const App = () => {
  return (
    <div className={styles.app}>
      <Routes />
      <section className={styles.mapContainer}>
        <ul>
          {Object.entries(PATH).map(([building, path]) => (
            <li key={path}>
              <Link to={path}>{building}</Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default App;
