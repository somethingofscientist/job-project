import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { About } from "./pages/about/About";
import { Contact } from "./pages/contact/Contact.jsx";
import { Footer } from "./components/footer/Footer";


function App() {
  const currentUser = 1;
  return (
    <Router>
      <Topbar />

      <Switch>
        <Route exact path="/"> <Homepage /> </Route>
        <Route path="/posts"> <Homepage /> </Route>
        <Route path="/post/:id"> <Single /> </Route>
        <Route path="/contact"> <Contact /> </Route>
        <Route path="/about"> <About /> </Route>


        <Route path="/register">
          {currentUser ? <Homepage /> : <Register />}
        </Route>
        <Route path="/login">
          {currentUser ? <Homepage /> : <Login />}
        </Route>
        <Route path="/write">
          {currentUser ? <Write /> : <Login />}
        </Route>
        <Route path="/settings">
          {currentUser ? <Settings /> : <Login />}
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
