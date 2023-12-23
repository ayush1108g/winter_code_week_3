import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, useLocation, HashRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
// import PatientRegistration from "./components/Patient Registration/Patient Registration";
// import BackImg from "./store/backimg.jpg";
// import BackImg2 from "./store/backimg2.jpg";
import classes from "./App.module.css";
import Errorpage from "./pages/Errorpage";
import SideBar from "./components/SideBar";
function App() {

    const screenWidth = window.screen.width;
    return (
        <div className="App">
        <h1>React App</h1>
        <SideBar />
        </div>
    );
};
export default App;