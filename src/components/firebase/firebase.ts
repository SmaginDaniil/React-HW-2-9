import { initializeApp, FirebaseApp} from "firebase/app";
import { getAuth,Auth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAk6c527zmB0guQMQN6elG2awVq1J5gaTE",
  authDomain: "delivery-food-smagindaniil-js1.firebaseapp.com",
  projectId: "delivery-food-smagindaniil-js1",
  storageBucket: "delivery-food-smagindaniil-js1.firebasestorage.app",
  messagingSenderId: "192111702902",
  appId: "1:192111702902:web:6469bf2cfd4165129c0057",
  measurementId: "G-18HZ6H9F0Z",
};

const app: FirebaseApp = initializeApp(firebaseConfig);

export const auth: Auth = getAuth(app);