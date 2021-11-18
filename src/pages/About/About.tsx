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
            [홍익 메모리즈]는 홍대 캠퍼스 안에서의 대학생활 기억들을 기록하고 공유하는 지도입니다.
            공간에 얽힌 홍대생들의 이야기가 조각조각 모여, 지도의 이야기가 풍부해집니다.
            <br />
            홍익인들이 직접 들려주는 홍대의 이야기를 들어보세요. 학교를 떠나더라도 언제나 [홍익
            메모리즈]에 돌아와 대학생활을 추억하세요. 캠퍼스 생활이 낯선 새내기들에게 홍대 캠퍼스의
            트리비아를 알려주세요.
          </p>
          <p>
            <u>Credit</u>
            <br />
            양해림
          </p>
        </article>
      </div>
    </aside>
  );
};

export default About;
