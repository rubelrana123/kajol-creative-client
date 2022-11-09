import React, { useCallback, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext/UserContext';

const PrivateRoute = ({children}) => {
  const location = useLocation();
  const {user, loading} = useContext(AuthContext);
  if(loading) {
   return <div className="w-16 h-16 my-[25%] mx-auto border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
  }

  if (!user?.uid) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

 

export default PrivateRoute;