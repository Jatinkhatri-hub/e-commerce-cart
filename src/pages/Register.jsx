import { Outlet } from "react-router";
import Navbar from "../components/Navbar";


function Register() {


  return (
    <div className="h-[calc(100vh-60px)]">
      <Navbar />
      {/* <h1>Register</h1> */}
      <Outlet />
    </div>
  );
}

export default Register;
