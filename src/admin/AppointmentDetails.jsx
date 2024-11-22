import React from "react";
import QuickStats from "./QuickStats";
import { IoNewspaper } from "react-icons/io5";
import { MdCancelScheduleSend, MdEdit, MdOutlineSchedule } from "react-icons/md";
import { AiOutlineSchedule } from "react-icons/ai";
import { appointmentItems } from "../utils/Elements";
import MonthSchedule from "../reusables/MonthSchedule";
import CustomButton from "../reusables/CustomButton";
import { RxCross1 } from "react-icons/rx";
import { RiCalendarScheduleLine } from "react-icons/ri";
import "./AppointmentDetails.css";
import { FaRegEdit } from "react-icons/fa";
import { FiEdit3 } from "react-icons/fi";

const AppointmentDetails = () => {
  const appointmentStats = [
    {
      id: 1,
      title: "Appointments",
      number: "25",
      rates: "-2.01%",
      color: "bg-[#ffffff]",
      icon: <IoNewspaper className=" text-indigo-400" />,
    },
    {
      id: 2,
      title: "Confirmed Appointments",
      number: "10",
      rates: "+3%",
      icon: <AiOutlineSchedule className=" text-green-700" />,
    },
    {
      id: 3,
      title: "Pending Appointments",
      number: "50",
      rates: "+2.08%",
      icon: <MdOutlineSchedule className=" text-yellow-500" />,
    },
    {
      id: 4,
      title: "Cancelled Appointments",
      number: "20",
      rates: "+1.08%",
      icon: <MdCancelScheduleSend className=" text-red-400" />,
    },
  ];

  const confirmedApmt = appointmentItems.filter(
    (item) => item.status === "Confirmed"
  );
  return (
    <div>
      <QuickStats data={appointmentStats} />
      <div className=" flex flex-col md:flex-row gap-8 mt-[2.5rem] md:mt-[4rem]">
        <div className=" bg-white drop-shadow py-8 px-6 lg:px-8 rounded-md md:w-[60%] ">
          <h6 className=" pb-4  ">All Appointments</h6>
          <div className="table-wrapper">
            <table className="w-full ">
              <thead className=" border-b-2 border-gray-100 ">
                <tr>
                  <Th>Student Name</Th>
                  <Th>Date</Th>
                  <Th>Time</Th>
                  <Th>Status</Th>
                  <th className=" py-3 px-6 text-center font-jamjure font-[500] text-[18px] ">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {appointmentItems?.map((item, idx) => {
                  const statusInfo = item.status === "Pending";
                  return (
                    <tr key={idx} className={`font-[400] py-1 `}>
                      <td className="px-1.5">
                        <div className="flex gap-3 items-center">
                          <p className="rounded-full bg-gray-600 text-white w-[2rem] h-fit py-2 px-5 flex justify-center">
                            {item.name.charAt(0).toUpperCase()}
                          </p>

                          <section className="space-y-1">
                            <p className="font-[600] ">{item.name}</p>
                            <p className=" font-[500] caption">{item.email}</p>
                          </section>
                        </div>
                      </td>
                      <td className={`py-6 text-[16px]  px-6 rounded-xl`}>
                        <p className=" caption font-[500] px-3 bg-indigo-50 py-2 rounded-xl text-center">
                          {item.date}
                        </p>
                      </td>
                      <Td>{item.time}</Td>

                      <td
                        className={`py-6 text-[16px] rounded-xl font-[450]  `}
                      >
                        <p
                          className={`${
                            statusInfo ? "text-[#de163a]" : " text-[#20bd8f]"
                          }  caption font-[500] px-3 rounded-xl text-center `}
                        >
                          {item.status}
                        </p>
                      </td>
                      <td className=" px-6 py-6">
                        <span className=" flex gap-3.5 justify-center items-center">
                          <CustomButton icon={<FiEdit3/>} color="bg-emerald-400 rounded-none" >Edit</CustomButton>
                          <CustomButton icon={<RxCross1/>} color="bg-gray-400 rounded-none">Delete</CustomButton>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <MonthSchedule data={confirmedApmt} title="Appointments" />
      </div>
    </div>
  );
};

export default AppointmentDetails;

const Th = ({ children, width }) => {
  return (
    <th
      className={` py-5 px-6 text-[18px] text-left font-jamjure font-[500] `}
      style={{ width }}
    >
      {children}
    </th>
  );
};

const Td = ({ children }) => {
  return (
    <td className=" py-6 px-6 font-[400] font-noto_sans text-[14px]">
      {children}
    </td>
  );
};
