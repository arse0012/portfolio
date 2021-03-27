import "../App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Footer from "./Home"
import About from "./About";
import about from "../about";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/about" component={About}>
            <Header />
            <About
              about={about[0].about}
              firstParagraph={about[0].firstParagraph}
              lastParagraph={about[0].lastParagraph}
              contactME={about[0].contactME}
              email={about[0].email}
              telefone={about[0].telefone}
            />
          </Route>
 
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
