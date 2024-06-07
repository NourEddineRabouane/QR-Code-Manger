import { Route, Switch } from "react-router-dom";
import Nav from "./pages/Nav";
import "./App.css";
import Home from "./pages/Home";
import Generate from "./pages/Generate";
import Read from "./pages/Read";
import { useEffect, useState } from "react";
function App() {
    const [isSm, setSm] = useState(false);
    window.addEventListener("resize", () => {
        if (window.innerWidth >= 480) setSm(true);
        else setSm(false);
    });
    useEffect(() => {
        if (window.innerWidth >= 480) setSm(true);
        else setSm(false);
    }, []);
    return (
        <>
            <div className=" font-[roboto , sans serif] bg-[#f8f9fa] ">
                <div className="sm:px-[10%]">
                    <Nav isSm={isSm} />
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
            </div>
        </>
    );
}

export default App;
