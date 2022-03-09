import { connectAuthEmulator, getAuth } from "firebase/auth";
const auth = getAuth();
connectAuthEmulator(auth, "http://localhost:9099");