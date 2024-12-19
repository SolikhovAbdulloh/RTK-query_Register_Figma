import React from "react";
import { useGetUsersQuery } from "../../../redux/api/users";
import { BiSolidMessageDetail } from "react-icons/bi";
import { AiOutlineBulb } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import card1 from "../../../../public/card.png";
import Switch from "@mui/material/Switch";
function OverWiev() {
  const { data } = useGetUsersQuery();
  const cardData = data?.[0]?.Card[0];

  return (
    <section className="p-[30px] ">
      <div className="flex justify-between header">
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

      <div className="mt-[2vh] flex flex-col gap-[30px]">
        {cardData ? (
          <div className="card1 flex items-start justify-between shadow-[0_4px_8px_rgba(0,0,0,0.1),0_6px_20px_rgba(0,0,0,0.1)] w-[646px] h-[346px] rounded-xl px-3 py-2">
            <div>
              <p className="font-semibold text-[20px]">Cards</p>
              <img src={card1} alt="card" />
            </div>
            <div className=" flex flex-col gap-4 mt-[30px]">
              <div className="flex flex-col items-end">
                <p className="text-[30px] font-bold  text-[#197bbd] ">
                  {cardData.Current_balance}
                </p>
                <p className="text-[12px] font-semibold text-[grey]">
                  Current balance
                </p>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-[25px] font-bold  text-[#197b] ">
                  {cardData.Income}
                </p>
                <p className="text-[15px] font-semibold text-[grey]">Income</p>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-[25px] font-bold  text-[#d70909bb] ">
                  {cardData.Outcome}
                </p>
                <p className="text-[10px] font-semibold text-[grey]">Outcome</p>
              </div>
              <div className="flex justify-between items-center">
                <Switch defaultChecked />
              </div>
            </div>
          </div>
        ) : (
          <p className="text-red-500 text-[45px]">Loading....</p>
        )}
      </div>
    </section>
  );
}

export default OverWiev;
