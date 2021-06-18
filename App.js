import React, { useEffect,useState } from "react";
import HomeScreen from "./screens/HomeScreen.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen.js";
import "./App.css";
import { auth } from "./firebase.js";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./screens/ProfileScreen.js"
import Intro from "./screens/Intro.js"
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [loading, setLoading ] = useState(true);

 
    

  useEffect(() => {
    setTimeout(async () => {
      await setLoading(false);
    }, 5500);
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
      {loading ? (
        <Intro />
      ) : (
        <>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route path = "/profile">
              <ProfileScreen/>
            </Route>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
