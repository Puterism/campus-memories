import { useLayoutEffect, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import imageLogo from '../../assets/images/logo.png';
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
      <LinkButton to={PATH.menu} className={styles.menuButton} primary aria-label="메뉴">
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="15.401" viewBox="0 0 21 15.401">
          <g transform="translate(-285.437 -577.515)">
            <line
              x2="21"
              transform="translate(285.437 578.015)"
              fill="none"
              stroke="#fff"
              strokeWidth="1"
            />
            <line
              x2="21"
              transform="translate(285.437 585.215)"
              fill="none"
              stroke="#fff"
              strokeWidth="1"
            />
            <path d="M285.437,592.416h21" fill="#374DBA" stroke="#fff" strokeWidth="1" />
          </g>
        </svg>
      </LinkButton>
      <LinkButton
        className={styles.shareButton}
        onClick={handleClickShare}
        primary
        aria-label="링크 공유"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="23.836" viewBox="0 0 21 23.836">
          <g transform="translate(-12 -8.164)">
            <g transform="translate(-373.437 -562.716)">
              <rect width="21" height="16" transform="translate(385.437 578.716)" fill="none" />
              <path
                d="M398.926,579.216h7.011v15h-20v-15h6.979"
                fill="none"
                stroke="#fff"
                strokeWidth="1"
              />
              <path d="M398.926,579.216" fill="none" stroke="#fff" strokeWidth="1" />
            </g>
            <g transform="translate(-373.437 -562.716)">
              <line
                y1="14"
                transform="translate(395.937 571.716)"
                fill="none"
                stroke="#fff"
                strokeWidth="1"
              />

              <path
                d="M391.889,575.635l4.048-4.048,4.048,4.048"
                fill="none"
                stroke="#fff"
                strokeWidth="1"
              />
            </g>
          </g>
        </svg>
      </LinkButton>
      <div className={styles.zoomControl}>
        <LinkButton onClick={zoomIn} primary aria-label="확대">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27.497"
            height="27.497"
            viewBox="0 0 27.497 27.497"
          >
            <g transform="translate(-8.752 -8.371)">
              <line
                x2="18.74"
                y2="18.732"
                transform="translate(22.497 8.871) rotate(45)"
                fill="none"
                stroke="#fff"
                strokeWidth="1"
              />
              <line
                x1="18.74"
                y2="18.732"
                transform="translate(22.497 8.871) rotate(45)"
                fill="none"
                stroke="#fff"
                strokeWidth="1"
              />
            </g>
          </svg>
        </LinkButton>
        <LinkButton onClick={zoomOut} primary aria-label="축소">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27.497"
            height="27.497"
            viewBox="0 0 27.497 27.497"
          >
            <line
              x1="18.74"
              y2="18.732"
              transform="translate(13.746 0.5) rotate(45)"
              fill="none"
              stroke="#fff"
              strokeWidth="1"
            />
          </svg>
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
