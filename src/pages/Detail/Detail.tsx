import cx from 'classnames';
import { useState } from 'react';
import appStyles from '../../App.module.css';
import addIconUrl from '../../assets/add.svg';
import closeWhiteUrl from '../../assets/close_white.svg';
import LinkButton from '../../components/LinkButton/LinkButton';
import { BUILDING } from '../../constants/building';
import PATH from '../../constants/path';
import useQueryComment from '../../hooks/useQueryComment';
import { Building } from '../../types/common';
import CommentEditor from './CommentEditor';
import styles from './Detail.module.css';
import detailContent from './detailContent';

interface Props {
  building: Building;
}

const Detail = ({ building }: Props) => {
  const [isCommentEditorOpen, setCommentEditorOpen] = useState(false);

  const openCommentEditor = () => {
    setCommentEditorOpen(true);
  };

  const closeCommentEditor = () => {
    setCommentEditorOpen(false);
  };

  const { comments } = useQueryComment(building);

  return (
    <aside className={cx(appStyles.aside, { [appStyles.expended]: isCommentEditorOpen })}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.dummy} />
          <h2 className={styles.title}>{BUILDING[building].name}</h2>
          <LinkButton to={PATH.root}>
            <img src={closeWhiteUrl} alt="닫기" />
          </LinkButton>
        </header>
        <section className={styles.content}>
          <article className={cx(styles.description, styles.detailItem)}>
            {detailContent[building]}
          </article>
          <ul className={styles.commentList}>
            {comments.map(({ id, text }) => (
              <li key={id} className={styles.commentItem}>
                {text}
              </li>
            ))}
          </ul>
        </section>
        <div className={styles.add}>
          <LinkButton onClick={openCommentEditor}>
            <img src={addIconUrl} alt="추가" />
          </LinkButton>
        </div>
      </div>
      {isCommentEditorOpen && <CommentEditor building={building} onClose={closeCommentEditor} />}
    </aside>
  );
};

export default Detail;
