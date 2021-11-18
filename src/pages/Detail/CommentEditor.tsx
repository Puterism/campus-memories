import cx from 'classnames';
import React from 'react';
import closeIconUrl from '../../assets/close.svg';
import LinkButton from '../../components/LinkButton/LinkButton';
import { MESSAGE } from '../../constants/message';
import useInput from '../../hooks/useInput';
import useMutationComment from '../../hooks/useMutationComment';
import { Building, Comment } from '../../types/common';
import styles from './CommentEditor.module.css';

interface Props {
  building: Building;
  id?: Comment['id'];
  initialText?: Comment['text'];
  onClose: () => void;
}

const CommentEditor = ({ building, id, initialText, onClose }: Props) => {
  const [text, onChangeText, setText] = useInput(initialText ?? '');
  const [password, onChangePassword, setPassword] = useInput('', { numberOnly: true });
  const { createComment, updateComment, isCreating, isUpdating } = useMutationComment(building);

  const trimmedText = text.trim();

  const handleCreateComment = async () => {
    try {
      await createComment(trimmedText, password);

      setText('');
      setPassword('');
      onClose();
    } catch (error: unknown) {
      console.error(error);
      alert(MESSAGE.CREATE_UNEXPECTED_ERROR);
    }
  };

  const handleUpdateComment = async () => {
    if (!id) return;

    try {
      await updateComment(id, trimmedText, password);

      setText('');
      setPassword('');
      onClose();
    } catch (error: unknown) {
      console.error(error);
      alert((error as Error).message ?? MESSAGE.UPDATE_UNEXPECTED_ERROR);

      setPassword('');
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (trimmedText.length === 0 || password.length !== 4) return;

    if (id) {
      handleUpdateComment();

      return;
    }

    handleCreateComment();
  };

  return (
    <section className={styles.commentEditorContainer}>
      <div className={styles.header}>
        <LinkButton onClick={onClose}>
          <img src={closeIconUrl} alt="닫기" />
        </LinkButton>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <textarea
          className={cx(styles.input, styles.textarea)}
          placeholder="당신의 기억을 공유해주세요"
          value={text}
          onChange={onChangeText}
          disabled={isCreating || isUpdating}
          autoFocus
          required
        />
        <input
          type="password"
          className={styles.input}
          placeholder="비밀번호 (숫자 4자리)"
          maxLength={4}
          inputMode="numeric"
          value={password}
          onChange={onChangePassword}
          required
        />
        <button disabled={isCreating || isUpdating} className={styles.submitButton}>
          {id
            ? isUpdating
              ? '수정 중...'
              : '수정하기'
            : isCreating
            ? '공유하는 중...'
            : '기억 공유하기'}
        </button>
      </form>
    </section>
  );
};

export default CommentEditor;
