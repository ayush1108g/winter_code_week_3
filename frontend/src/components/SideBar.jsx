import Button from "../UI/Button";
import { useNavigate } from "react-router";
export default function SideBar() {
  const navigate = useNavigate();
  return (
    <aside className="px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl" style={{ height: '100dvh', overflowY: 'auto' }}>
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
      <div>
        <ul>
          <li><Button onClick={() => { navigate('/') }}> Welcome</Button></li>
          <li><Button onClick={() => { navigate('/patientRegistration') }}>Patient Registration</Button></li>
          <li><Button> ADD PROJECT</Button></li>
          <li><Button onClick={() => { navigate('/employeeRegistration') }}> Employee Registration</Button></li>
          <li><Button onClick={() => { navigate('/employeeList') }}> Employee List </Button></li>
          <li><Button> ADD PROJECT</Button></li>
          <li><Button> ADD PROJECT</Button></li>
          <li><Button> ADD PROJECT</Button></li>
        </ul>
      </div>
    </aside>
  );
}
