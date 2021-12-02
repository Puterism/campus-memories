import React, { useLayoutEffect, useState } from 'react';
import { useLocation } from 'react-router';
import CAMPUS_MAP from '../constants/campusMap';
import { Coordinate, MapStatus } from '../types/common';
import useWindowSize from './useWindowSize';

interface Params {
  mapStatusState: [MapStatus, React.Dispatch<React.SetStateAction<MapStatus>>];
  containerRef: React.RefObject<HTMLElement>;
}

const useMapScale = ({ mapStatusState, containerRef }: Params) => {
  const location = useLocation();

  const [, setMapStatus] = mapStatusState;
  const [initialScale, setInitialScale] = useState<number | null>(null);

  const [isScaling, setScaling] = useState(false);
  const [scaleOffset, setScaleOffset] = useState<Coordinate>({ x: 0, y: 0 });
  const [distanceDiff, setDistanceDiff] = useState(-1);

  const windowSize = useWindowSize();

  const maxScale = (initialScale ?? 1) * 2;

  const zoomInOut = ({ x: clientX, y: clientY }: Coordinate, deltaY: number) => {
    if (initialScale === null) return;

    setMapStatus((prevStatus) => {
      if (!containerRef.current) return prevStatus;

      const { scale, x, y, width, height } = prevStatus;

      let nextScale = scale - deltaY * CAMPUS_MAP.SCALE_DELTA;

      if (nextScale <= initialScale) nextScale = initialScale;
      else if (nextScale >= maxScale) nextScale = maxScale;

      const cursorX = (clientX - x - containerRef.current.offsetLeft) / (width * scale);
      const cursorY = (clientY - y) / (height * scale);

      const widthDiff = Math.abs(width * nextScale - width * scale) * cursorX;
      const heightDiff = Math.abs(height * nextScale - height * scale) * cursorY;

      let nextX = nextScale > scale ? x - widthDiff : x + widthDiff;
      let nextY = nextScale > scale ? y - heightDiff : y + heightDiff;

      const minX = containerRef.current.offsetWidth - width * nextScale;
      const minY = containerRef.current.offsetHeight - height * nextScale;

      // 왼쪽 위에 여백이 생기는 상황
      if (nextX >= 0) nextX = 0;
      if (nextY >= 0) nextY = 0;

      // 오른쪽 아래에 여백이 생기는 상황
      if (nextX < minX) nextX = minX;
      if (nextY < minY) nextY = minY;

      return {
        ...prevStatus,
        x: nextX,
        y: nextY,
        scale: nextScale,
      };
    });
  };

  const onWheel = (event: React.WheelEvent<SVGSVGElement>) => {
    const { clientX, clientY, deltaY } = event;

    zoomInOut({ x: clientX, y: clientY }, deltaY);
  };

  const onTouchStartZoom = (event: React.TouchEvent<SVGSVGElement>) => {
    if (event.touches.length !== 2) return;

    event.preventDefault();

    const distance =
      Math.hypot(
        event.touches[0].clientX - event.touches[1].clientX,
        event.touches[0].clientY - event.touches[1].clientY
      ) * 2;

    setScaling(true);
    setScaleOffset({ x: event.touches[0].clientX, y: event.touches[0].clientY });
    setDistanceDiff(distance);
  };

  const onTouchMoveZoom = (event: React.TouchEvent<SVGSVGElement>) => {
    if (event.touches.length !== 2 || !isScaling) return;

    const distance =
      Math.hypot(
        event.touches[0].clientX - event.touches[1].clientX,
        event.touches[0].clientY - event.touches[1].clientY
      ) * 2;

    zoomInOut(scaleOffset, distanceDiff > 0 ? distanceDiff - distance : distance);
    setDistanceDiff(distance);
  };

  const onTouchEndZoom = () => {
    setScaling(false);
    setDistanceDiff(-1);
  };

  const zoomIn = () => {
    const SCALE_DELTA = 0.5;

    setMapStatus((prevStatus) => {
      if (!containerRef.current) return prevStatus;

      const { scale, x, y, width, height } = prevStatus;

      const nextScale = scale + SCALE_DELTA >= maxScale ? maxScale : scale + SCALE_DELTA;

      const widthDiff = Math.abs(width * nextScale - width * scale) / 2;
      const heightDiff = Math.abs(height * nextScale - height * scale) / 2;

      const nextX = x - widthDiff;
      const nextY = y - heightDiff;

      return {
        ...prevStatus,
        x: nextX,
        y: nextY,
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

      let nextX = x + widthDiff;
      let nextY = y + heightDiff;

      const minX = containerRef.current.offsetWidth - width * nextScale;
      const minY = containerRef.current.offsetHeight - height * nextScale;

      // 왼쪽 위에 여백이 생기는 상황
      if (nextX >= 0) nextX = 0;
      if (nextY >= 0) nextY = 0;

      // 오른쪽 아래에 여백이 생기는 상황
      if (nextX < minX) nextX = minX;
      if (nextY < minY) nextY = minY;

      return {
        ...prevStatus,
        x: nextX,
        y: nextY,
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
    const containerEl = containerRef.current;

    if (!containerEl) return;

    const nextScale = Math.max(
      containerEl.offsetWidth / CAMPUS_MAP.MAP_WIDTH,
      containerEl.offsetHeight / CAMPUS_MAP.MAP_HEIGHT
    );

    setMapStatus((prevStatus) => {
      const { scale, x, y, width, height } = prevStatus;

      const nextX = x + width * scale;
      const nextY = y + height * scale;

      const minX = containerEl.offsetWidth - width * scale;
      const minY = containerEl.offsetHeight - height * scale;

      return {
        ...prevStatus,
        x: nextX <= containerEl.offsetWidth ? minX : x,
        y: nextY <= containerEl.offsetHeight ? minY : y,
        scale: prevStatus.scale > nextScale ? prevStatus.scale : nextScale,
      };
    });

    setInitialScale(nextScale);
  }, [containerRef, setMapStatus, location.pathname, windowSize]);

  return {
    onWheel,
    onTouchStartZoom,
    onTouchMoveZoom,
    onTouchEndZoom,
    zoomIn,
    zoomOut,
  };
};

export default useMapScale;
