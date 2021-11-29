import cx from 'classnames';
import React, { useState } from 'react';
import appStyles from '../../App.module.css';
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
  const [selectedComment, setSelectedComment] = useState<Comment | null>(null);
  const [isEditingComment, setEditingComment] = useState(false);
  const [isDeletingComment, setDeletingComment] = useState(false);

  const [password, onChangePassword, setPassword] = useInput('', { numberOnly: true });

  const { deleteComment, isDeleting } = useMutationComment(building);

  const initForm = () => {
    setSelectedComment(null);
    setDeletingComment(false);
    setEditingComment(false);
    setPassword('');
  };

  const openCommentEditor = () => {
    initForm();
    setCommentEditorOpen(true);
  };

  const closeCommentEditor = () => {
    initForm();
    setCommentEditorOpen(false);
  };

  const selectComment = (comment: Comment) => {
    if (selectedComment?.id === comment.id) {
      initForm();

      return;
    }

    setDeletingComment(false);
    setEditingComment(false);
    setSelectedComment(comment);
  };

  const startEditComment = () => {
    setEditingComment(true);
    setCommentEditorOpen(true);
  };

  const handleDeleteComment = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isDeletingComment || !selectedComment) return;

    try {
      await deleteComment(selectedComment.id, password);

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
              comments.map((comment) => (
                <li key={comment.id} className={styles.commentItem}>
                  <p className={styles.comment} onClick={() => selectComment(comment)}>
                    {comment.text}
                  </p>
                  {selectedComment?.id === comment.id && !(isDeletingComment || isEditingComment) && (
                    <div className={styles.commentControl}>
                      <button
                        type="button"
                        className={styles.commentControlButton}
                        onClick={() => startEditComment()}
                      >
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
                  {selectedComment?.id === comment.id && isDeletingComment && (
                    <form className={styles.commentControl} onSubmit={handleDeleteComment}>
                      <input
                        type="password"
                        className={styles.commentControlInput}
                        placeholder="비밀번호"
                        minLength={4}
                        maxLength={4}
                        inputMode="numeric"
                        value={password}
                        onChange={onChangePassword}
                        disabled={isDeleting}
                        autoFocus
                        required
                      />
                      <button className={styles.commentControlButton} disabled={isDeleting}>
                        {isDeleting ? '삭제 중...' : '삭제'}
                      </button>
                    </form>
                  )}
                </li>
              ))}
          </ul>
        </section>
        <div className={styles.add}>
          <LinkButton secondary big onClick={openCommentEditor} aria-label="추가">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31.4"
              height="31.4"
              viewBox="0 0 31.4 31.4"
            >
              <line
                x2="21.5"
                y2="21.492"
                transform="translate(0.5 15.703) rotate(-45)"
                fill="none"
                stroke="#374DBA"
                strokeWidth="1"
              />
              <line
                x1="21.5"
                y2="21.492"
                transform="translate(0.5 15.703) rotate(-45)"
                fill="none"
                stroke="#374DBA"
                strokeWidth="1"
              />
            </svg>
          </LinkButton>
        </div>
      </div>
      {isCommentEditorOpen && !isEditingComment && (
        <CommentEditor building={building} onClose={closeCommentEditor} />
      )}
      {isCommentEditorOpen && isEditingComment && selectedComment && (
        <CommentEditor
          building={building}
          id={selectedComment.id}
          initialText={selectedComment.text}
          onClose={closeCommentEditor}
        />
      )}
    </aside>
  );
};

export default Detail;
