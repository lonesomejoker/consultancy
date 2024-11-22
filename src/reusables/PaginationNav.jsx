import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  onChangeDataPerpage,
  onClickCurrentPage,
  onNavigateNext,
  onNavigatePrev,
} from "../app/slices/PaginationSlice";

const PaginationNav = ({ data, pages, totalPage }) => {
  const dispatch = useDispatch();
  const { currentPage } = useSelector((state) => state.pagyslice);
  const handlePrev = () => {
    if (currentPage !== 1) {
      dispatch(onNavigatePrev());
    }
  };

  const handleNext = () => {
    if (currentPage !== totalPage) {
      dispatch(onNavigateNext());
    }
  };

  const handleCurrentPage = (item) => {
    dispatch(onClickCurrentPage(item));
  };
  return (
    <>
      {data.length > 0 && (
        <div
          className=" flex sm:flex-row flex-col relative gap-x-3 items-center gap-4 px-3 
       w-fit py-1 mx-auto my-3 md:my-6"
        >
          <p
            className={` ${
              currentPage === 1 ? "text-gray-400" : "text-neutral-900"
            } font-[550] `}
            onClick={handlePrev}
          >
            PREV
          </p>
          <section>
            {pages?.map((item) => (
              <button
                key={item}
                className={`text-center px-4 font-poppins cursor-pointer font-[600]
            ${
              item === currentPage
                ? "bg-indigo-400 text-white rounded-full transition scale-95 duration-500 py-2"
                : "text-black bg-white"
            }`}
                onClick={() => handleCurrentPage(item)}
              >
                {item}
              </button>
            ))}
          </section>
          <p
            className={`${
              currentPage === totalPage ? "text-gray-400 " : "text-neutral-900"
            } font-[550]`}
            onClick={handleNext}
          >
            NEXT
          </p>
          <select
            onChange={(event) =>
              dispatch(onChangeDataPerpage(event.target.value))
            }
            className=" font-jamjure sm:relative absolute bottom-0 -right-[4.8rem] sm:-right-0  default:auto mx-3 bg-gray-50 border-2 focus:border-indigo-500 rounded px-2 py-1.5 text-[16px]"
            defaultValue={4}
          >
            <option value="4">4</option>
            <option value="6">6</option>
            <option value="8">8</option>
          </select>
        </div>
      )}
    </>
  );
};

export default PaginationNav;
