import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCPQYZh3Q737jTQ5jBSvq7VIppblemYoVc",
  authDomain: "app-681aa.firebaseapp.com",
  databaseURL: "https://app-681aa-default-rtdb.firebaseio.com",
  projectId: "app-681aa",
  storageBucket: "app-681aa.firebasestorage.app",
  messagingSenderId: "594045758092",
  appId: "1:594045758092:web:9e554464d827c64b6369a9"
};

export const app = initializeApp(firebaseConfig);