import cx from 'classnames';
import { ButtonHTMLAttributes } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import styles from './LinkButton.module.css';

type Props = Partial<LinkProps> & ButtonHTMLAttributes<HTMLButtonElement>;

const LinkButton = ({ to, children, className, ...props }: Props) => {
  if (to) {
    return (
      <Link to={to} className={cx(styles.linkButton, className)} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={cx(styles.linkButton, className)} {...props}>
      {children}
    </button>
  );
};

export default LinkButton;
