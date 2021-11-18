import cx from 'classnames';
import { Link } from 'react-router-dom';
import closeIconUrl from '../../assets/close.svg';
import LinkButton from '../../components/LinkButton/LinkButton';
import { BUILDING } from '../../constants/building';
import PATH from '../../constants/path';
import useQueryComment from '../../hooks/useQueryComment';
import { Building } from '../../types/common';
import styles from './Detail.module.css';
import DetailForm from './DetailForm';
import detailContent from './detailContent';
interface Props {
  building: Building;
}

const Detail = ({ building }: Props) => {
  const { comments } = useQueryComment(building);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.dummy} />
        <h2 className={styles.title}>{BUILDING[building].name}</h2>
        <LinkButton to={PATH.root}>
          <img src={closeIconUrl} alt="닫기" />
        </LinkButton>
      </header>
      <section className={styles.content}>
        <article className={cx(styles.description, styles.detailItem)}>
          {detailContent[building]}
        </article>
        <ul className={styles.commentList}>
          {comments.map(({ id, text }) => (
            <li key={id} className={cx(styles.commentItem, styles.detailItem)}>
              {text}
            </li>
          ))}
        </ul>
      </section>
      <DetailForm building={building} />
    </div>
  );
};

export default Detail;
