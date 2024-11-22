import React from "react";
import { blogItems } from "../utils/Elements";
import PaginationNav from "../reusables/PaginationNav";
import { useSelector } from "react-redux";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

const AdminBlogs = ({ data }) => {
  const { currentPage, datasPerPage } = useSelector((state) => state.pagyslice);
  const totalPage = Math.ceil((data?.length ?? 0) / datasPerPage);
  const pages = totalPage > 0 ? [...Array(totalPage + 1).keys()].slice(1) : [];

  const lastIndex = currentPage * datasPerPage;
  const firstIndex = lastIndex - datasPerPage;
  const visibleDatas = data?.slice(firstIndex, lastIndex);

  return (
    <>
      <section className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[35px] mt-[2rem]">
        {visibleDatas.map((item, idx) => {
          return (
            <section
              className=" bg-white flex flex-col duration-300 relative group"
              key={idx}
            >
              <img src={item.img} className=" w-full object-cover h-[16rem] md:h-[18rem]" />
              <div className=" bg-white pt-8 pb-2 pr-4 w-[90%] md:w-[85%] relative -top-[2.2rem] md:-top-[2.8rem]">
                <h4 className=" h-[6rem]">{item.title}</h4>
               <section className=" space-y-6">
                <div className=" flex gap-x-3 items-center">
                  <p className=" font-[500] tracking-wider caption">{item.date.toUpperCase()}</p>
                  <p className=" text-[1rem] rounded-full bg-neutral-600 size-[5px]"></p>
                  <p className=" font-[500] tracking-wider caption">{item.category.toUpperCase()}</p>
                </div>
                <div className=" w-[28%] h-[0.2rem] bg-indigo-400 rounded-[1px] ">
                  <p className="  hidden">hello</p>
                </div>
                </section>
              </div>
              <div className=" relative -top-[1.2rem] w-[90%] md:w-[85%]">
              <p className=" line-clamp-3 mb-6">{item.desc}</p>
              <main className=" flex items-center gap-3.5">
              <p className=" caption font-[600] text-indigo-500 tracking-widest">
                READ MORE
              </p>
              <LiaLongArrowAltRightSolid className=" text-[1.8rem] text-indigo-400"/>
              </main>
              </div>
            </section>
          );
        })}
      </section>
      <PaginationNav pages={pages} totalPage={totalPage} data={blogItems} />
    </>
  );
};

export default AdminBlogs;
