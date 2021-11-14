import cx from 'classnames';
import { Link } from 'wouter';
import PATH from '../../constants/path';
import useQueryComment from '../../hooks/useQueryComment';
import { Building } from '../../types/common';
import styles from './Detail.module.css';
import DetailForm from './DetailForm';

interface Props {
  building: Building;
}

const Detail = ({ building }: Props) => {
  const { comments } = useQueryComment(building);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link to={PATH.menu}>뒤로</Link>
        <h2 className={styles.title}>{building}</h2>
        <Link to={PATH.root}>닫기</Link>
      </header>
      <section className={styles.content}>
        <article className={cx(styles.description, styles.detailItem)}>
          가치를 하여도 꽃 인생을 힘있다. 품었기 무엇을 하는 때문이다. 그들의 피에 있는 힘있다. 너의
          그것은 무한한 소담스러운 소리다.이것은 때문이다. 가지에 굳세게 새 인간에 맺어, 보이는
          피어나는 대중을 평화스러운 봄바람이다. 찾아 두기 위하여서, 부패뿐이다. 그들의 있는 것은
          그들은 것이다. 뛰노는 낙원을 이상의 청춘을 광야에서 없는 하는 힘있다. 천지는 피고, 보배를
          충분히 꽃이 미묘한 봄바람을 아름다우냐? 때에, 있으며, 무엇을 굳세게 보라.
        </article>
        <ul className={styles.commentList}>
          {comments.map(({ id, text }) => (
            <li key={id} className={cx(styles.commentItem, styles.detailItem)}>
              {text}
            </li>
          ))}
        </ul>
        <DetailForm onSubmit={handleSubmit} />
      </section>
    </div>
  );
};

export default Detail;
