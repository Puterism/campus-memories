import React from 'react';
import imageBackground from '../../assets/images/background.png';
import imageForeground from '../../assets/images/foreground.png';

interface Props {
  building: string;
  transform: string;
  width: number;
  height: number;
  d: string;
  xlinkHref: string;
  pixelated?: boolean;
  onClick?: (event: React.MouseEvent<SVGPathElement>) => void;
}

export const Background = ({ pixelated = false }: { pixelated?: boolean }) => (
  <image
    id="background"
    width="2311"
    height="1300"
    xlinkHref={imageBackground}
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
    xlinkHref={imageForeground}
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
  xlinkHref,
  pixelated,
  onClick,
}: Props) => (
  <g transform={transform}>
    <image
      id={building}
      width={width}
      height={height}
      pointerEvents="none"
      xlinkHref={xlinkHref}
      imageRendering={pixelated ? 'pixelated' : 'auto'}
    />
    <path
      fillRule="evenodd"
      fill="transparent"
      stroke="red"
      cursor="pointer"
      onClick={onClick}
      d={d}
    />
  </g>
);

export default BuildingImage;
