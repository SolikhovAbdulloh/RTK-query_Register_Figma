import React from 'react'
import logo from "../../../../public/logo.png"
import { Button } from 'antd'
import { BiLineChart } from "react-icons/bi";
import { CiCreditCard1 } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import { TfiMenuAlt } from "react-icons/tfi";
import { PiMedalFill } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate()
  return (
    <div className="h-[100vh] px-5 py-5 bg-[#e8e5e5] w-[20%]">
      <img src={logo} alt="logo" />
      <div className='flex flex-col items-center justify-center gap-5 mt-[30px]'>
        <Button onClick={()=>navigate('overWiev')} className="text-[15px] w-[70%] h-[50px] text-[grey] flex items-center gap-2 font-medium">
          <CiCreditCard1 />
          Cards
        </Button>
        <Button className="text-[15px] w-[70%] h-[50px] text-[grey] flex items-center gap-2 font-medium">
          <HiOutlineMail />
          Invoices
        </Button>
        <Button className="text-[15px] w-[70%] h-[50px] text-[grey] flex items-center gap-2 font-medium">
          <BiLineChart />
          Overview
        </Button>
        <Button onClick={()=>navigate('Transication')} className="text-[15px] w-[70%] h-[50px] text-[grey] flex items-center gap-2 font-medium">
          <TfiMenuAlt />
          Transacation
        </Button>
        <Button className="text-[15px] w-[70%] h-[50px] text-[grey] flex items-center gap-2 font-medium">
          <PiMedalFill />
          Goals
        </Button>
        <Button className="text-[15px] w-[70%] h-[50px] text-[grey] flex items-center gap-2 font-medium">
          <IoSettingsOutline />
          Settings
        </Button>
      </div>
    </div>
  );
}

export default Sidebar