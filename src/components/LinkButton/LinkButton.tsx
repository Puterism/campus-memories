import cx from 'classnames';
import { ButtonHTMLAttributes } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import styles from './LinkButton.module.css';

type Attributes = Partial<LinkProps> & ButtonHTMLAttributes<HTMLButtonElement>;

interface Props extends Attributes {
  primary?: boolean;
  secondary?: boolean;
  transparent?: boolean;
  big?: boolean;
}

const LinkButton = ({
  to,
  children,
  className,
  primary = false,
  secondary = false,
  transparent = false,
  big = false,
  ...props
}: Props) => {
  if (to) {
    return (
      <Link
        to={to}
        className={cx(
          styles.linkButton,
          className,
          { [styles.primary]: primary },
          { [styles.secondary]: secondary },
          { [styles.transparent]: transparent },
          { [styles.big]: big }
        )}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={cx(
        styles.linkButton,
        className,
        { [styles.primary]: primary },
        { [styles.secondary]: secondary },
        { [styles.transparent]: transparent },
        { [styles.big]: big }
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default LinkButton;
