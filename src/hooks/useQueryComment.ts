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
import { useLayoutEffect, useState } from 'react';
import { db } from '../firebase';
import { Building, Comment } from '../types/common';

const getResultListFromSnapshot = <T extends { id: string; createdAt: Date }>(
  querySnapshot: QuerySnapshot<DocumentData>
): T[] => {
  const result: T[] = [];

  querySnapshot.forEach((doc) => {
    const data = doc.data();

    // Note: 댓글이 생성된 직후 데이터를 바로 받아올 때, serverTimestamp의 값이 null인 상황이 있음
    if (data.createdAt) {
      result.push({ id: doc.id, ...data, createdAt: (data.createdAt as Timestamp).toDate() } as T);
    }
  });

  return result;
};

const useQueryComment = (building: Building | 'Z') => {
  if (building === Building.Z1 || building === Building.Z2Z3 || building === Building.Z4) {
    building = 'Z';
  }

  const [isLoading, setLoading] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);

  useLayoutEffect(() => {
    setLoading(true);

    const q = query(
      collection(db, 'comment'),
      where('building', '==', building),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const result = getResultListFromSnapshot<Comment>(querySnapshot);

      setComments(result);
      setLoading(false);
    });

    return unsubscribe;
  }, [building]);

  return { comments, isLoading };
};

export default useQueryComment;
