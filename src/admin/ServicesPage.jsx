import React from "react";
import { Outlet } from "react-router-dom";
import PageMgmt_Nav from "../reusables/PageMgmt_Nav";
import { MdOutlineMedicalServices } from "react-icons/md";
import { BsPatchQuestion } from "react-icons/bs";
import { RiCustomerService2Line } from "react-icons/ri";

const ServicesPage = () => {
  const subMenu = [
    {
      id: 1,
      title: "Services List",
      path: "/admin/service_page",
      icon: <MdOutlineMedicalServices />,
    },
    {
      id: 2,
      title: "Great Service",
      path: "/admin/service_page/great_service",
      icon: <RiCustomerService2Line />,
    },
    {
      id: 3,
      title: "Why Choose Us",
      path: "/admin/service_page/service_offer",
      icon: <BsPatchQuestion />,
    },
  ];

  return (
    <div>
      <PageMgmt_Nav data={subMenu} />

      <section className="  bg-white px-6 sm:px-12 pb-7 sm:pb-14 sm:pt-12 pt-6 rounded-sm drop-shadow-lg">
        <Outlet />
      </section>
    </div>
  );
};

export default ServicesPage;
