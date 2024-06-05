import { Route, Switch } from "react-router-dom";
import Nav from "./pages/Nav";
import "./App.css";
import Home from "./pages/Home";
import Generate from "./pages/Generate";
import Read from "./pages/Read";
function App() {
    return (
        <>
            <div className="">
                <Nav />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/pages/Generate">
                        <Generate />
                    </Route>
                    <Route exact path="/pages/Read">
                        <Read />
                    </Route>
                </Switch>
            </div>
        </>
    );
}

export default App;
