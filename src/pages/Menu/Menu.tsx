import cx from 'classnames';
import { Link } from 'react-router-dom';
import closeIconUrl from '../../assets/close.svg';
import LinkButton from '../../components/LinkButton/LinkButton';
import { BUILDING } from '../../constants/building';
import PATH from '../../constants/path';
import styles from './Menu.module.css';

const Menu = () => {
  return (
    <div className={styles.menuContainer}>
      <div className={styles.menuHeader}>
        <Link to={PATH.about} className={cx(styles.menuItemLink, styles.about)}>
          ABOUT
        </Link>
        <LinkButton to={PATH.root}>
          <img src={closeIconUrl} alt="닫기" />
        </LinkButton>
      </div>
      <ul className={styles.menu}>
        {Object.entries(BUILDING).map(([building, { name, path }]) => (
          <li key={building}>
            <Link to={path} className={styles.menuItemLink}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
