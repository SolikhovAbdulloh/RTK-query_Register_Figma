import React from "react";
import { useGetUsersQuery } from "../../../redux/api/users";
import { BiSolidMessageDetail } from "react-icons/bi";
import { AiOutlineBulb } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { CiShoppingCart } from "react-icons/ci";
import { FaCarSide } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

const Transication = () => {
  const { data } = useGetUsersQuery();
  const icons = [<CiShoppingCart />, <FaCarSide />, <FaUser />, <FaUser />];
  const GetData = data?.[0]?.Reciever;
  return (
    <div className="p-[30px]">
      <div className="flex mb-4 justify-between header">
        <div>
          <p className="font-bold text-[43px]">Weekly sumup</p>
          <p className="font-normal text-[16px] text-[grey]">
            Get summary of your weekly online transactions here.
          </p>
        </div>
        <div className="flex items-center cursor-pointer gap-4 ">
          <BiSolidMessageDetail className="w-[30px] text-gray-300 h-[30px]" />
          <AiOutlineBulb className="w-[30px] text-gray-300 h-[30px]" />
          <RxAvatar className="w-[30px] text-gray-300 h-[30px]" />
        </div>
      </div>
      <div className="card2 flex items-start justify-between shadow-[0_4px_8px_rgba(0,0,0,0.1),0_6px_20px_rgba(0,0,0,0.1)] w-[646px] h-[346px] rounded-xl px-3 py-2">
        <div className="w-[100%]">
          <p className="font-semibold text-[20px]">Transaction history</p>
          <div className="flex flex-col gap-7">
            <div className="flex text-[grey] items-center pt-3 justify-between ">
              <p>Reciever</p>
              <p>Type</p>
              <p>Date</p>
              <p>Amount</p>
            </div>
            {GetData ? (
              GetData.map((value, ind) => (
                <div className="flex text-[black] items-center pt-3 justify-between ">
                  <p className="flex items-center gap-2">
                    {icons[ind]}
                    {value.Market}
                  </p>
                  <p className="flex items-center gap-2">{value.type}</p>
                  <p>14 Dec 2020</p>
                  <p>${value.Amount}</p>
                </div>
              ))
            ) : (
              <p className="text-green-600 text-[45px]">Loading....</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transication;
