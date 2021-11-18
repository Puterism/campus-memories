import { httpsCallable } from 'firebase/functions';
import { useState } from 'react';
import { functions } from '../firebase';
import { Building, Comment } from '../types/common';

const useMutationComment = (building: Building) => {
  const [isCreating, setCreating] = useState(false);
  const [isDeleting, setDeleting] = useState(false);

  const createComment = async (text: Comment['text'], password: string) => {
    if (isCreating) return;

    setCreating(true);

    const createCommentFunctions = httpsCallable(functions, 'createComment');

    try {
      await createCommentFunctions({
        text,
        building,
        password,
      });
    } finally {
      setCreating(false);
    }
  };

  const deleteComment = async (id: Comment['id'], password: string) => {
    if (isDeleting) return;

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

  return { createComment, deleteComment, isCreating, isDeleting };
};

export default useMutationComment;
