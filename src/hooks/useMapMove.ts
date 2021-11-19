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

  const onMouseDown = (event: React.MouseEvent<SVGSVGElement>) => {
    const { clientX, clientY } = event;

    setMoving(true);
    setMoved(false);
    setMovingCount(0);
    setDragOffset({ x: clientX - mapStatus.x, y: clientY - mapStatus.y });
  };

  const onMouseMove = (event: React.MouseEvent<SVGSVGElement>) => {
    if (!isMoving || !dragOffset) return;

    const { clientX, clientY } = event;
    const clientRect = svgRef.current?.getBoundingClientRect();

    if (!clientRect || !containerRef.current) return;

    const { offsetWidth, offsetHeight } = containerRef.current;

    const targetTopLeft = clientX - dragOffset.x;
    const targetBottomLeft = clientY - dragOffset.y;
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

  const onMouseUp = () => {
    setMoving(false);
    setDragOffset(null);
  };

  const onMouseOut = () => {
    setMoving(false);
    setDragOffset(null);
  };

  return { isMoving, isMoved, onMouseDown, onMouseMove, onMouseUp, onMouseOut };
};

export default useMapMove;
