import { Routes, Route } from 'react-router-dom';
import PATH from './constants/path';
import About from './pages/About/About';
import Detail from './pages/Detail/Detail';
import Menu from './pages/Menu/Menu';
import { Building } from './types/common';

const routes = {
  [PATH.menu]: <Menu />,
  [PATH.about]: <About />,
  [PATH[Building.R]]: <Detail building={Building.R} />,
  [PATH[Building.K]]: <Detail building={Building.K} />,
  [PATH[Building.L]]: <Detail building={Building.L} />,
  [PATH[Building.J]]: <Detail building={Building.J} />,
  [PATH[Building.I]]: <Detail building={Building.I} />,
  [PATH[Building.G]]: <Detail building={Building.G} />,
  [PATH[Building.H]]: <Detail building={Building.H} />,
  [PATH[Building.P]]: <Detail building={Building.P} />,
  [PATH[Building.Q]]: <Detail building={Building.Q} />,
  [PATH[Building.MH]]: <Detail building={Building.MH} />,
  [PATH[Building.F]]: <Detail building={Building.F} />,
  [PATH[Building.E]]: <Detail building={Building.E} />,
  [PATH[Building.U]]: <Detail building={Building.U} />,
  [PATH[Building.ABCD]]: <Detail building={Building.ABCD} />,
  [PATH[Building.DORM]]: <Detail building={Building.DORM} />,
  [PATH[Building.T]]: <Detail building={Building.T} />,
  [PATH[Building.S]]: <Detail building={Building.S} />,
  [PATH[Building.Z1]]: <Detail building={Building.Z1} />,
  [PATH[Building.Z2Z3]]: <Detail building={Building.Z2Z3} />,
  [PATH[Building.Z4]]: <Detail building={Building.Z4} />,
  [PATH[Building.M]]: <Detail building={Building.M} />,
  [PATH[Building.PG]]: <Detail building={Building.PG} />,
  [PATH[Building.YM]]: <Detail building={Building.YM} />,
  [PATH[Building.DD]]: <Detail building={Building.DD} />,
};

const AsideRoutes = () => {
  return (
    <Routes>
      {Object.entries(routes).map(([path, component]) => (
        <Route key={path} path={path} element={component} />
      ))}
    </Routes>
  );
};

export default AsideRoutes;
