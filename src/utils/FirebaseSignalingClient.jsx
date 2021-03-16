import firebase from  'firebase/app'
import 'firebase/database';

export default class FirebaseSignalingClient {
    constructor() {
        const firebaseConfig = {
            apiKey: "AIzaSyCA09-jg9AhZogIoRr5bz3R5tCSlBpbeDs",
            authDomain: "webrtc-react-firebase-2b752.firebaseapp.com",
            databaseURL: "https://webrtc-react-firebase-2b752-default-rtdb.firebaseio.com",
            projectId: "webrtc-react-firebase-2b752",
            storageBucket: "webrtc-react-firebase-2b752.appspot.com",
            messagingSenderId: "292362688150",
            appId: "1:292362688150:web:0f2360ef2590ee957b14b7"
        };
        if (firebase.apps.length === 0) firebase.initializeApp(firebaseConfig);
        this.database = firebase.database();
        this.localPeerName = ''; 
        this.remotePeerName = '';
    }
}