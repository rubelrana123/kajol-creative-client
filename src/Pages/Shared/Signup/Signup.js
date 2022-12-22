import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
 import svg2 from '../../../asserts/Sign up-rafiki.png'
import { AuthContext } from '../../../Contexts/UserContext/UserContext';
import UseTitle from '../../../Title/UseTitle';
const SignUp = () => {
  UseTitle("Signup")
    const [error,setError] = useState('');
  const {createUser, profileUpdate, googleSignin, loading, setLoading} = useContext(AuthContext);
	const location = useLocation();
	const navigate = useNavigate();
	const from = location?.state?.from.pathname || "/"
 
const handleForm = (e) => {
 e.preventDefault();
 const form = e.target;
 const name = form.name.value;
 const email = form.email.value;
 const password = form.password.value;
 const photoURL = form.photoURL.value;
 console.log(email, password, name);
 
 createUser(email, password).then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
  

    const currentUser = {email : user.email}
    console.log(currentUser);
    fetch(`https://kajolcreative.vercel.app/jwt`,{
    headers: {
      
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(currentUser)
}).then(res => res.json()).then(data => {
    localStorage.setItem("token-jwt", data.token)
    console.log(data);
});



    console.log(user);
    toast.success('Register SuccessFully',{autoClose : 200});
     		navigate(from, {replace : true})

    setError('');
    handleProfileUpdate(name, photoURL)
    form.reset();
    

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorMessage)

    // ..
  }).finally(() => setLoading(false))

}

const handleProfileUpdate = (name , photoURL) => {
  const profile = {
    displayName: name, 
    photoURL:  photoURL,
  }
  profileUpdate(profile);
  // toast.success("Profile Update", {autoClose : 300})
}

	const handleGoogleSignIn = () =>{
		googleSignin()
			.then((result) => {
	
				const user = result.user;
		navigate(from, {replace : true})

				console.log(user);

				// ...
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				
				 console.log(errorMessage);
				// ...
			});
	}


  return (
    <div>
            {
        loading &&  <div className="w-16 h-16 my-[25%] mx-auto border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
      }
      <div className="hero pt-24 min-h-screen 
       bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse mx-20">
    <div  className="mt-0 text-center hidden lg:block">
       <img src={svg2} className= "w-[90%]" alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <form onSubmit={handleForm}>
                  <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name='name' className="input input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoURL</span>
          </label>
          <input type="text" name='photoURL' placeholder="PhotoURL" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" />
        </div>
         
          <div className="flex justify-between">
             
            <div to="#" className=" link link-hover"><small>Alreday you have Account?</small> <Link to="/login">Login</Link> </div>
                    
        </div>
        <div>
          <p className='text-red-600'>{error}</p>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary text-white">Register</button>
        </div>
        </form>
        {/*  */}
        <div className="flex items-center pt-4 space-x-1">
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
		<p className="px-3 text-sm dark:text-gray-400">SignUp with social accounts</p>
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
	</div>
	<div  onClick={handleGoogleSignIn}  className="flex justify-center bg-gray-500 rounded-md space-x-4">
		<button aria-label="Log in with Google" className="p-3 rounded-sm">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 text-white h-5 fill-current">
				<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
			</svg>
      </button>
      </div>
             
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default SignUp;