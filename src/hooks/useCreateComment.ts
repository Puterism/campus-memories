import { addDoc, collection, serverTimestamp } from '@firebase/firestore';
import { useState } from 'react';
import { COLLECTION } from '../constants/firestore';
import { db } from '../firebase';
import { Building, Comment } from '../types/common';

const useCreateComment = (building: Building) => {
  const [isLoading, setLoading] = useState(false);

  const createComment = async (text: Comment['text']) => {
    setLoading(true);

    const docRef = await addDoc(collection(db, COLLECTION.COMMENT), {
      text,
      building,
      createdAt: serverTimestamp(),
    });

    setLoading(false);

    return docRef;
  };

  return { createComment, isLoading };
};

export default useCreateComment;
