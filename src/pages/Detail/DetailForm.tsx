import React from 'react';
import useCreateComment from '../../hooks/useCreateComment';
import useInput from '../../hooks/useInput';
import { Building } from '../../types/common';
import styles from './DetailForm.module.css';

interface Props {
  building: Building;
}

const DetailForm = ({ building }: Props) => {
  const [text, onChangeText, setText] = useInput('');

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
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        placeholder="기억을 공유해주세요"
        value={text}
        onChange={onChangeText}
        disabled={isLoading}
      />
      <button disabled={isLoading}>{isLoading ? '잠시만 기다려주세요' : '작성하기'}</button>
    </form>
  );
};

export default DetailForm;
