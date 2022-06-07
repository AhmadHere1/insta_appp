import * as firebase from 'firebase';
import '@firebase/firestore';






const firebaseConfig = {
    apiKey: "AIzaSyDAWcT5qFuPUGjPygtZMNBMTd3nityrHDg",
    authDomain: "instagarm-db2da.firebaseapp.com",
    projectId: "instagarm-db2da",
    storageBucket: "instagarm-db2da.appspot.com",
    messagingSenderId: "825314185162",
    appId: "1:825314185162:web:38b18f6c21e072731ec933",
    measurementId: "G-PMFW75ZNM3"
};

if (firebase.apps.length > 0 === false) {
    firebase.initializeApp(firebaseConfig);
}
export { firebase };