import { Link, LinkProps } from 'react-router-dom';
import styles from './LinkButton.module.css';

type Props = LinkProps;

const LinkButton = ({ children, ...props }: Props) => {
  return (
    <Link className={styles.linkButton} {...props}>
      {children}
    </Link>
  );
};

export default LinkButton;
