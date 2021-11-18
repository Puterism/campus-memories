import cx from 'classnames';
import React, { useState } from 'react';
import appStyles from '../../App.module.css';
import addIconUrl from '../../assets/add.svg';
import closeWhiteUrl from '../../assets/close_white.svg';
import LinkButton from '../../components/LinkButton/LinkButton';
import { BUILDING } from '../../constants/building';
import { MESSAGE } from '../../constants/message';
import PATH from '../../constants/path';
import useInput from '../../hooks/useInput';
import useMutationComment from '../../hooks/useMutationComment';
import useQueryComment from '../../hooks/useQueryComment';
import { Building, Comment } from '../../types/common';
import CommentEditor from './CommentEditor';
import styles from './Detail.module.css';
import detailContent from './detailContent';

interface Props {
  building: Building;
}

const Detail = ({ building }: Props) => {
  const [isCommentEditorOpen, setCommentEditorOpen] = useState(false);
  const [selectedCommentId, setSelectedCommentId] = useState<Comment['id'] | null>(null);
  const [isEditingComment, setEditingComment] = useState(false);
  const [isDeletingComment, setDeletingComment] = useState(false);

  const [password, onChangePassword, setPassword] = useInput('', { numberOnly: true });

  const { deleteComment, isDeleting } = useMutationComment(building);

  const initForm = () => {
    setSelectedCommentId(null);
    setDeletingComment(false);
    setEditingComment(false);
    setPassword('');
  };

  const openCommentEditor = () => {
    setCommentEditorOpen(true);
  };

  const closeCommentEditor = () => {
    setCommentEditorOpen(false);
  };

  const selectComment = (id: Comment['id']) => {
    if (selectedCommentId === id) {
      initForm();

      return;
    }

    setDeletingComment(false);
    setEditingComment(false);
    setSelectedCommentId(id);
  };

  const handleDeleteComment = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isDeletingComment || !selectedCommentId) return;

    try {
      await deleteComment(selectedCommentId, password);

      initForm();
    } catch (error: unknown) {
      console.error(error);
      alert((error as Error).message ?? MESSAGE.DELETE_UNEXPECTED_ERROR);

      setPassword('');
    }
  };

  const { comments, isLoading } = useQueryComment(building);

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
            {!isLoading &&
              comments.map(({ id, text }) => (
                <li key={id} className={styles.commentItem}>
                  <p className={styles.comment} onClick={() => selectComment(id)}>
                    {text}
                  </p>
                  {selectedCommentId === id && !(isDeletingComment || isEditingComment) && (
                    <div className={styles.commentControl}>
                      <button type="button" className={styles.commentControlButton}>
                        수정
                      </button>
                      <button
                        type="button"
                        className={styles.commentControlButton}
                        onClick={() => setDeletingComment(true)}
                      >
                        삭제
                      </button>
                    </div>
                  )}
                  {selectedCommentId === id && isDeletingComment && (
                    <form className={styles.commentControl} onSubmit={handleDeleteComment}>
                      <input
                        type="password"
                        className={styles.commentControlInput}
                        placeholder="비밀번호"
                        maxLength={4}
                        inputMode="numeric"
                        value={password}
                        onChange={onChangePassword}
                        autoFocus
                        required
                      />
                      <button className={styles.commentControlButton}>
                        {isDeleting ? '삭제 중...' : '삭제'}
                      </button>
                    </form>
                  )}
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
