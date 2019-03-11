import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';
// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';

//data from firebase https://console.firebase.google.com/u/0/ 
var config = {
    apiKey: "AIzaSyAqFPy50CQeza25Fv5pwRdvXGNRQ0MaHKA",
    authDomain: "test-e37bd.firebaseapp.com",
    databaseURL: "https://test-e37bd.firebaseio.com",
    projectId: "test-e37bd",
    storageBucket: "test-e37bd.appspot.com",
    messagingSenderId: "206705199287"
}
firebase.initializeApp(config);
// firebase.firestore();


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
