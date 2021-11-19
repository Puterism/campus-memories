import cx from 'classnames';
import { ButtonHTMLAttributes } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import styles from './LinkButton.module.css';

type Attributes = Partial<LinkProps> & ButtonHTMLAttributes<HTMLButtonElement>;

interface Props extends Attributes {
  colored?: boolean;
}

const LinkButton = ({ to, children, className, colored = false, ...props }: Props) => {
  if (to) {
    return (
      <Link
        to={to}
        className={cx(styles.linkButton, className, { [styles.colored]: colored })}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={cx(styles.linkButton, className, { [styles.colored]: colored })}
      {...props}
    >
      {children}
    </button>
  );
};

export default LinkButton;
