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
    const accounts = [
      {
        name: "User1",
        icon:
          "https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375__340.png",
        lists: [],
      },
      {
        name: "User2",
        icon:
          "https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807__340.png",
        lists: [],
      },
      {
        name: "User3",
        icon:
          "https://cdn.pixabay.com/photo/2016/11/01/21/11/avatar-1789663__340.png",
        lists: [],
      },
      {
        name: "User4",
        icon:
          "https://cdn.pixabay.com/photo/2016/11/01/21/11/avatar-1789663__340.png",
        lists: [],
      },
    ];

    try {
      await userRef.set({
        email,
        accounts,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user!", error.message);
    }
  }
  return userRef;
};

// export const addPurchaseHistory = async (
//   currentUserPurchaseHistory,
//   userId
// ) => {
//   if (userId) {
//     console.log(currentUserPurchaseHistory);
//     const userRef = firestore.doc(`users/${userId}`);
//     try {
//       userRef.set(
//         {
//           purchaseHistory: currentUserPurchaseHistory,
//         },
//         { merge: true }
//       );
//     } catch (error) {
//       console.log("error", error.message);
//     }
//   } else {
//     return;
//   }
// };

// export const addCollectionAndDocument = async (collectionKey, objectsToAdd) => {
//   const collectionRef = firestore.collection(collectionKey);
//   const batch = firestore.batch();
//   objectsToAdd.forEach((obj) => {
//     const newDocRef = collectionRef.doc();
//     batch.set(newDocRef, obj);
//   });

//   return await batch.commit();
// };

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
