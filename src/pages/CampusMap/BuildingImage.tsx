import cx from 'classnames';
import React from 'react';
import imageBackground from '../../assets/images/background.png';
import imageForeground from '../../assets/images/foreground.png';
import styles from './BuildingImage.module.css';

interface Props {
  building: string;
  transform: string;
  width: number;
  height: number;
  d: string;
  href: string;
  activeHref: string;
  active?: boolean;
  pixelated?: boolean;
  onClick?: (event: React.MouseEvent<SVGPathElement>) => void;
}

export const Background = ({ pixelated = false }: { pixelated?: boolean }) => (
  <image
    id="background"
    width="2311"
    height="1300"
    href={imageBackground}
    imageRendering={pixelated ? 'pixelated' : 'auto'}
    pointerEvents="none"
  />
);

export const Foreground = ({ pixelated = false }: { pixelated?: boolean }) => (
  <image
    id="foreground"
    width="2134"
    height="1300"
    transform="translate(49 28)"
    href={imageForeground}
    imageRendering={pixelated ? 'pixelated' : 'auto'}
    pointerEvents="none"
  />
);

const BuildingImage = ({
  building,
  transform,
  width,
  height,
  d,
  href,
  activeHref,
  active = false,
  pixelated,
  onClick,
}: Props) => (
  <g transform={transform}>
    <path
      className={styles.path}
      fillRule="evenodd"
      fill="transparent"
      stroke="red"
      cursor="pointer"
      onClick={onClick}
      d={d}
    />
    <image
      className={styles.active}
      id={`${building}-active`}
      width={width}
      height={height}
      pointerEvents="none"
      href={activeHref}
      imageRendering={pixelated ? 'pixelated' : 'auto'}
    />
    <image
      className={cx(styles.normal, { [styles.hide]: active })}
      id={building}
      width={width}
      height={height}
      pointerEvents="none"
      href={href}
      imageRendering={pixelated ? 'pixelated' : 'auto'}
    />
  </g>
);

export default BuildingImage;
