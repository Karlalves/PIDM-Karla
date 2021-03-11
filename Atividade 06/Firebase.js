import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyDt-D5-KyHLyRdCz8JejQk-g_hleq6Ov70",
  authDomain: "projetoauthaula.firebaseapp.com",
  databaseURL: "https://projetoauthaula.firebaseio.com",
  projectId: "projetoauthaula",
  storageBucket: "projetoauthaula.appspot.com",
  messagingSenderId: "144195631066",
  appId: "1:144195631066:web:d4220211521c179c1bf2e3",
  measurementId: "G-TJ58XZCD49"

};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
