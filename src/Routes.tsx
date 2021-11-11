import { Route, Switch } from 'wouter';
import styles from './App.module.css';
import PATH from './constants/path';
import BuildingMenu from './pages/BuildingMenu';
import Detail from './pages/Detail/Detail';
import { Building } from './types/common';

const routes = {
  [PATH.menu]: <BuildingMenu />,
  [PATH[Building.R]]: <Detail building={Building.R} />,
  [PATH[Building.K]]: <Detail building={Building.K} />,
  [PATH[Building.P]]: <Detail building={Building.P} />,
};

const Routes = () => {
  return (
    <Switch>
      {Object.entries(routes).map(([path, component]) => (
        <Route key={path} path={path}>
          <aside className={styles.aside}>{component}</aside>
        </Route>
      ))}
    </Switch>
  );
};

export default Routes;
