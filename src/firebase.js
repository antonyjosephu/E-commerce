
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth/cordova";
import { addDoc, collection, getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDGAWoY-BLwgelD5dfu5JzTGdrH5slER6o",
  authDomain: "ecommerce-shopper-b6345.firebaseapp.com",
  databaseURL: "https://ecommerce-shopper-b6345-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ecommerce-shopper-b6345",
  storageBucket: "ecommerce-shopper-b6345.appspot.com",
  messagingSenderId: "653984465033",
  appId: "1:653984465033:web:358a518dfcf1e66189c658",
  measurementId: "G-668K77PGKF"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const signup = async (name,email,password)=> {
    try {
        const res = await createUserWithEmailAndPassword(auth,email,password);
        const user= res.user;
        await addDoc (collection(db, "user"),{
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        })
        
    } catch (error) {
        console.log(error);
        alert(error);
    }
}
const login = async(email,password)=>{
    try {
       await signInWithEmailAndPassword(auth,email,password);
    } catch (error) {
        console.log(error);
        alert(error);
    }

}
const logout = ()=>{
    signOut(auth);
}
export {auth,db,login,signup,logout}