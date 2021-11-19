import { httpsCallable } from 'firebase/functions';
import { useState } from 'react';
import { functions } from '../firebase';
import { Building, Comment } from '../types/common';

const useMutationComment = (building: Building | 'Z') => {
  if (building === Building.Z1 || building === Building.Z2Z3 || building === Building.Z4) {
    building = 'Z';
  }

  const [isCreating, setCreating] = useState(false);
  const [isUpdating, setUpdating] = useState(false);
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

  const updateComment = async (id: Comment['id'], text: Comment['text'], password: string) => {
    if (isUpdating) return;

    setUpdating(true);

    const updateCommentFunctions = httpsCallable(functions, 'updateComment');

    try {
      await updateCommentFunctions({
        id,
        text,
        password,
      });
    } finally {
      setUpdating(false);
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

  return { createComment, updateComment, deleteComment, isCreating, isUpdating, isDeleting };
};

export default useMutationComment;
