import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../Pages/Home";
import InitialNav from "../components/InitialNav";

function InitialRouter() {
  return (
    <>
        <Router>
            <InitialNav />
            <Routes>
                <Route path="/" element={<Home />}></Route>
            </Routes>
        </Router>
    </>
  )
}

export default InitialRouter