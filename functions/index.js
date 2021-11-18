const functions = require('firebase-functions');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');

admin.initializeApp();

exports.createComment = functions.region('asia-northeast3').https.onCall(async (data) => {
  const serverTimestamp = admin.firestore.FieldValue.serverTimestamp();

  const { text, building, password } = data;

  const newComment = {
    text,
    building,
    password: null,
    createdAt: serverTimestamp,
  };

  const hash = await bcrypt.hash(password, 10);

  newComment.password = hash;

  return admin
    .firestore()
    .collection('comment')
    .add(newComment)
    .catch((error) => {
      console.error('Error create comment: ', error);
      throw new functions.https.HttpsError('internal', error);
    });
});

exports.updateComment = functions.region('asia-northeast3').https.onCall(async (data) => {
  const { id, text, password } = data;

  const doc = await admin.firestore().collection('comment').doc(id).get();
  const docData = doc.data();

  const hash = docData.password;

  const result = await bcrypt.compare(password, hash);

  if (!result) {
    throw new functions.https.HttpsError('unauthenticated', '비밀번호를 다시 확인해주세요.');
  }

  return admin
    .firestore()
    .collection('comment')
    .doc(id)
    .update({
      text,
    })
    .catch((error) => {
      console.error('Error update comment: ', error);
      throw new functions.https.HttpsError('internal', error);
    });
});

exports.deleteComment = functions.region('asia-northeast3').https.onCall(async (data) => {
  const { id, password } = data;

  const doc = await admin.firestore().collection('comment').doc(id).get();
  const docData = doc.data();

  const hash = docData.password;

  const result = await bcrypt.compare(password, hash);

  if (!result) {
    throw new functions.https.HttpsError('unauthenticated', '비밀번호를 다시 확인해주세요.');
  }

  return admin
    .firestore()
    .collection('comment')
    .doc(id)
    .delete()
    .catch((error) => {
      console.error('Error delete comment: ', error);
      throw new functions.https.HttpsError('internal', error);
    });
});
