import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import ProfileScreen from "./screens/ProfileScreen";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        //logged out
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;

/*THIS IS A CODE USING REDUX ROUTER v5 */
// import React from "react";
// import "./App.css";
// import HomeScreen from "./screens/HomeScreen";
// import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";

// function App() {
//   return (
//     <div className="app">
//       <Router>
//         <Routes>
//           <Route path="/" />
//           <HomeScreen />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;
