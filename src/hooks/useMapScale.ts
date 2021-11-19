import { useLayoutEffect, useState } from 'react';
import CAMPUS_MAP from '../constants/campusMap';
import { MapStatus } from '../types/common';
import useWindowSize from './useWindowSize';

interface Params {
  mapStatusState: [MapStatus, React.Dispatch<React.SetStateAction<MapStatus>>];
  containerRef: React.RefObject<HTMLElement>;
}

const useMapScale = ({ mapStatusState }: Params) => {
  const [, setMapStatus] = mapStatusState;
  const [initialScale, setInitialScale] = useState(1);
  const windowSize = useWindowSize();

  const onWheel = (event: React.WheelEvent<SVGSVGElement>) => {
    setMapStatus((prevStatus) => {
      const { clientX, clientY, deltaY } = event;
      const { scale, x, y, width, height } = prevStatus;

      const nextScale = scale - deltaY * CAMPUS_MAP.SCALE_DELTA;

      if (nextScale <= initialScale) {
        return {
          ...prevStatus,
          scale: initialScale,
        };
      }

      if (nextScale >= CAMPUS_MAP.MAX_SCALE) {
        return {
          ...prevStatus,
          scale: CAMPUS_MAP.MAX_SCALE,
        };
      }

      const cursorX = (clientX - x) / (width * scale);
      const cursorY = (clientY - y) / (height * scale);

      const widthDiff = Math.abs(width * nextScale - width * scale) * cursorX;
      const heightDiff = Math.abs(height * nextScale - height * scale) * cursorY;

      const nextX = nextScale > scale ? x - widthDiff : x + widthDiff;
      const nextY = nextScale > scale ? y - heightDiff : y + heightDiff;

      return {
        ...prevStatus,
        x: nextX <= 0 ? nextX : 0,
        y: nextY <= 0 ? nextY : 0,
        scale: nextScale,
      };
    });
  };

  useLayoutEffect(() => {
    const nextScale = windowSize.height / CAMPUS_MAP.MAP_HEIGHT;

    setInitialScale(nextScale);
    setMapStatus((prevStatus) => ({
      ...prevStatus,
      scale: nextScale,
    }));
  }, [setMapStatus, windowSize]);

  return { onWheel };
};

export default useMapScale;
