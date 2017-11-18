import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBQB2ogCty8ciojAg41uAlcmISMSUyfVNM',
  authDomain: 'voter-debd4.firebaseapp.com',
  databaseURL: 'https://voter-debd4.firebaseio.com',
  projectId: 'voter-debd4',
  storageBucket: 'voter-debd4.appspot.com',
  messagingSenderId: '716191927256',
};

try {
  firebase.initializeApp(config);
} catch (e) {

}

ReactDOM.render(<App />, document.getElementById('root'));
