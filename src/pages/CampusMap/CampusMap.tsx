import { useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import imageLogo from '../../assets/images/logo.png';
import menuIconUrl from '../../assets/menu.svg';
import minusIconUrl from '../../assets/minus.svg';
import plusIconUrl from '../../assets/plus.svg';
import shareIconUrl from '../../assets/share.svg';
import LinkButton from '../../components/LinkButton/LinkButton';
import { BUILDING } from '../../constants/building';
import CAMPUS_MAP from '../../constants/campusMap';
import { MESSAGE } from '../../constants/message';
import PATH from '../../constants/path';
import SVG_DATA from '../../constants/svgData';
import useMapMove from '../../hooks/useMapMove';
import useMapScale from '../../hooks/useMapScale';
import { Building } from '../../types/common';
import BuildingImage, { Background, Foreground } from './BuildingImage';
import styles from './CampusMap.module.css';

const CampusMap = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [mapStatus, setMapStatus] = useState({
    scale: 1,
    x: 0,
    y: 0,
    width: CAMPUS_MAP.MAP_WIDTH,
    height: CAMPUS_MAP.MAP_HEIGHT,
  });

  const containerRef = useRef<HTMLElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const {
    isMoving,
    isMoved,
    onMouseDown,
    onMouseMove,
    onMouseUp,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  } = useMapMove({
    mapStatusState: [mapStatus, setMapStatus],
    svgRef,
    containerRef,
  });
  const { zoomIn, zoomOut, onWheel } = useMapScale({
    mapStatusState: [mapStatus, setMapStatus],
    containerRef,
  });

  const imagePixelated = mapStatus.scale >= 1;

  const handleClickBuilding = (building: Building) => {
    if (isMoved) return;

    navigate(BUILDING[building].path);
  };

  const handleClickShare = async () => {
    try {
      await navigator.clipboard.writeText(`${window.location.origin}`);

      alert(MESSAGE.LINK_SHARE_SUCCESS);
    } catch (error) {
      console.error(error);
      alert(MESSAGE.LINK_SHARE_UNEXPECTED_ERROR);
    }
  };

  return (
    <section className={styles.campusMapContainer} ref={containerRef}>
      <LinkButton to={PATH.menu} className={styles.menuButton} colored>
        <img src={menuIconUrl} alt="메뉴" />
      </LinkButton>
      <LinkButton className={styles.shareButton} onClick={handleClickShare} colored>
        <img src={shareIconUrl} alt="링크 공유" />
      </LinkButton>
      <div className={styles.zoomControl}>
        <LinkButton onClick={zoomIn} colored>
          <img src={plusIconUrl} alt="확대" />
        </LinkButton>
        <LinkButton onClick={zoomOut} colored>
          <img src={minusIconUrl} alt="축소" />
        </LinkButton>
      </div>
      <img src={imageLogo} alt="Hongik Memories" className={styles.logo} />
      <svg
        className={styles.campusMap}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onWheel={onWheel}
        cursor={isMoving ? 'grabbing' : 'grab'}
      >
        <g
          transform={`matrix(${mapStatus.scale}, 0, 0, ${mapStatus.scale}, ${mapStatus.x}, ${mapStatus.y})`}
          ref={svgRef}
        >
          <Background pixelated={imagePixelated} />
          {Object.entries(SVG_DATA).map(([building, data]) => (
            <BuildingImage
              key={building}
              building={building}
              active={pathname === BUILDING[building as Building].path}
              pixelated={imagePixelated}
              onClick={() => handleClickBuilding(building as Building)}
              {...data}
            />
          ))}
          <Foreground pixelated={imagePixelated} />
        </g>
      </svg>
    </section>
  );
};

export default CampusMap;
