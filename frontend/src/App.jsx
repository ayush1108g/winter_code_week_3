import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, useLocation, HashRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// import BackImg from "./store/backimg.jpg";
// import BackImg2 from "./store/backimg2.jpg";
import Errorpage from "./pages/Errorpage";
import SideBar from "./components/SideBar";
import HomePage from "./pages/HomePage";
import EmployeeList from "./pages/EmployeeList";
import Employeeregistration from "./components/Employee/Employeeregistration";


function RoutesWithAnimation() {
    const location = useLocation();
    console.log(location);
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.key}>
                <Route path="/" element={<HomePage />} />
                <Route path="/employeeRegistration" element={<Employeeregistration />} />
                <Route path="/employeeList" element={<EmployeeList />} />
                <Route path="*" element={<Errorpage />} />
            </Routes>
        </AnimatePresence>
    );
}

function App() {
    return (
        <HashRouter>
            <div style={{ position: "fixed", width: '18rem', backgroundColor: 'black' }}>
                <SideBar />
            </div>
            <div className="" style={{ marginLeft: '18rem', height: '100dvh' }}>
                <RoutesWithAnimation />
            </div>
        </HashRouter>
    );
};
export default App;