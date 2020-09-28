import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: process.env.FIREBASE_apiKey,
  authDomain: process.env.FIREBASE_authDomain,
  databaseURL: process.env.FIREBASE_databaseURL,
  projectId: process.env.FIREBASE_projectId,
  storageBucket: process.env.FIREBASE_storageBucket,
  messagingSenderId: process.env.FIREBASE_messagingSenderId,
  appId: process.env.FIREBASE_appId,
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { email } = userAuth;
    const user1 = {
      name: "User1",
      icon:
        "https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375__340.png",
      lists: [],
    };
    const user2 = {
      name: "User2",
      icon:
        "https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807__340.png",
      lists: [],
    };
    const user3 = {
      name: "User3",
      icon:
        "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916__340.png",
      lists: [],
    };
    const user4 = {
      name: "User4",
      icon:
        "https://cdn.pixabay.com/photo/2016/11/01/21/11/avatar-1789663__340.png",
      lists: [],
    };

    try {
      await userRef.set({
        email,
        user1,
        user2,
        user3,
        user4,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user!", error.message);
    }
  }
  return userRef;
};

export const getMyList = async (userId, idx) => {
  try {
    const userRef = await firestore.collection(`users`).doc(`${userId}`);
    const userDoc = await userRef.get();
    if (idx === 0) {
      const choseProfileLists = await userDoc.get(`user1`);
      return choseProfileLists.lists;
    } else if (idx === 1) {
      const choseProfileLists = await userDoc.get(`user2`);
      return choseProfileLists.lists;
    } else if (idx === 2) {
      const choseProfileLists = await userDoc.get(`user3`);
      return choseProfileLists.lists;
    } else if (idx === 3) {
      const choseProfileLists = await userDoc.get(`user4`);
      return choseProfileLists.lists;
    }
  } catch {
    return "error";
  }
};

export const addMyList = async (userId, idx, data) => {
  try {
    const userRef = await firestore.collection(`users`).doc(`${userId}`);
    if (idx === 0) {
      await userRef.update({
        "user1.lists": firebase.firestore.FieldValue.arrayUnion({
          name: data,
        }),
      });
    } else if (idx === 1) {
      await userRef.update({
        "user2.lists": firebase.firestore.FieldValue.arrayUnion({
          name: data,
        }),
      });
    } else if (idx === 2) {
      await userRef.update({
        "user3.lists": firebase.firestore.FieldValue.arrayUnion({
          name: data,
        }),
      });
    } else if (idx === 3) {
      await userRef.update({
        "user4.lists": firebase.firestore.FieldValue.arrayUnion({
          name: data,
        }),
      });
    }
    const newData = await getMyList(userId, idx);
    return newData;
  } catch {
    return "error";
  }
};

export const removeMyList = async (userId, idx, data) => {
  try {
    const userRef = await firestore.collection(`users`).doc(`${userId}`);
    if (idx === 0) {
      await userRef.update({
        "user1.lists": firebase.firestore.FieldValue.arrayRemove({
          name: data,
        }),
      });
    } else if (idx === 1) {
      await userRef.update({
        "user2.lists": firebase.firestore.FieldValue.arrayRemove({
          name: data,
        }),
      });
    } else if (idx === 2) {
      await userRef.update({
        "user3.lists": firebase.firestore.FieldValue.arrayRemove({
          name: data,
        }),
      });
    } else if (idx === 3) {
      await userRef.update({
        "user4.lists": firebase.firestore.FieldValue.arrayRemove({
          name: data,
        }),
      });
    }
    const newData = await getMyList(userId, idx);
    return newData;
  } catch {
    return "error";
  }
};

export const getCuurentUser = () => {
  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged((userAuth) => {
      resolve(userAuth);
    }, reject);
  });
};

!firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export default firebase;
