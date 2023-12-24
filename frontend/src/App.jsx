import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, useLocation, HashRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Modal from './UI/Modal'
// import BackImg from "./store/backimg.jpg";
// import BackImg2 from "./store/backimg2.jpg";
// import classes from "./App.module.css";
// import SideBar from "./components/SideBar";
// import Navbar from "./components/Navbar";
import Errorpage from "./pages/Errorpage";
import HomePage from "./pages/HomePage";
import EmployeeList from "./pages/EmployeeList";
import Employeeregistration from "./components/Employee/Employeeregistration";
import PatientRegistration from "./components/Patient Registration/Patient Registration";
import PatientList from "./pages/PatientList";
import Payment from "./components/Payment/payment";
import HospitalRoom from "./components/HospitalRoom/HospitalRoom";
import HospitalRoomstatus from "./pages/HospitalRoomstatus";
import TeamPage from "./pages/teamPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ForgotPassPage from "./pages/ForgotPass/ForgotPassPage";
import ForgotPassIDPage from "./pages/ForgotPass/ForgotPassIDPage";
import ForgotPassConfirmPage from "./pages/ForgotPass/ForgotPassConfirmPage";
import MainComponent from "./components/MainComponent";

export const ToLink = 'http://localhost:8000';

export function RoutesWithAnimation() {
    const location = useLocation();
    console.log(location);
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.key}>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/login/forgotpassword" element={<ForgotPassPage />} />
                <Route path="/login/forgotpassword/:id" element={<ForgotPassIDPage />} />
                <Route path="/login/forgotpassword/:id/confirm" element={<ForgotPassConfirmPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/employeeRegistration" element={<Employeeregistration />} />
                <Route path="/employeeList" element={<EmployeeList />} />
                <Route path="/patientRegistration" element={<PatientRegistration />} />
                <Route path="/patientList" element={<PatientList />} />
                <Route path="/hospitalRoom/:id" element={<HospitalRoom />} />
                <Route path="/payment" element={<Payment />}></Route>
                <Route path="/hospitalRoomStatus" element={<HospitalRoomstatus />}></Route>
                <Route path="/team" element={<TeamPage />} />
                <Route path="*" element={<Errorpage />} />
            </Routes>
        </AnimatePresence>
    );
}

function App() {


    return (
        <HashRouter>
            <MainComponent />
        </HashRouter >
    );
};
export default App;