import { FirebaseApp, initializeApp } from "firebase/app";
import firebaseConfig from "./config";
import { Firestore, getFirestore } from "firebase/firestore";

// Initialize Firebase
//const firebase = initializeApp(firebaseConfig);
class Firebase {
    app: FirebaseApp;
    db: Firestore;
    constructor() {
        this.app = initializeApp(firebaseConfig);
        this.db = getFirestore(this.app);
    }
}
const firebase = new Firebase();
export default firebase;
