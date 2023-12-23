import './App.css';
import Employeeregistration from './components/Employee/Employeeregistration'
import SideBar from './components/SideBar';
import React from 'react';
function App() {
  return (
    <main className="h-screen my-8 flex">
      <SideBar/>
    <Employeeregistration/>
    </main>
  );
}

export default App;
