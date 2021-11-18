import { Link } from 'wouter';
import { BUILDING } from '../../constants/building';
import PATH from '../../constants/path';
import styles from './Menu.module.css';

const Menu = () => {
  return (
    <div className={styles.menuContainer}>
      <Link to={PATH.about}>About</Link>
      <ul className={styles.menu}>
        {Object.entries(BUILDING).map(([building, { name, path }]) => (
          <li className={styles.menuItem} key={building}>
            <Link to={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
