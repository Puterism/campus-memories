import { useLayoutEffect, useState } from 'react';
import CAMPUS_MAP from '../constants/campusMap';
import { MapStatus } from '../types/common';
import useWindowSize from './useWindowSize';

interface Params {
  mapStatusState: [MapStatus, React.Dispatch<React.SetStateAction<MapStatus>>];
  containerRef: React.RefObject<HTMLElement>;
}

const useMapScale = ({ mapStatusState, containerRef }: Params) => {
  const [, setMapStatus] = mapStatusState;
  const [initialScale, setInitialScale] = useState<number | null>(null);
  const windowSize = useWindowSize();

  const onWheel = (event: React.WheelEvent<SVGSVGElement>) => {
    if (initialScale === null) return;

    setMapStatus((prevStatus) => {
      if (!containerRef.current) return prevStatus;

      const { clientX, clientY, deltaY } = event;
      const { scale, x, y, width, height } = prevStatus;

      const nextScale = scale - deltaY * CAMPUS_MAP.SCALE_DELTA;

      console.log(nextScale, scale, deltaY, CAMPUS_MAP.SCALE_DELTA);

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

      const cursorX = (clientX - x - containerRef.current.offsetLeft) / (width * scale);
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

  const zoomIn = () => {
    const SCALE_DELTA = 0.5;

    setMapStatus((prevStatus) => {
      if (!containerRef.current) return prevStatus;

      const { scale, x, y, width, height } = prevStatus;

      const nextScale =
        scale + SCALE_DELTA >= CAMPUS_MAP.MAX_SCALE ? CAMPUS_MAP.MAX_SCALE : scale + SCALE_DELTA;

      const widthDiff = Math.abs(width * nextScale - width * scale) / 2;
      const heightDiff = Math.abs(height * nextScale - height * scale) / 2;

      const nextX = x - widthDiff;
      const nextY = y - heightDiff;

      return {
        ...prevStatus,
        x: nextX <= 0 ? nextX : 0,
        y: nextY <= 0 ? nextY : 0,
        scale: nextScale,
      };
    });
  };

  const zoomOut = () => {
    if (!initialScale) return;

    const SCALE_DELTA = 0.5;

    setMapStatus((prevStatus) => {
      if (!containerRef.current) return prevStatus;

      const { scale, x, y, width, height } = prevStatus;

      const nextScale = scale - SCALE_DELTA < initialScale ? initialScale : scale - SCALE_DELTA;

      const widthDiff = Math.abs(width * nextScale - width * scale) / 2;
      const heightDiff = Math.abs(height * nextScale - height * scale) / 2;

      const nextX = x + widthDiff;
      const nextY = y + heightDiff;

      return {
        ...prevStatus,
        x: nextX <= 0 ? nextX : 0,
        y: nextY <= 0 ? nextY : 0,
        scale: nextScale < initialScale ? initialScale : nextScale,
      };
    });
  };

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const nextScale = Math.max(
      containerRef.current.offsetWidth / CAMPUS_MAP.MAP_WIDTH,
      containerRef.current.offsetHeight / CAMPUS_MAP.MAP_HEIGHT
    );

    setMapStatus((prevStatus) => ({
      ...prevStatus,
      scale: nextScale,
    }));
  }, [containerRef, setMapStatus]);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const nextScale = Math.max(
      containerRef.current.offsetWidth / CAMPUS_MAP.MAP_WIDTH,
      containerRef.current.offsetHeight / CAMPUS_MAP.MAP_HEIGHT
    );

    setInitialScale(nextScale);
  }, [containerRef, windowSize]);

  return { onWheel, zoomIn, zoomOut };
};

export default useMapScale;
