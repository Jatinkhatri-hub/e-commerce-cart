import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import PageNotFound from "./pages/PageNotFound";
import SignUp from "./components/auth/SignUp";
import Login from "./components/auth/Login";
import { createContext, useState } from "react";
// import Navbar from "./components/Navbar";


// 1 CREATE A CONTEXT
export const AuthContext = createContext();

function App() {
  const [user, setUser] = useState(
    {
      name: "Jatin Khatri",
      email: "jatinkhtri245@gmail.com",
      password: "12345678",
    },
  );

  return (
    <>
      <AuthContext.Provider value={{user, setUser}}>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="products" element={<Products />} />
          <Route path="cart" element={<Cart />} />
          <Route path="register" element={<Register />}>
            <Route index element={<Navigate replace to={"login"} />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      </AuthContext.Provider>
    </>
  );
}

export default App;
