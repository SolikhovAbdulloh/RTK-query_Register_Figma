import { Button, Input } from "antd";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io5";

function Register() {
  const EmailRef = useRef();
  const PassRef = useRef();

  const navigate = useNavigate();

    const GoogleFuc =()=>{
        window.open("https://www.google.ru/?hl=ru");
        
    }
    const AppleFuc = () =>{
        window.open("https://www.apple.com/");
    }


  const submit = (e) => {
    e.preventDefault();
    const data_User = {
      email: EmailRef.current.input.value,
      password: PassRef.current.input.value,
    };
    console.log(data_User);

    navigate('/dashboard')
  };
  return (
    <section className="h-[100vh] flex justify-center items-center ">
      <div className="flex flex-col gap-5">
        <p className="font-medium text-[32px]">Welcome</p>
        <p className="text-[18px] font-medium">
          Enter your Credentials to access your account
        </p>
        <form onSubmit={submit} className="flex flex-col gap-6">
          <Input required placeholder="Email" ref={EmailRef} />
          <Input.Password required placeholder="Password" ref={PassRef} />
          <button className="bg-[#00c8ff] h-5 text-white rounded-xl w-[100%] p-5 justify-center items-center flex">
            Login
          </button>
        </form>
        <div className="flex items-center gap-3 justify-between">
          <Button onClick={GoogleFuc} className="flex items-center justify-between">
            <FcGoogle />
            Sign in with Google
          </Button>
          <Button onClick={AppleFuc} className="flex items-center justify-between">
            <IoLogoApple />
            Sign in with Apple
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Register;
