import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Banner from "../Pages/Homes/Banner/Banner.js";
import Home from "../Pages/Homes/Home/Home";
import EditReview from "../Pages/Homes/MyReview/EditReview";
import MyReview from "../Pages/Homes/MyReview/MyReview";
import AddService from "../Pages/Service/AddService";
import AllService from "../Pages/Service/AllService";
import ServiceDetails from "../Pages/Service/ServiceDetails";
import Login from "../Pages/Shared/Login/Login";
import SignUp from "../Pages/Shared/Signup/Signup";
import PrivateRoute from "./PrivateRoute";
 
 
 
 

export const router = createBrowserRouter([
  {
    path: "/",
    element :<Main></Main>, children :[
      {path : "/", element : <Home></Home>},
      {path : "/login", element : <Login></Login>},
      {path : "/signup", element : <SignUp></SignUp>},
      {path : "/blog", element : <Blog></Blog>},
      {path : "/myReviews/:id", element : <EditReview></EditReview>},
      {path : "/addService", element : <PrivateRoute><AddService></AddService></PrivateRoute>},
      {path : "/myReview", element : <PrivateRoute><MyReview></MyReview></PrivateRoute>},
      {path : "/service/:id", element : <ServiceDetails></ServiceDetails>, loader : ({params}) => fetch(`http://localhost:5000/services/${params.id}`)},
      {path : "/services", element : <AllService></AllService>, loader : () => fetch(`http://localhost:5000/services`)},
      
    ]
  },
]);