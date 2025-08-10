import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import { use } from "react";
import Swal from "sweetalert2";
import { useLocation } from "react-router";
import { auth, googleProvider } from "@/firebase/firebase.init";
import { AuthContext } from "@/Context/AuthContext";

const useAuth = () => {
  const { user } = use(AuthContext);

  const location = useLocation();
  const signUp = async (email, password, first_name, photoURL, navigate) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: first_name,
        photoURL: photoURL,
      });
      Swal.fire({
        title: "Registation successfull!",
        icon: "success",
        draggable: true,
      });
      navigate("/login");
    } catch (err) {
      const errMessage = err.message;
      console.error(err);
      Swal.fire({
        title: errMessage,
        icon: "error",
        draggable: true,
      });
    }
  };

  const loginWithGoogle = async (navigate) => {
    try {
      await signInWithPopup(auth, googleProvider);
      Swal.fire({
        title: "Login  successfull!",
        icon: "success",
        draggable: true,
      });
      navigate(`${location.state ? location.state : "/"}`);
    } catch (err) {
      console.error(err);
    }
  };

  const login = async (email, password, navigate) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Swal.fire({
        title: "Login  successfull!",
        icon: "success",
        draggable: true,
      });
      navigate(`${location.state ? location.state : "/"}`);
    } catch (err) {
      const errMessage = err.message;

      Swal.fire({
        title: errMessage,
        icon: "error",
        draggable: true,
      });
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      return { success: true };
    } catch (err) {
      console.error(err);
      return { success: false };
    }
  };

  return {
    login,
    signUp,
    loginWithGoogle,
    logout,
    user,
  };
};

export default useAuth;
