import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import {SignInStart,SignInSuccess,SignInFailure} from "../redux/user/userSlice.js"
import OAuth from "../components/OAuth.jsx";

export default function SignIn() {

  const [formData, setFormData]=useState({})
  const {isLoading,error:errorMessage}=useSelector((state)=> state.user)
  const  navigate=useNavigate();
  const  dispatch=useDispatch();
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.id]:e.target.value.trim()})
  }

  const handleSubmit=async (e) =>{
    e.preventDefault();
    if( !formData.email || !formData.password){
      return dispatch(SignInFailure("All fields are required"))
    }
    try {
      dispatch(SignInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if(data.success === false){
       dispatch(SignInFailure(data.message));
        
      }

      if (res.ok) {
        dispatch(SignInSuccess(data));
        navigate('/');
      }
    } catch (error) {
      dispatch(SignInFailure(error.message));
    }
  }
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-6xl ">
            <span className="px-2 py-1 bg-cyan-800 rounded-lg">Pets</span>
            Blog
          </Link>
          <p className="text-sm mt-5 ">You can sign in with your email and password</p>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            
            <div className="">
              <Label value="Your email" />
              <TextInput type="email" placeholder="Email" id="email"  onChange={handleChange}/>
            </div>
            <div className="">
              <Label value="Your password" />
              <TextInput type="password" placeholder="*********" id="password" onChange={handleChange} />
            </div>
            <Button type="submit" disabled={isLoading}>
            {isLoading ? (<>
                <Spinner size='sm' />
                <span className='pl-3'> Loading...</span>
              </>
              ):(
                'Sign In'
                )
            }
            </Button>
            <OAuth/>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Don’t Have an account?</span>
            <Link to="/sign-up">Sign Up</Link>
          </div>
          {
            errorMessage && (
              <Alert className="mt-5" color='failure'>
                {errorMessage}
              </Alert>
            )
          }
        </div>
      </div>
    </div>
  );
}
