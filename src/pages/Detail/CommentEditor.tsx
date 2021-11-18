import cx from 'classnames';
import React from 'react';
import closeIconUrl from '../../assets/close.svg';
import LinkButton from '../../components/LinkButton/LinkButton';
import useCreateComment from '../../hooks/useCreateComment';
import useInput from '../../hooks/useInput';
import { Building } from '../../types/common';
import styles from './CommentEditor.module.css';

interface Props {
  building: Building;
  onClose: () => void;
}

const CommentEditor = ({ building, onClose }: Props) => {
  const [text, onChangeText, setText] = useInput('');
  const [password, onChangePassword, setPassword] = useInput('');

  const { createComment, isLoading } = useCreateComment(building);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedText = text.trim();

    if (trimmedText.length === 0) return;

    try {
      await createComment(trimmedText);

      setText('');
    } catch (error: unknown) {
      alert(error);
    }
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
          disabled={isLoading}
          autoFocus
        />
        <input
          type="password"
          className={styles.input}
          placeholder="비밀번호 (숫자 4자리)"
          maxLength={4}
          value={password}
          onChange={onChangePassword}
        />
        <button disabled={isLoading} className={styles.submitButton}>
          {isLoading ? '잠시만 기다려주세요' : '기억 공유하기'}
        </button>
      </form>
    </section>
  );
};

export default CommentEditor;
