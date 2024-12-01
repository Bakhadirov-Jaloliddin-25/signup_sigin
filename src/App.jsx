import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Products from "./components/Products";
import { useState } from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Header from "./components/Header";

function App() {
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);

  // SignIn va SignUp modallarini ochish uchun toggleActions
  const toggleActions = (action) => {
    if (action === "signIn") {
      setSignIn(true);
      setSignUp(false);
    } else if (action === "signUp") {
      setSignUp(true);
      setSignIn(false);
    }
  };

  return (
    <>
      <Header />
      <div className="flex justify-center space-x-4 p-4">
        {/* Sign In va Sign Up tugmalari */}
        <button
          onClick={() => toggleActions("signIn")} // SignIn modalini ochish
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Sign In
        </button>
        <button
          onClick={() => toggleActions("signUp")} // SignUp modalini ochish
          className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600"
        >
          Sign Up
        </button>
      </div>

      {/* Sign In Modal */}
      {signIn && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="w-96 min-h-56 bg-white p-6 rounded-lg">
            <SignIn toggle={toggleActions} />
            <button
              onClick={() => setSignIn(false)} // Modalni yopish
              className="mt-4 w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Sign Up Modal */}
      {signUp && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="w-96 min-h-56 bg-white p-6 rounded-lg">
            <SignUp toggle={toggleActions} />
            <button
              onClick={() => setSignUp(false)} // Modalni yopish
              className="mt-4 w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Products />
      <ToastContainer />
    </>
  );
}

export default App;
