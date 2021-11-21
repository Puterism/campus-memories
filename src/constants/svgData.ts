import imageABCD from '../assets/images/ABCD.png';
import imageDD from '../assets/images/DD.png';
import imageE from '../assets/images/E.png';
import imageF from '../assets/images/F.png';
import imageG from '../assets/images/G.png';
import imageH from '../assets/images/H.png';
import imageI from '../assets/images/I.png';
import imageJ from '../assets/images/J.png';
import imageK from '../assets/images/K.png';
import imageL from '../assets/images/L.png';
import imageM from '../assets/images/M.png';
import imageMH from '../assets/images/MH.png';
import imageP from '../assets/images/P.png';
import imagePG from '../assets/images/PG.png';
import imageQ from '../assets/images/Q.png';
import imageR from '../assets/images/R.png';
import imageS from '../assets/images/S.png';
import imageT from '../assets/images/T.png';
import imageU from '../assets/images/U.png';
import imageYM from '../assets/images/YM.png';
import imageZ1 from '../assets/images/Z1.png';
import imageZ2Z3 from '../assets/images/Z2Z3.png';
import imageZ4 from '../assets/images/Z4.png';
import activeImageABCD from '../assets/images/active/ABCDa.png';
import activeImageDD from '../assets/images/active/DDa.png';
import activeImageE from '../assets/images/active/Ea.png';
import activeImageF from '../assets/images/active/Fa.png';
import activeImageG from '../assets/images/active/Ga.png';
import activeImageH from '../assets/images/active/Ha.png';
import activeImageI from '../assets/images/active/Ia.png';
import activeImageJ from '../assets/images/active/Ja.png';
import activeImageK from '../assets/images/active/Ka.png';
import activeImageL from '../assets/images/active/La.png';
import activeImageMH from '../assets/images/active/MHa.png';
import activeImageM from '../assets/images/active/Ma.png';
import activeImagePG from '../assets/images/active/PGa.png';
import activeImageP from '../assets/images/active/Pa.png';
import activeImageQ from '../assets/images/active/Qa.png';
import activeImageR from '../assets/images/active/Ra.png';
import activeImageS from '../assets/images/active/Sa.png';
import activeImageT from '../assets/images/active/Ta.png';
import activeImageU from '../assets/images/active/Ua.png';
import activeImageYM from '../assets/images/active/YMa.png';
import activeImageZ1 from '../assets/images/active/Z1a.png';
import activeImageZ2Z3 from '../assets/images/active/Z2Z3a.png';
import activeImageZ4 from '../assets/images/active/Z4a.png';
import activeImageDORM from '../assets/images/active/dorma.png';
import imageDORM from '../assets/images/dorm.png';

import { Building } from '../types/common';

interface BuildingSVGData {
  transform: string;
  width: number;
  height: number;
  d: string;
  href: string;
  activeHref: string;
}

const SVG_DATA: Record<Building, BuildingSVGData> = {
  [Building.I]: {
    transform: 'translate(152 31)',
    width: 367,
    height: 255,
    d: 'M0.0,0.0 C5.332,0.0 10.667,0.0 16.0,0.0 C16.0,0.999 16.0,2.0 16.0,2.999 C108.657,2.999 201.342,2.999 293.999,2.999 C293.999,2.0 293.999,0.999 293.999,0.0 C299.332,0.0 304.667,0.0 309.999,0.0 C309.999,9.998 309.999,20.0 309.999,29.999 C310.666,29.999 311.333,29.999 311.999,29.999 C316.360,27.303 322.639,30.816 327.999,29.999 C338.302,28.429 356.135,27.893 366.999,29.999 C366.999,60.330 366.999,90.669 366.999,121.0 C348.1,121.0 328.998,121.0 309.999,121.0 C309.999,162.995 309.999,205.4 309.999,247.0 C280.336,247.0 250.663,247.0 220.999,247.0 C220.999,249.333 220.999,251.666 220.999,254.0 C207.870,258.359 169.789,255.73 152.999,255.0 C152.287,252.951 152.6,250.326 152.0,247.0 C101.338,247.0 50.661,247.0 0.0,247.0 C0.0,164.674 0.0,82.325 0.0,0.0 Z',
    href: imageI,
    activeHref: activeImageI,
  },
  [Building.F]: {
    transform: 'translate(1065 78)',
    width: 296,
    height: 329,
    d: 'M66.0,0.0 C88.331,0.0 110.668,0.0 132.999,0.0 C132.999,1.666 132.999,3.333 132.999,5.0 C187.327,5.0 241.672,5.0 295.999,5.0 C295.999,57.661 295.999,110.338 295.999,162.999 C262.336,162.999 228.663,162.999 195.0,162.999 C195.0,192.330 195.0,221.669 195.0,250.999 C183.667,250.999 172.332,250.999 161.0,250.999 C161.0,276.997 161.0,303.2 161.0,328.999 C107.338,328.999 53.661,328.999 0.0,328.999 C0.0,276.338 0.0,223.661 0.0,171.0 C2.999,171.0 6.0,171.0 8.999,171.0 C8.999,152.1 8.999,132.998 8.999,114.0 C12.666,114.0 16.333,114.0 19.999,114.0 C19.999,92.335 19.999,70.664 19.999,49.0 C22.999,49.0 26.0,49.0 28.999,49.0 C28.999,34.334 28.999,19.665 28.999,5.0 C40.998,5.0 53.1,5.0 65.0,5.0 C65.0,4.333 65.0,3.666 65.0,3.0 C65.751,1.927 65.601,2.54 66.0,0.0 Z',
    href: imageF,
    activeHref: activeImageF,
  },
  [Building.U]: {
    transform: 'translate(1394 30)',
    width: 308,
    height: 352,
    d: 'M0.0,0.0 C10.332,0.0 20.667,0.0 30.999,0.0 C30.999,4.332 30.999,8.667 30.999,12.999 C93.660,12.999 156.339,12.999 219.0,12.999 C219.0,17.666 219.0,22.333 219.0,27.0 C239.997,27.0 261.2,27.0 282.0,27.0 C282.0,40.998 282.0,55.1 282.0,69.0 C290.534,68.921 299.924,69.141 307.0,69.999 C307.0,163.990 307.0,258.9 307.0,351.999 C234.7,351.999 160.992,351.999 87.999,351.999 C87.999,337.668 87.999,323.331 87.999,308.999 C58.669,308.999 29.330,308.999 0.0,308.999 C0.0,206.10 0.0,102.989 0.0,0.0 Z',
    href: imageU,
    activeHref: activeImageU,
  },
  [Building.E]: {
    transform: 'translate(1259 182)',
    width: 309,
    height: 307,
    d: 'M0.0,0.0 C83.658,0.0 167.341,0.0 251.0,0.0 C251.0,6.666 251.0,13.333 251.0,19.999 C270.331,19.999 289.668,19.999 309.0,19.999 C309.0,105.991 309.0,192.8 309.0,277.999 C301.334,277.999 293.665,277.999 286.0,277.999 C286.0,261.1 286.0,243.998 286.0,227.0 C274.334,227.0 262.665,227.0 251.0,227.0 C251.0,247.664 251.0,268.335 251.0,288.999 C167.341,288.999 83.658,288.999 0.0,288.999 C0.0,192.676 0.0,96.323 0.0,0.0 Z',
    href: imageE,
    activeHref: activeImageE,
  },
  [Building.P]: {
    transform: 'translate(462 31)',
    width: 480,
    height: 192,
    d: 'M56.999,0.0 C77.664,0.0 98.335,0.0 119.0,0.0 C119.0,2.666 119.0,5.333 119.0,8.0 C218.656,8.0 318.343,8.0 418.0,8.0 C418.0,5.333 418.0,2.666 418.0,0.0 C438.664,0.0 459.335,0.0 479.999,0.0 C479.999,63.993 479.999,128.6 479.999,192.0 C339.14,192.0 197.985,192.0 56.999,192.0 C56.999,168.335 56.999,144.664 56.999,120.999 C38.1,120.999 18.998,120.999 0.0,120.999 C0.0,90.336 0.0,59.663 0.0,29.0 C18.998,29.0 38.1,29.0 56.999,29.0 C56.999,19.334 56.999,9.665 56.999,0.0 Z',
    href: imageP,
    activeHref: activeImageP,
  },

  [Building.J]: {
    transform: 'translate(47 125)',
    width: 126,
    height: 239,
    d: 'M19.999,0.0 C23.999,0.0 28.0,0.0 31.999,0.0 C31.999,12.332 31.999,24.667 31.999,37.0 C63.330,37.0 94.669,37.0 126.0,37.0 C126.0,104.659 126.0,172.340 126.0,239.999 C86.4,239.999 45.996,239.999 5.999,239.999 C5.999,203.670 5.999,167.329 5.999,131.0 C4.0,131.0 1.999,131.0 0.0,131.0 C0.0,99.669 0.0,68.330 0.0,37.0 C6.665,37.0 13.333,37.0 19.999,37.0 C19.999,24.667 19.999,12.332 19.999,0.0 Z',
    href: imageJ,
    activeHref: activeImageJ,
  },
  [Building.PG]: {
    transform: 'translate(481 714)',
    width: 771,
    height: 387,
    d: 'M340.999,16.0 C371.663,16.0 402.336,16.0 433.0,16.0 C433.0,17.999 433.0,20.0 433.0,21.999 C471.329,21.999 509.670,21.999 548.0,21.999 C548.0,23.999 548.0,26.0 548.0,28.0 C567.164,36.748 586.80,46.173 605.0,56.0 C609.574,58.375 615.487,63.219 619.999,65.0 C669.661,65.0 719.338,65.0 769.0,65.0 C772.249,71.379 771.0,84.481 770.999,93.999 C770.999,114.997 770.999,136.2 770.999,156.999 C770.999,233.325 770.999,309.674 770.999,386.0 C761.142,391.22 738.555,388.0 724.999,387.999 C688.670,387.999 652.329,387.999 615.999,387.999 C485.13,387.999 353.986,387.999 222.999,387.999 C222.999,365.668 222.999,343.331 222.999,320.999 C149.674,320.999 76.326,320.999 3.0,320.999 C3.0,275.671 3.0,230.328 3.0,184.999 C2.0,184.999 0.999,184.999 0.0,184.999 C0.0,184.0 0.0,182.999 0.0,182.0 C0.999,182.0 2.0,182.0 3.0,182.0 C3.144,150.99 6.680,108.773 0.0,82.0 C0.666,82.0 1.333,82.0 1.999,82.0 C6.304,85.698 25.217,75.9 30.999,71.999 C55.303,59.351 80.717,46.688 105.0,34.0 C113.260,29.683 127.973,28.622 127.999,16.0 C163.996,16.0 200.3,16.0 236.0,16.0 C236.0,11.333 236.0,6.666 236.0,2.0 C244.612,0.845 259.541,1.0 270.0,1.0 C293.331,1.0 316.668,1.0 340.0,1.0 C341.239,4.609 341.70,10.883 340.999,16.0 Z',
    href: imagePG,
    activeHref: activeImagePG,
  },
  [Building.M]: {
    transform: 'translate(722 1013)',
    width: 373,
    height: 242,
    d: 'M268.999,9.0 C275.332,9.0 281.667,9.0 287.999,9.0 C290.603,16.730 289.81,30.460 288.999,40.0 C296.999,40.0 305.0,40.0 313.0,40.0 C313.0,39.0 313.0,37.999 313.0,36.999 C333.331,36.999 353.668,36.999 374.0,36.999 C377.19,46.143 374.999,61.976 374.999,72.999 C374.999,98.664 374.999,124.335 374.999,149.999 C367.269,152.603 353.539,151.81 344.0,150.999 C343.977,159.461 345.827,162.11 345.999,169.999 C343.758,170.779 340.568,171.20 336.999,170.999 C336.220,168.758 335.979,165.568 336.0,162.0 C338.373,159.941 338.172,156.628 337.999,152.0 C330.0,152.0 321.999,152.0 313.999,152.0 C313.999,157.999 313.999,164.0 313.999,169.999 C307.841,172.84 296.861,171.79 288.999,170.999 C288.932,182.189 290.811,189.545 290.999,199.0 C288.758,199.779 285.568,200.20 282.0,199.999 C281.220,197.758 280.979,194.568 280.999,190.999 C285.509,186.861 283.186,167.66 283.0,158.999 C275.0,158.999 266.999,158.999 259.0,158.999 C259.0,172.332 259.0,185.668 259.0,199.0 C246.218,203.245 209.355,200.73 192.999,199.999 C192.999,206.332 192.999,212.667 192.999,219.0 C185.448,221.498 172.329,219.999 163.0,220.0 C142.335,220.0 121.664,220.0 100.999,220.0 C100.999,227.665 100.999,235.334 100.999,242.999 C79.2,242.999 56.997,242.999 34.999,242.999 C34.999,235.334 34.999,227.665 34.999,220.0 C31.0,220.0 26.999,220.0 23.0,220.0 C21.342,215.133 21.923,206.476 22.0,199.999 C15.667,199.999 9.332,199.999 3.0,199.999 C-1.406,186.607 1.999,157.197 2.0,141.0 C2.0,97.337 2.0,53.662 2.0,9.999 C6.866,8.342 15.523,8.923 22.0,9.0 C22.0,6.666 22.0,4.333 22.0,2.0 C27.982,0.33 38.348,1.0 46.0,0.999 C63.331,0.999 80.668,0.999 98.0,0.999 C154.661,0.999 211.339,0.999 267.999,0.999 C268.712,3.48 268.993,5.673 268.999,9.0 Z',
    href: imageM,
    activeHref: activeImageM,
  },
  [Building.Z2Z3]: {
    transform: 'translate(1720 657)',
    width: 547,
    height: 581,
    d: 'M194.999,0.0 C202.670,0.941 213.330,0.934 220.999,0.0 C220.999,31.330 220.999,62.669 220.999,94.0 C329.655,94.0 438.344,94.0 547.0,94.0 C547.0,132.996 547.0,172.3 547.0,210.999 C424.12,210.999 300.987,210.999 177.999,210.999 C177.999,319.655 177.999,428.344 177.999,536.999 C180.999,536.999 184.0,536.999 187.0,536.999 C187.0,551.665 187.0,566.334 187.0,580.999 C156.669,580.999 126.330,580.999 95.999,580.999 C95.999,579.0 95.999,576.999 95.999,575.0 C64.336,575.0 32.663,575.0 0.999,575.0 C0.666,567.0 0.333,558.999 0.0,550.999 C0.999,550.666 2.0,550.333 3.0,549.999 C9.32,546.423 19.616,550.938 26.999,549.999 C40.923,548.229 61.209,549.793 81.999,549.999 C81.999,383.683 81.999,217.316 81.999,50.999 C119.662,50.999 157.337,50.999 194.999,50.999 C194.999,34.1 194.999,16.998 194.999,0.0 Z',
    href: imageZ2Z3,
    activeHref: activeImageZ2Z3,
  },
  [Building.DORM]: {
    transform: 'translate(1940 631)',
    width: 303,
    height: 607,
    d: 'M130.0,0.0 C147.998,0.0 166.1,0.0 184.0,0.0 C184.0,9.332 184.0,18.667 184.0,27.999 C194.998,27.999 206.1,27.999 217.0,27.999 C225.999,18.667 235.0,9.332 244.0,0.0 C263.664,0.0 283.335,0.0 302.999,0.0 C302.999,166.983 302.999,334.16 302.999,501.0 C283.668,519.998 264.331,539.1 245.0,558.0 C245.0,570.665 245.0,583.334 245.0,596.0 C244.0,596.0 242.999,596.0 241.999,596.0 C241.999,599.666 241.999,603.333 241.999,607.0 C164.341,607.0 86.658,607.0 9.0,607.0 C9.0,603.333 9.0,599.666 9.0,596.0 C7.666,596.0 6.333,596.0 4.999,596.0 C4.999,571.669 4.999,547.330 4.999,523.0 C14.665,522.666 24.334,522.333 34.0,522.0 C39.827,523.294 47.93,524.671 54.0,525.0 C54.0,498.2 54.0,470.997 54.0,443.999 C37.1,443.999 19.998,443.999 3.0,443.999 C3.0,436.334 3.0,428.665 3.0,420.999 C2.0,420.999 0.999,420.999 0.0,420.999 C0.0,420.0 0.0,418.999 0.0,417.999 C0.999,417.999 2.0,417.999 3.0,417.999 C3.0,412.0 3.0,405.999 3.0,400.0 C2.0,400.0 0.999,400.0 0.0,400.0 C0.0,399.0 0.0,397.999 0.0,396.999 C0.999,396.999 2.0,396.999 3.0,396.999 C3.0,395.0 3.0,392.999 3.0,391.0 C2.0,391.0 0.999,391.0 0.0,391.0 C0.0,390.0 0.0,388.999 0.0,388.0 C0.999,388.0 2.0,388.0 3.0,388.0 C3.0,382.0 3.0,375.999 3.0,369.999 C2.0,369.999 0.999,369.999 0.0,369.999 C0.0,369.0 0.0,367.999 0.0,367.0 C0.999,367.0 2.0,367.0 3.0,367.0 C3.0,365.0 3.0,362.999 3.0,360.999 C2.0,360.999 0.999,360.999 0.0,360.999 C0.0,360.0 0.0,358.999 0.0,357.999 C0.999,357.999 2.0,357.999 3.0,357.999 C3.0,352.0 3.0,345.999 3.0,340.0 C2.0,340.0 0.999,340.0 0.0,340.0 C0.0,339.0 0.0,337.999 0.0,336.999 C0.999,336.999 2.0,336.999 3.0,336.999 C3.0,333.0 3.0,328.999 3.0,324.999 C32.330,324.999 61.669,324.999 90.999,324.999 C90.999,315.334 90.999,305.665 90.999,296.0 C92.333,296.0 93.666,296.0 95.0,296.0 C95.0,295.0 95.0,293.999 95.0,293.0 C95.999,293.0 97.0,293.0 98.0,293.0 C98.0,293.999 98.0,295.0 98.0,296.0 C104.999,296.0 112.0,296.0 118.999,296.0 C120.737,287.729 121.42,275.170 120.999,263.999 C123.999,263.999 127.0,263.999 130.0,263.999 C130.0,253.1 130.0,241.998 130.0,230.999 C129.0,230.999 127.999,230.999 126.999,230.999 C126.999,196.3 126.999,160.996 126.999,126.0 C127.999,126.0 129.0,126.0 130.0,126.0 C130.0,84.4 130.0,41.995 130.0,0.0 Z',
    href: imageDORM,
    activeHref: activeImageDORM,
  },
  [Building.Z4]: {
    transform: 'translate(1301 846)',
    width: 358,
    height: 401,
    d: 'M6.0,0.0 C29.330,0.0 52.669,0.0 75.999,0.0 C75.999,85.324 75.999,170.675 75.999,255.999 C138.327,255.999 200.672,255.999 262.999,255.999 C262.999,259.666 262.999,263.333 262.999,266.999 C269.666,266.999 276.334,266.999 282.999,266.999 C282.999,263.333 282.999,259.666 282.999,255.999 C307.997,255.999 333.2,255.999 357.999,255.999 C357.999,297.995 357.999,340.4 357.999,382.0 C264.342,382.0 170.657,382.0 77.0,382.0 C75.841,385.366 75.931,391.149 75.999,396.0 C61.668,396.0 47.331,396.0 33.0,396.0 C33.0,397.666 33.0,399.333 33.0,401.0 C24.0,401.0 14.999,401.0 6.0,401.0 C6.0,397.667 6.0,394.333 6.0,391.0 C4.0,391.0 1.999,391.0 0.0,391.0 C0.0,357.336 0.0,323.663 0.0,290.0 C1.999,290.0 4.0,290.0 6.0,290.0 C6.0,193.342 6.0,96.656 6.0,0.0 Z',
    href: imageZ4,
    activeHref: activeImageZ4,
  },
  [Building.Z1]: {
    transform: 'translate(1100 651)',
    width: 589,
    height: 110,
    d: 'M495.999,25.0 C495.804,22.672 495.807,22.174 494.999,20.999 C494.999,22.666 494.999,24.333 494.999,26.0 C481.498,26.601 464.476,26.678 463.999,13.999 C463.122,12.705 463.105,11.533 463.0,9.0 C466.355,6.664 469.629,3.288 474.0,1.999 C488.110,-2.159 511.390,0.602 511.999,13.999 C511.122,15.294 511.105,16.466 510.999,19.0 C506.354,21.972 503.729,24.676 495.999,25.0 ZM333.0,106.999 C333.0,108.333 333.0,109.666 333.0,111.0 C308.442,110.356 278.557,110.356 253.999,111.0 C253.999,109.666 253.999,108.333 253.999,106.999 C208.4,106.999 161.995,106.999 116.0,106.999 C93.335,106.999 70.664,106.999 47.999,106.999 C42.125,104.668 34.876,99.56 29.0,95.999 C24.365,93.589 1.636,85.15 0.0,82.0 C0.0,57.335 0.0,32.664 0.0,8.0 C0.333,8.0 0.666,8.0 1.0,8.0 C9.526,15.959 24.339,19.470 34.999,25.0 C38.537,26.834 43.242,30.802 47.0,31.999 C84.996,31.999 123.3,31.999 160.999,31.999 C250.294,32.4 335.722,31.993 424.999,31.999 C463.996,31.999 503.3,31.999 541.999,31.999 C545.761,30.788 550.457,26.840 554.0,25.0 C565.714,18.911 577.314,13.593 588.999,8.0 C588.999,32.664 588.999,57.335 588.999,82.0 C575.913,87.979 562.990,94.249 549.999,101.0 C547.357,102.373 543.493,106.0 541.0,106.999 C471.673,106.999 402.326,106.999 333.0,106.999 Z',
    href: imageZ1,
    activeHref: activeImageZ1,
  },
  [Building.Q]: {
    transform: 'translate(762 56)',
    width: 296,
    height: 445,
    d: 'M71.999,0.0 C90.331,0.0 108.668,0.0 127.0,0.0 C127.0,5.999 127.0,12.0 127.0,18.0 C183.327,18.0 239.672,18.0 295.999,18.0 C295.999,140.321 295.999,262.678 295.999,384.999 C277.335,384.999 258.664,384.999 239.999,384.999 C239.999,394.998 239.999,405.1 239.999,414.999 C235.694,414.610 230.440,410.537 225.0,412.999 C223.503,413.677 220.755,415.382 217.999,415.999 C217.999,425.665 217.999,435.334 217.999,444.999 C211.203,444.223 202.236,443.990 194.0,443.999 C194.0,424.335 194.0,404.664 194.0,384.999 C129.339,384.999 64.660,384.999 0.0,384.999 C0.0,284.10 0.0,182.989 0.0,82.0 C4.999,82.0 10.0,82.0 15.0,82.0 C15.0,80.666 15.0,79.333 15.0,78.0 C33.998,78.0 53.1,78.0 71.999,78.0 C71.999,52.2 71.999,25.997 71.999,0.0 Z',
    href: imageQ,
    activeHref: activeImageQ,
  },
  [Building.MH]: {
    transform: 'translate(1001 119)',
    width: 385,
    height: 422,
    d: 'M93.0,0.0 C98.999,0.0 105.0,0.0 111.0,0.0 C111.0,3.666 111.0,7.333 111.0,11.0 C144.663,11.0 178.336,11.0 211.999,11.0 C211.999,7.333 211.999,3.666 211.999,0.0 C217.999,0.0 224.0,0.0 230.0,0.0 C230.7,13.247 232.246,33.224 228.0,43.0 C228.0,118.659 228.0,194.340 228.0,269.999 C280.328,269.999 332.671,269.999 384.999,269.999 C384.999,314.662 384.999,359.337 384.999,403.999 C332.671,403.999 280.328,403.999 228.0,403.999 C229.39,408.899 230.38,414.648 230.0,421.999 C184.337,421.999 138.662,421.999 93.0,421.999 C92.880,414.639 93.919,408.897 94.999,403.999 C74.668,403.999 54.331,403.999 34.0,403.999 C34.0,405.333 34.0,406.666 34.0,407.999 C22.667,407.999 11.332,407.999 0.0,407.999 C0.0,362.4 0.0,315.995 0.0,269.999 C31.663,269.999 63.336,269.999 94.999,269.999 C94.999,194.340 94.999,118.659 94.999,43.0 C90.747,33.217 93.7,13.253 93.0,0.0 Z',
    href: imageMH,
    activeHref: activeImageMH,
  },
  [Building.H]: {
    transform: 'translate(274 187)',
    width: 488,
    height: 147,
    d: 'M226.0,0.0 C255.663,0.0 285.336,0.0 314.999,0.0 C314.999,3.666 314.999,7.333 314.999,11.0 C372.994,11.0 431.5,11.0 489.0,11.0 C489.0,54.662 489.0,98.337 489.0,141.999 C451.670,141.999 414.329,141.999 377.0,141.999 C377.0,143.666 377.0,145.333 377.0,146.999 C343.336,146.999 309.663,146.999 276.0,146.999 C276.0,145.333 276.0,143.666 276.0,141.999 C239.670,141.999 203.329,141.999 166.999,141.999 C164.396,134.269 165.918,120.539 165.999,111.0 C110.672,111.0 55.327,111.0 0.0,111.0 C0.0,106.333 0.0,101.666 0.0,97.0 C55.327,97.0 110.672,97.0 165.999,97.0 C165.999,67.669 165.999,38.330 165.999,8.999 C185.997,8.999 206.1,8.999 226.0,8.999 C226.0,6.0 226.0,2.999 226.0,0.0 Z',
    href: imageH,
    activeHref: activeImageH,
  },
  [Building.G]: {
    transform: 'translate(438 282)',
    width: 519,
    height: 246,
    d: 'M31.999,0.0 C37.999,0.0 44.0,0.0 50.0,0.0 C50.0,2.999 50.0,6.0 50.0,9.0 C200.318,9.0 350.681,9.0 501.0,9.0 C501.0,6.0 501.0,2.999 501.0,0.0 C506.999,0.0 513.0,0.0 519.0,0.0 C519.0,14.331 519.0,28.668 519.0,42.999 C518.0,42.999 516.999,42.999 515.999,42.999 C515.999,45.999 515.999,49.0 515.999,52.0 C516.999,52.0 518.0,52.0 519.0,52.0 C519.0,109.994 519.0,168.5 519.0,225.999 C509.10,226.676 496.469,226.991 485.0,227.0 C485.0,231.332 485.0,235.667 485.0,239.999 C470.1,239.999 454.998,239.999 440.0,239.999 C440.0,236.666 440.0,233.332 440.0,229.999 C442.666,229.0 445.333,227.999 448.0,227.0 C448.0,226.666 448.0,226.333 448.0,225.999 C332.56,225.991 217.114,226.10 102.999,225.999 C102.999,226.333 102.999,226.666 102.999,227.0 C103.666,227.0 104.333,227.0 105.0,227.0 C109.582,231.78 111.322,230.389 110.999,239.999 C96.1,239.999 80.998,239.999 65.999,239.999 C65.999,235.667 65.999,231.332 65.999,227.0 C56.0,227.0 45.998,227.0 36.0,227.0 C36.0,233.332 36.0,239.667 36.0,245.999 C33.0,245.999 29.999,245.999 26.999,245.999 C26.999,239.333 26.999,232.665 26.999,225.999 C17.853,225.920 7.663,226.74 0.0,227.0 C0.0,226.666 0.0,226.333 0.0,225.999 C3.451,220.432 1.0,191.96 0.999,182.0 C0.999,143.670 0.999,105.329 0.999,66.999 C1.666,66.999 2.333,66.999 3.0,66.999 C3.0,68.999 3.0,71.0 3.0,73.0 C11.999,73.0 21.0,73.0 29.999,73.0 C30.297,66.9 31.968,60.809 31.999,52.0 C32.999,52.0 34.0,52.0 34.999,52.0 C34.999,49.0 34.999,45.999 34.999,42.999 C34.0,42.999 32.999,42.999 31.999,42.999 C31.999,28.668 31.999,14.331 31.999,0.0 Z',
    href: imageG,
    activeHref: activeImageG,
  },
  [Building.L]: {
    transform: 'translate(117 175)',
    width: 433,
    height: 414,
    d: 'M82.0,0.0 C106.997,0.0 132.2,0.0 157.0,0.0 C157.0,36.329 157.0,72.670 157.0,109.0 C248.990,109.0 341.9,109.0 432.999,109.0 C432.999,113.666 432.999,118.333 432.999,122.999 C341.9,122.999 248.990,122.999 157.0,122.999 C156.666,137.998 156.333,153.1 155.999,167.999 C185.996,167.999 216.3,167.999 246.0,167.999 C246.0,166.0 246.0,163.999 246.0,161.999 C260.331,161.999 274.668,161.999 288.999,161.999 C288.999,163.999 288.999,166.0 288.999,167.999 C299.665,167.999 310.334,167.999 321.0,167.999 C321.0,245.992 321.0,324.7 321.0,401.999 C255.339,401.999 189.660,401.999 124.0,401.999 C124.0,402.333 124.0,402.666 124.0,402.999 C125.649,405.248 127.173,409.347 128.0,411.999 C125.194,413.513 123.36,414.43 118.0,414.0 C117.38,412.233 116.742,412.319 116.0,409.999 C118.462,408.15 118.801,405.245 120.0,401.999 C113.0,401.999 105.999,401.999 99.0,401.999 C99.0,383.335 99.0,364.664 99.0,346.0 C66.3,346.0 32.996,346.0 0.0,346.0 C0.0,257.342 0.0,168.657 0.0,80.0 C13.998,80.0 28.1,80.0 42.0,80.0 C42.0,64.1 42.0,47.998 42.0,32.0 C55.332,32.0 68.668,32.0 82.0,32.0 C82.0,21.334 82.0,10.665 82.0,0.0 Z',
    href: imageL,
    activeHref: activeImageL,
  },
  [Building.K]: {
    transform: 'translate(48 291)',
    width: 166,
    height: 743,
    d: 'M23.999,0.0 C42.331,0.0 60.668,0.0 78.999,0.0 C78.999,1.999 78.999,4.0 78.999,5.999 C84.999,5.999 91.0,5.999 97.0,5.999 C97.0,28.331 97.0,50.668 97.0,72.999 C97.999,72.999 99.0,72.999 99.999,72.999 C99.999,73.999 99.999,75.0 99.999,75.999 C107.332,75.999 114.667,75.999 122.0,75.999 C122.0,257.315 122.0,438.684 122.0,620.0 C118.0,620.0 113.999,620.0 110.0,620.0 C110.0,660.995 110.0,702.4 110.0,743.0 C80.3,743.0 49.996,743.0 19.999,743.0 C19.999,585.15 19.999,426.984 19.999,269.0 C13.333,269.0 6.665,269.0 0.0,269.0 C0.0,210.5 0.0,150.994 0.0,91.999 C6.665,91.999 13.333,91.999 19.999,91.999 C19.999,63.336 19.999,34.663 19.999,5.999 C21.333,5.999 22.666,5.999 23.999,5.999 C23.999,4.0 23.999,1.999 23.999,0.0 ZM156.0,330.999 C157.333,330.999 158.666,330.999 160.0,330.999 C161.540,327.629 160.243,326.215 164.0,324.999 C164.557,326.603 164.800,327.403 165.0,329.999 C161.443,333.378 165.488,337.760 166.0,343.999 C164.539,344.853 163.132,345.811 162.0,346.999 C152.803,347.267 135.251,349.200 131.0,343.999 C129.806,342.103 130.422,338.681 130.0,338.0 C129.213,339.457 128.101,341.728 127.0,343.0 C126.666,342.666 126.333,342.333 125.999,341.999 C125.349,340.743 124.910,339.929 124.0,338.999 C123.813,331.422 125.360,329.123 128.0,324.999 C125.994,323.603 125.934,323.653 125.0,321.0 C125.666,321.0 126.333,321.0 127.0,321.0 C131.688,326.499 132.938,317.736 142.0,321.0 C146.334,322.561 147.104,326.974 153.0,327.999 C154.493,326.335 153.724,326.982 155.0,327.0 C155.802,328.179 155.773,328.681 156.0,330.999 ZM141.0,349.0 C143.333,349.0 145.666,349.0 148.0,349.0 C148.535,350.515 148.674,350.693 149.0,352.999 C146.582,354.302 146.166,354.801 142.0,354.999 C140.488,352.152 140.87,352.360 141.0,349.0 Z',
    href: imageK,
    activeHref: activeImageK,
  },
  [Building.ABCD]: {
    transform: 'translate(1509 83)',
    width: 802,
    height: 489,
    d: 'M661.999,0.0 C693.996,0.0 726.3,0.0 758.0,0.0 C761.531,10.755 759.0,29.267 759.0,42.0 C759.0,72.330 759.0,102.669 759.0,132.999 C759.0,233.989 759.0,335.10 759.0,435.999 C767.580,435.863 796.910,433.757 801.999,436.999 C787.668,436.999 773.331,436.999 759.0,436.999 C759.0,454.331 759.0,471.668 759.0,489.0 C726.669,489.0 694.330,489.0 661.999,489.0 C661.999,468.2 661.999,446.997 661.999,426.0 C643.1,426.0 623.998,426.0 605.0,426.0 C605.0,429.666 605.0,433.333 605.0,436.999 C545.5,436.999 484.994,436.999 424.999,436.999 C424.999,439.999 424.999,443.0 424.999,446.0 C395.336,446.0 365.663,446.0 336.0,446.0 C336.0,449.999 336.0,454.0 336.0,458.0 C331.333,458.0 326.666,458.0 322.0,458.0 C322.0,451.0 322.0,443.999 322.0,436.999 C280.670,436.999 239.329,436.999 197.999,436.999 C197.999,450.998 197.999,465.1 197.999,479.0 C163.3,479.0 127.996,479.0 93.0,479.0 C93.0,465.1 93.0,450.998 93.0,436.999 C62.3,436.999 30.996,436.999 0.0,436.999 C0.0,404.669 0.0,372.330 0.0,340.0 C2.999,340.0 6.0,340.0 9.0,340.0 C9.0,338.666 9.0,337.333 9.0,335.999 C37.330,335.999 65.669,335.999 94.0,335.999 C94.0,337.333 94.0,338.666 94.0,340.0 C95.333,340.0 96.666,340.0 97.999,340.0 C97.999,284.672 97.999,229.327 97.999,174.0 C100.333,174.0 102.666,174.0 104.999,174.0 C104.999,176.666 104.999,179.333 104.999,181.999 C126.997,181.999 149.2,181.999 170.999,181.999 C170.999,179.333 170.999,176.666 170.999,174.0 C173.333,174.0 175.666,174.0 177.999,174.0 C177.999,229.327 177.999,284.672 177.999,340.0 C201.330,340.0 224.669,340.0 248.0,340.0 C248.0,271.6 248.0,201.993 248.0,132.999 C385.986,132.999 524.13,132.999 661.999,132.999 C661.999,88.671 661.999,44.328 661.999,0.0 Z',
    href: imageABCD,
    activeHref: activeImageABCD,
  },
  [Building.YM]: {
    transform: 'translate(1128 589)',
    width: 102,
    height: 82,
    d: 'M1.0,0.0 L0.0,66.999 L26.0,89.999 L107.999,91.0 L107.999,0.0 L1.0,0.0 Z',
    href: imageYM,
    activeHref: activeImageYM,
  },
  [Building.DD]: {
    transform: 'translate(1244 609)',
    width: 287,
    height: 89,
    d: 'M0.0,37.0 L0.0,70.0 L295.999,70.0 L295.999,37.0 L0.0,37.0 Z',
    href: imageDD,
    activeHref: activeImageDD,
  },
  [Building.S]: {
    transform: 'translate(1463 678)',
    width: 234,
    height: 220,
    d: 'M141.0,0.0 C148.670,0.941 159.330,0.934 166.999,0.0 C166.999,26.997 166.999,54.2 166.999,80.999 C189.331,80.999 211.668,80.999 234.0,80.999 C234.0,125.662 234.0,170.337 234.0,215.0 C193.670,215.0 153.329,215.0 113.0,215.0 C112.926,217.532 112.879,218.716 112.0,220.0 C112.0,218.333 112.0,216.666 112.0,215.0 C83.2,215.0 53.997,215.0 25.0,215.0 C25.0,213.333 25.0,211.666 25.0,209.999 C16.667,209.999 8.332,209.999 0.0,209.999 C0.0,173.337 0.0,136.663 0.0,100.0 C10.447,100.35 14.739,98.73 25.0,97.999 C25.0,92.333 25.0,86.666 25.0,80.999 C63.662,80.999 102.337,80.999 141.0,80.999 C141.0,54.2 141.0,26.997 141.0,0.0 Z',
    href: imageS,
    activeHref: activeImageS,
  },
  [Building.T]: {
    transform: 'translate(1670 770)',
    width: 133,
    height: 463,
    d: 'M0.0,0.0 C11.332,0.0 22.667,0.0 34.0,0.0 C34.0,1.666 34.0,3.333 34.0,5.0 C57.664,5.0 81.335,5.0 104.999,5.0 C104.999,147.652 104.999,290.347 104.999,432.999 C114.332,432.999 123.667,432.999 132.999,432.999 C132.999,442.998 132.999,453.0 132.999,462.999 C88.671,462.999 44.328,462.999 0.0,462.999 C0.0,308.682 0.0,154.317 0.0,0.0 Z',
    href: imageT,
    activeHref: activeImageT,
  },
  [Building.R]: {
    transform: 'translate(87 705)',
    width: 612,
    height: 542,
    d: 'M279.0,214.999 C369.657,214.999 460.342,214.999 551.0,214.999 C551.0,210.333 551.0,205.666 551.0,200.999 C560.845,197.701 578.210,199.916 589.999,200.0 C590.849,202.448 591.38,206.183 590.999,210.0 C596.999,210.0 603.0,210.0 609.0,210.0 C611.51,216.245 609.999,227.67 610.0,235.0 C610.0,253.998 610.0,273.1 610.0,292.0 C610.0,352.993 610.0,414.6 610.0,474.999 C611.333,474.999 612.666,474.999 614.0,474.999 C614.0,491.998 614.0,509.1 614.0,525.999 C612.666,525.999 611.333,525.999 610.0,525.999 C610.0,527.333 610.0,528.666 610.0,529.999 C600.684,533.124 584.225,531.83 573.0,530.999 C573.0,532.999 573.0,535.0 573.0,536.999 C560.334,536.999 547.665,536.999 534.999,536.999 C534.999,535.0 534.999,532.999 534.999,530.999 C510.2,530.999 484.997,530.999 459.999,530.999 C459.442,529.396 459.199,528.596 458.999,525.999 C458.0,525.999 456.999,525.999 455.999,525.999 C455.999,509.1 455.999,491.998 455.999,474.999 C456.999,474.999 458.0,474.999 458.999,474.999 C458.999,470.333 458.999,465.666 458.999,460.999 C466.551,458.501 479.670,460.0 489.0,459.999 C509.664,459.999 530.335,459.999 551.0,459.999 C551.0,447.1 551.0,433.998 551.0,420.999 C537.328,412.48 503.797,415.999 482.0,415.999 C426.5,415.999 369.994,415.999 313.999,415.999 C313.999,450.663 313.999,485.336 313.999,519.999 C283.336,519.999 252.663,519.999 222.0,519.999 C222.0,518.666 222.0,517.333 222.0,515.999 C152.340,515.999 82.659,515.999 13.0,515.999 C12.150,513.551 11.961,509.816 12.0,505.999 C9.0,505.999 5.999,505.999 2.999,505.999 C-1.327,492.857 1.999,470.273 1.999,455.0 C1.999,417.670 1.999,380.329 1.999,343.0 C4.448,342.150 8.183,341.961 12.0,341.999 C12.0,300.4 12.0,257.995 12.0,216.0 C20.786,213.49 36.337,214.917 46.999,214.999 C46.999,208.667 46.999,202.332 46.999,196.0 C60.635,191.465 91.472,194.920 107.999,194.999 C107.999,143.5 107.999,90.994 107.999,39.0 C112.357,37.511 120.71,37.924 125.999,38.0 C125.999,36.666 125.999,35.333 125.999,34.0 C132.680,31.743 144.580,32.919 153.0,33.0 C153.0,22.667 153.0,12.332 153.0,2.0 C163.208,-1.367 180.844,1.0 192.999,1.0 C221.330,1.0 249.669,1.0 278.0,1.0 C282.342,14.205 279.0,51.204 279.0,67.999 C279.0,116.995 279.0,166.4 279.0,214.999 Z',
    href: imageR,
    activeHref: activeImageR,
  },
};

export default SVG_DATA;
