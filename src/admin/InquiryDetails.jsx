import React, { useContext } from "react";
import { inquiryItems, Td, Th } from "../utils/Elements";
import CustomButton from "../reusables/CustomButton";
import { MdDelete } from "react-icons/md";
import { AdminContext } from "../layout/AdminLayout";
import CustomModal from "../reusables/CustomModal";
import { useDispatch, useSelector } from "react-redux";
import { inquiryDesc } from "../app/slices/InquirySlice";
import { CiViewList } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

const InquiryDetails = () => {
  const { openModal, closeModal, modalIsOpen } = useContext(AdminContext);
  const dispatch = useDispatch();

  const handleMessage = (item) => {
    dispatch(inquiryDesc(item));
    openModal();
  };
  const { message } = useSelector((state) => state.inquiryslice);
  console.log("message:", message);

  return (
    <div className=" min-w-[900px]">
      <table className=" w-full lg:overflow-x-hidden overflow-x-scroll">
        <thead className=" border-b-2 border-gray-100">
          <tr>
            <Th>Name</Th>
            <Th>Subject</Th>
            <Th width="18%">Message</Th>
            <Th>Date</Th>
            <Th>Action</Th>
          </tr>
        </thead>
        <tbody>
          {inquiryItems?.map((item, idx) => {
            return (
              <tr key={idx} className={` `}>
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
                  <p className=" caption w-fit font-[500] px-4 bg-indigo-50 py-2 rounded-md text-center">
                    {item.subject}
                  </p>
                </td>
                <Td>
                  <CustomButton color="bg-emerald-400 rounded-none"
                    onClick={() => handleMessage(item.content)}
                    icon={<CiViewList />}
                  >
                    View Message
                  </CustomButton>
                </Td>

                <td className={`py-6 text-[16px]  px-6 rounded-xl`}>
                  <p className=" caption w-fit font-[500] px-4 bg-indigo-50 py-2 rounded-md text-center">
                    {item.date}
                  </p>
                </td>
                <td className=" px-6 py-6">
                <CustomButton icon={<RxCross1/>} color="bg-gray-400 rounded-none">Delete</CustomButton>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <CustomModal
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
        width="w-[60%]"
      >
        <div className=" bg-white p-6 rounded-md">
          <h2 className=" pb-3 font-jamjure">Message</h2>
          <p className=" font-[500]">{message}</p>
        </div>
      </CustomModal>
    </div>
  );
};

export default InquiryDetails;
