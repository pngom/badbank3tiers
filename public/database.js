// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArNFnABTQW2sz8Ea1VECNiiDfeXaUIUu4",
  authDomain: "capstone-cd3c2.firebaseapp.com",
  projectId: "capstone-cd3c2",
  storageBucket: "capstone-cd3c2.appspot.com",
  messagingSenderId: "136913812145",
  appId: "1:136913812145:web:94a3605d4c977a4a294090"
};

try {
    firebase.initializeApp(firebaseConfig);
    console.log('It works!');
  } catch (err) {
    if (!/already exists/.test(err.message)) {
      console.error('It does not work', err.stack);
    }
  }
  
  // const fire = firebase;