import cx from 'classnames';
import { Link } from 'wouter';
import { BUILDING } from '../../constants/building';
import PATH from '../../constants/path';
import useQueryComment from '../../hooks/useQueryComment';
import { Building } from '../../types/common';
import styles from './Detail.module.css';
import detailContent from './DetailContent';
import DetailForm from './DetailForm';

interface Props {
  building: Building;
}

const Detail = ({ building }: Props) => {
  const { comments } = useQueryComment(building);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link to={PATH.menu}>뒤로</Link>
        <h2 className={styles.title}>{BUILDING[building].name}</h2>
        <Link to={PATH.root}>닫기</Link>
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
