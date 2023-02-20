import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./firebase";

function App() {
  const user = null;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //logged in
        console.log(userAuth);
      } else {
        //logged out
      }
    });
    return unsubscribe
  });

  return (
    <div className="app">
      <Router>
        
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            
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
