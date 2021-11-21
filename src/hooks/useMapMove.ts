import React, { useState } from 'react';
import { Coordinate, MapStatus } from '../types/common';

interface Params {
  mapStatusState: [MapStatus, React.Dispatch<React.SetStateAction<MapStatus>>];
  svgRef: React.RefObject<SVGSVGElement>;
  containerRef: React.RefObject<HTMLElement>;
}

const useMapMove = ({ mapStatusState, svgRef, containerRef }: Params) => {
  const [mapStatus, setMapStatus] = mapStatusState;

  const [isMoving, setMoving] = useState(false);
  const [isMoved, setMoved] = useState(false);
  const [movingCount, setMovingCount] = useState(0);
  const [dragOffset, setDragOffset] = useState<Coordinate | null>(null);

  const moveStart = ({ x, y }: Coordinate) => {
    setMoving(true);
    setMoved(false);
    setMovingCount(0);
    setDragOffset({ x: x - mapStatus.x, y: y - mapStatus.y });
  };

  const move = ({ x, y }: Coordinate) => {
    if (!isMoving || !dragOffset) return;

    const clientRect = svgRef.current?.getBoundingClientRect();

    if (!clientRect || !containerRef.current) return;

    const { offsetWidth, offsetHeight } = containerRef.current;

    const targetTopLeft = x - dragOffset.x;
    const targetBottomLeft = y - dragOffset.y;
    const targetTopRight = targetTopLeft + clientRect.width;
    const targetBottomRight = targetBottomLeft + clientRect.height;

    setMapStatus((prevStatus) => {
      let nextX = targetTopLeft;
      let nextY = targetBottomLeft;

      if (nextX > 0) {
        nextX = 0;
      } else if (targetTopRight < offsetWidth) {
        nextX = offsetWidth - clientRect.width;
      }

      if (nextY > 0) {
        nextY = 0;
      } else if (targetBottomRight < offsetHeight) {
        nextY = offsetHeight - clientRect.height;
      }

      return {
        ...prevStatus,
        x: nextX,
        y: nextY,
      };
    });

    setMovingCount((prevCount) => prevCount + 1);

    if (movingCount > 5) setMoved(true);
  };

  const moveEnd = () => {
    setMoving(false);
    setDragOffset(null);
  };

  const onMouseDown = (event: React.MouseEvent<SVGSVGElement>) => {
    const { clientX, clientY } = event;

    moveStart({ x: clientX, y: clientY });
  };

  const onMouseMove = (event: React.MouseEvent<SVGSVGElement>) => {
    const { clientX, clientY } = event;

    move({ x: clientX, y: clientY });
  };

  const onMouseUp = () => {
    moveEnd();
  };

  const onMouseOut = () => {
    moveEnd();
  };

  const onTouchStart = (event: React.TouchEvent<SVGSVGElement>) => {
    const { clientX, clientY } = event.touches[0];

    moveStart({ x: clientX, y: clientY });
  };

  const onTouchMove = (event: React.TouchEvent<SVGSVGElement>) => {
    const { clientX, clientY } = event.touches[0];

    move({ x: clientX, y: clientY });
  };

  const onTouchUp = () => {
    moveEnd();
  };

  const onTouchEnd = () => {
    moveEnd();
  };

  return {
    isMoving,
    isMoved,
    onMouseDown,
    onMouseMove,
    onMouseUp,
    onMouseOut,
    onTouchStart,
    onTouchMove,
    onTouchUp,
    onTouchEnd,
  };
};

export default useMapMove;
