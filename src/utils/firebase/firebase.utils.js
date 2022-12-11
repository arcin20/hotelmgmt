import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, Firestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAMVEzx4nLKDqUdBTWICZHac1gsYerZLYI",
    authDomain: "hotelmgmt-db.firebaseapp.com",
    projectId: "hotelmgmt-db",
    storageBucket: "hotelmgmt-db.appspot.com",
    messagingSenderId: "883581621194",
    appId: "1:883581621194:web:ae4231d79d0a73c77eb533"
  };
  
  

  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
      prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
  

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
      if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);
    



    const userSnapshot = await getDoc(userDocRef);
    

    if(!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName, 
                email, 
                createdAt
            })

        }   catch (error) {
            console.log('Fehler bei Erstellung des Users!', error.message)
        }
    }
        return userDocRef;
  }

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
      if (!email || !password) return;

      return await createUserWithEmailAndPassword(auth, email, password)
  }

  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
  
    return await signInWithEmailAndPassword(auth, email, password);
  };