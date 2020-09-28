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
      icon: "/user1.png",
      lists: [],
    };
    const user2 = {
      name: "User2",
      icon: "/user2.png",
      lists: [],
    };
    const user3 = {
      name: "User3",
      icon: "/user3.png",
      lists: [],
    };
    const user4 = {
      name: "User4",
      icon: "/user4.png",
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

export const getProfiles = async (userId) => {
  try {
    const userRef = await firestore.collection(`users`).doc(`${userId}`);
    const userDoc = await userRef.get();
    const list1 = await userDoc.get(`user1`);
    const user1 = {
      name: list1.name,
      icon: list1.icon,
    };
    const list2 = await userDoc.get(`user2`);
    const user2 = {
      name: list2.name,
      icon: list2.icon,
    };
    const list3 = await userDoc.get(`user3`);
    const user3 = {
      name: list3.name,
      icon: list3.icon,
    };
    const list4 = await userDoc.get(`user4`);
    const user4 = {
      name: list4.name,
      icon: list4.icon,
    };
    const profiles = [user1, user2, user3, user4];
    return profiles;
  } catch {
    return "error";
  }
};

export const editProfile = async (userId, profile, name, icon) => {
  try {
    const userRef = await firestore.collection(`users`).doc(`${userId}`);
    if (profile == 1) {
      await userRef.update({
        "user1.name": name,
        "user1.icon": icon,
      });
    } else if (profile == 2) {
      await userRef.update({
        "user2.name": name,
        "user2.icon": icon,
      });
    } else if (profile == 3) {
      await userRef.update({
        "user3.name": name,
        "user3.icon": icon,
      });
    } else if (profile == 4) {
      await userRef.update({
        "user4.name": name,
        "user4.icon": icon,
      });
    }
    const newData = await getProfiles(userId);
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
