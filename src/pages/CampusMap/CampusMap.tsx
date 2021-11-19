import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import imageLogo from '../../assets/images/logo.png';
import { BUILDING } from '../../constants/building';
import CAMPUS_MAP from '../../constants/campusMap';
import SVG_DATA from '../../constants/svgData';
import useMapMove from '../../hooks/useMapMove';
import useMapScale from '../../hooks/useMapScale';
import { Building } from '../../types/common';
import BuildingImage, { Background, Foreground } from './BuildingImage';
import styles from './CampusMap.module.css';

const CampusMap = () => {
  const navigate = useNavigate();

  const [mapStatus, setMapStatus] = useState({
    scale: 1,
    x: 0,
    y: 0,
    width: CAMPUS_MAP.MAP_WIDTH,
    height: CAMPUS_MAP.MAP_HEIGHT,
  });

  const containerRef = useRef<HTMLElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const { isMoving, isMoved, onMouseDown, onMouseMove, onMouseUp } = useMapMove({
    mapStatusState: [mapStatus, setMapStatus],
    svgRef,
    containerRef,
  });
  const { onWheel } = useMapScale({
    mapStatusState: [mapStatus, setMapStatus],
    containerRef,
  });

  const handleClickBuilding = (building: Building) => {
    if (isMoved) return;

    navigate(BUILDING[building].path);
  };

  return (
    <section className={styles.campusMapContainer} ref={containerRef}>
      <img src={imageLogo} alt="Hongik Memories" className={styles.logo} />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="100%"
        height="100%"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onWheel={onWheel}
        cursor={isMoving ? 'grabbing' : 'grab'}
      >
        <g
          transform={`matrix(${mapStatus.scale}, 0, 0, ${mapStatus.scale}, ${mapStatus.x}, ${mapStatus.y})`}
          ref={svgRef}
        >
          <Background />
          {Object.entries(SVG_DATA).map(([building, data]) => (
            <BuildingImage
              key={building}
              building={building}
              onClick={() => handleClickBuilding(building as Building)}
              {...data}
            />
          ))}
          <Foreground />
        </g>
      </svg>
    </section>
  );
};

export default CampusMap;
