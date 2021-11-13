import {
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
  QuerySnapshot,
  DocumentData,
  Timestamp,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { Building, Comment } from '../types/common';

interface Props {
  building: Building;
}

const getResultListFromSnapshot = <T extends { id: string; createdAt: Date }>(
  querySnapshot: QuerySnapshot<DocumentData>
): T[] => {
  const result: T[] = [];

  querySnapshot.forEach((doc) => {
    const data = doc.data();

    result.push({ id: doc.id, ...data, createdAt: (data.createdAt as Timestamp).toDate() } as T);
  });

  return result;
};

const useQueryComment = ({ building }: Props) => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const q = query(
      collection(db, 'comment'),
      where('building', '==', building),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const result = getResultListFromSnapshot<Comment>(querySnapshot);

      setComments(result);
    });

    return unsubscribe;
  }, [building]);

  return [comments];
};

export default useQueryComment;
