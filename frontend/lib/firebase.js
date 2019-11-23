import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHjsNcN794ZVM32bW87fSF5n5rOGmzhYE",
  authDomain: "wewillnamethislater-546f3.firebaseapp.com",
  databaseURL: "https://wewillnamethislater-546f3.firebaseio.com",
  projectId: "wewillnamethislater-546f3",
  storageBucket: "wewillnamethislater-546f3.appspot.com",
  messagingSenderId: "800819188799",
  appId: "1:800819188799:web:69e2cc1ceb901873a7948a"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

export default firebase;
export { auth };
