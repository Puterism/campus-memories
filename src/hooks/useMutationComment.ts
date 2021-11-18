import { httpsCallable } from 'firebase/functions';
import { useState } from 'react';
import { functions } from '../firebase';
import { Building, Comment } from '../types/common';

const useMutationComment = (building: Building) => {
  const [isLoading, setLoading] = useState(false);
  const [isDeleting, setDeleting] = useState(false);

  const createComment = async (text: Comment['text'], password: string) => {
    setLoading(true);

    const createCommentFunctions = httpsCallable(functions, 'createComment');

    try {
      await createCommentFunctions({
        text,
        building,
        password,
      });
    } finally {
      setLoading(false);
    }
  };

  const deleteComment = async (id: Comment['id'], password: string) => {
    setDeleting(true);

    const deleteCommentFunctions = httpsCallable(functions, 'deleteComment');

    try {
      await deleteCommentFunctions({
        id,
        password,
      });
    } finally {
      setDeleting(false);
    }
  };

  return { createComment, deleteComment, isLoading, isDeleting };
};

export default useMutationComment;
