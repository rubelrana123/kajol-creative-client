import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Banner from "../Pages/Homes/Banner/Banner.js";
import Home from "../Pages/Homes/Home/Home";
import Login from "../Pages/Shared/Login/Login";
import SignUp from "../Pages/Shared/Signup/Signup";
 
 
 
 

export const router = createBrowserRouter([
  {
    path: "/",
    element :<Main></Main>, children :[
      {path : "/", element : <Home></Home>},
      {path : "/login", element : <Login></Login>},
      {path : "/signup", element : <SignUp></SignUp>},
      
    ]
  },
]);