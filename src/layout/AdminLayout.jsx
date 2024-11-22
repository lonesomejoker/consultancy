import React, { createContext, useEffect, useRef, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { MdOutlineExitToApp } from "react-icons/md";
import { adminHeads, AdminSidebar } from "../utils/Elements";
import { IoMenu } from "react-icons/io5";
import SidebarLayout from "./SidebarLayout";
import { RxCross2 } from "react-icons/rx";

export const AdminContext = createContext();

const AdminLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const getCurrentDate = () => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const today = new Date();
    const dayName = days[today.getDay()];
    const monthName = months[today.getMonth()];
    const day = today.getDate();
    const year = today.getFullYear();

    const getDaySuffix = (day) => {
      if (day > 3 && day < 21) return "th";
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    return `${dayName}, ${monthName} ${day}${getDaySuffix(day)} ${year}`;
  };

  const navigate = useNavigate();
  const location = useLocation();

  const getActiveTitle = () => {
    for (const item of AdminSidebar) {
      if (item.path === location.pathname) {
        return item.title.toUpperCase();
      }
      if (item.submenu) {
        for (const sub of item.submenu) {
          // Check for exact match or nested outlet paths
          if (
            sub.path === location.pathname || 
            location.pathname.startsWith(sub.path)
          ) {
            return sub.specificPath.toUpperCase();
          }
        }
      }
    }
    return "DASHBOARD";
  };
  

  const activeTitle = getActiveTitle();
  const [dashMenu, setDashMenu] = useState(false);

  const [generatedIds, setGeneratedIds] = useState(new Set()); // Set to track unique IDs
  const generateUniqueId = () => {
    let randomId;
    do {
      randomId = Math.floor(Math.random() * 10000); // Generate random number from 0 to 1000
    } while (generatedIds.has(randomId)); // Check if ID already exists

    setGeneratedIds((prevIds) => new Set(prevIds).add(randomId)); // Add the new ID to the Set
    return randomId;
  };

  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the sidebar
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setDashMenu(false);
      }
    };

    // Add event listener for clicks
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Clean up the event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <AdminContext.Provider
      value={{
        generateUniqueId,
        getCurrentDate,
        menuOpen,
        toggleMenu,
        setMenuOpen,
        modalIsOpen,
        openModal,
        closeModal,
        dashMenu,
      }}
    >
      <section className="flex w-full h-[100vh] bg-white py-1 mx-auto max-w-[2000px] ">
        <section
          className={`font-poppins p-0 text-lg h-full duration-500 z-10 absolute md:relative  ${
            dashMenu === true
              ? "w-[70%] md:w-[24%] "
              : "w-[0%] sm:w-[6%] md:w-[7%] lg:w-[5%] "
          } text-indigo-500 space-y-1 rounded-sm`}
          ref={sidebarRef}
        > 
         <h6 className=" mb-[3rem] md:mb-[3.9rem] relative left-1 md:left-5 top-0 md:top-1 ">LOGO</h6>
          <section className="bg-white border-gray-100 drop-shadow-sm border-2 py-2 font-poppins flex  flex-col rounded-sm h-[75%] md:h-[80%] text-black relative">
            <div
              onClick={() => setDashMenu(!dashMenu)}
              className={` duration-300 ${
                dashMenu === true ? " ml-auto  mr-2" : " mx-auto "
              }`}
            >
              {dashMenu === true ? (
                <RxCross2 className="absolute -top-12 md:-top-0 left-2 md:left-0 md:relative text-[1.8rem] sm:text-[2rem] mb-4 text-black" />
              ) : (
                <IoMenu className={`absolute -top-12 md:-top-0 left-2 md:left-0 md:relative text-[1.8rem] sm:text-[2rem] text-black `} />
              )}
            </div>
            <SidebarLayout dashMenu={dashMenu} setDashMenu={setDashMenu} />
          </section>

          <div
            className={` px-4 drop-shadow-sm  ${
              dashMenu === true ? "justify-between bg-white border-2 border-gray-100" : "justify-center"
            } w-full flex items-center hover:transition hover:translate-x-3  hover:duration-500 py-[8px] rounded duration-500 `}
            onClick={() => navigate("/")}
          >
            <h6
              className={`${
                dashMenu === true ? "block " : "hidden "
              } font-jamjure `}
            >
              Logout
            </h6>
            <MdOutlineExitToApp className="text-[#de163a] text-[1.6rem]" />
          </div>
        </section>

        <section className={` flex flex-col w-full sm:h-[100vh]`}>
          <div className=" flex items-center justify-between gap-x-2 pl-[4rem] md:pl-8 pr-2 md:pr-6  bg-opacity-50 backdrop-blur">
            <div className="flex gap-2 ">
              <div>
                <h4 className=" mb-[8px] lg:mb-2 text-indigo-400 font-jamjure ">
                  {activeTitle}
                </h4>
                <p className="font-[400] text-gray-700 text-[11px] lg:text-[13px] font-poppins">
                  {getCurrentDate()}
                </p>
              </div>
            </div>
            <div className="flex gap-x-2 items-center md:gap-x-4">
              {adminHeads.map((item, idx) => (
                <h4 onClick={()=>navigate(item.path)}
                  className="flex items-center gap-x-0.5 md:gap-x-3"
                  key={idx}
                >
                  {item.icon}
                </h4>
              ))}
            </div>
          </div>

          <div className="  pl-2 md:pl-8 pr-2 md:pr-6  mt-[1.6rem] overflow-y-scroll  ">
            <Outlet />
          </div>
        </section>
      </section>
    </AdminContext.Provider>
  );
};

export default AdminLayout;
