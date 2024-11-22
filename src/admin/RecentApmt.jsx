import React from "react";
import { appointmentItems, Th } from "../utils/Elements";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import "./RecentApmt.css";

const RecentApmt = () => {
  return (
    <section className="bg-white border border-gray-100 rounded-lg drop-shadow-md p-6 flex-1 w-full md:overflow-x-hidden lg:w-3/4">
      <div className="flex justify-between pb-[8px] ">
        <h6>Recent Appointments</h6>
        <Link to="/admin/appointment">
          <p className="flex items-center gap-2 font-[500] text-indigo-500 hover:translate-x-1.5 duration-300">
            View More <FaArrowRight className="text-[1rem]" />
          </p>
        </Link>
      </div>

      {/* Add a wrapper specifically for the table */}
      <div className="table-wrapper">
        <table className="w-full">
          <thead className="border-b-2 border-gray-100">
            <tr>
              <Th width="50%">Student Name</Th>
              <Th width="50%">Date</Th>
              <Th>Status</Th>
            </tr>
          </thead>
          <tbody>
            {appointmentItems?.map((item, idx) => {
              const statusInfo = item.status === "Pending";
              return (
                <tr key={idx} className={` py-1`}>
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
                  <td
                    className={`py-6 text-[16px]  px-6 rounded-xl ${
                      statusInfo ? "text-[#de163a]" : " text-[#20bd8f]"
                    }  `}
                  >
                    <p className=" w-fit px-5 caption font-[500] bg-indigo-50 py-2 rounded-xl text-center">
                      {item.date}
                    </p>
                  </td>
                  <td
                      className={`py-6 text-[16px] rounded-xl font-[450]  `}
                    >
                      <p className={` caption  font-[500] px-3  rounded-xl text-center ${
                        statusInfo ? "text-[#de163a]" : " text-[#20bd8f]"
                      } `}>{item.status}</p>
                    </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default RecentApmt;
