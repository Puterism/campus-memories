import appStyles from '../../App.module.css';
import closeWhiteUrl from '../../assets/close_white.svg';
import LinkButton from '../../components/LinkButton/LinkButton';
import PATH from '../../constants/path';
import styles from './About.module.css';

const About = () => {
  return (
    <aside className={appStyles.aside}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.dummy}></div>
          <h2 className={styles.title}>ABOUT</h2>
          <LinkButton to={PATH.root}>
            <img src={closeWhiteUrl} alt="닫기" />
          </LinkButton>
        </div>
        <article className={styles.article}>
          <p>
            <u>Hongik Memories</u>
            <br />
            〈홍익 메모리즈〉는 홍익대학교 캠퍼스에 얽힌 다양한 이야기가 모여 만들어진 기억의
            지도입니다. 픽셀아트로 오밀조밀 그려진 홍대 캠퍼스를 탐색하며, 홍익인들이 직접 들려주는
            나만 아는 지름길, 전망 좋은 스팟, 학내 카페의 맛있는 메뉴 등 소중한 기억들을 살펴보고,
            당신의 이야기도 공유해 주세요. 학교를 떠나도 언제나 〈홍익 메모리즈〉와 함께 캠퍼스
            라이프를 추억하세요.
          </p>
          <p>
            <u>디자인</u>
            <br />
            양해림 lim0ee22@gmail.com
          </p>
          <p>
            <u>개발</u>
            <br />
            심문성 Puterism.K@gmail.com
          </p>
          <p>
            <u>도움 주신 분들</u>
            <br />
            정예우
            <br />
            고정민
            <br />
            태유진
            <br />
            민정은
          </p>
        </article>
      </div>
    </aside>
  );
};

export default About;
