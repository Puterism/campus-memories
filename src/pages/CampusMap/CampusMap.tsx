import { useLayoutEffect, useRef, useState } from 'react';
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
import useWindowSize from '../../hooks/useWindowSize';
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
  const { height } = useWindowSize();

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
  const { onTouchStartZoom, onTouchMoveZoom, onTouchEndZoom, zoomIn, zoomOut, onWheel } =
    useMapScale({
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

  const handleTouchStart = (event: React.TouchEvent<SVGSVGElement>) => {
    if (event.touches.length === 1) onTouchStart(event);
    if (event.touches.length === 2) onTouchStartZoom(event);
  };

  const handleTouchMove = (event: React.TouchEvent<SVGSVGElement>) => {
    if (event.touches.length === 1) onTouchMove(event);
    if (event.touches.length === 2) onTouchMoveZoom(event);
  };

  const handleTouchEnd = () => {
    onTouchEnd();
    onTouchEndZoom();
  };

  const handleTouchMoveNative = (event: TouchEvent) => {
    // Note: Safari에서 기본적으로 동작하는 줌 인/아웃 모션을 금지하기 위한 코드 적용
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (event.scale && event.scale !== 1 && event.touches.length > 1) event.preventDefault();
  };

  useLayoutEffect(() => {
    document.addEventListener('touchmove', handleTouchMoveNative, { passive: false });

    return () => document.removeEventListener('touchmove', handleTouchMoveNative);
  }, []);

  return (
    <section className={styles.campusMapContainer} ref={containerRef}>
      <h1 style={{ position: 'fixed', left: '100px', top: '100px' }}>{height}</h1>
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
        width="100%"
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
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
