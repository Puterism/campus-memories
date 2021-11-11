import React from 'react';
import useInput from '../../hooks/useInput';
import styles from './DetailForm.module.css';

interface Props {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const DetailForm = ({ onSubmit }: Props) => {
  const [text, onChangeText] = useInput('');

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <textarea placeholder="기억을 공유해주세요" value={text} onChange={onChangeText} />
      <button>작성하기</button>
    </form>
  );
};

export default DetailForm;
