import React from "react";
import { PiExamBold, PiFlagBannerFoldBold } from "react-icons/pi";
import { Outlet } from "react-router-dom";
import PageMgmt_Nav from "../reusables/PageMgmt_Nav";
import { BsFillBookmarkPlusFill, BsFillChatQuoteFill, BsQuestionCircleFill } from "react-icons/bs";
import { MdFormatColorText } from "react-icons/md";
import { GrScorecard } from "react-icons/gr";

const TestPrepPage = () => {
  const subMenu = [
    {
      id: 1,
      title: "Test Overview",
      path: "/admin/testprep_page",
      icon: <PiExamBold />,
    },
    {
      id: 2,
      title: "How to Register",
      path: "/admin/testprep_page/test_register",
      icon: <BsFillBookmarkPlusFill />,
    },
    {
      id: 3,
      title: "Test Format",
      path: "/admin/testprep_page/test_format",
      icon: <MdFormatColorText />,
    },
    {
      id: 4,
      title: "Test Scores",
      path: "/admin/testprep_page/test_scores",
      icon: <GrScorecard />,
    },
    {
      id: 5,
      title: "Test FAQ's",
      path: "/admin/testprep_page/test_faq",
      icon: <BsFillChatQuoteFill />,
    },
  ];
  return (
    <div>
      <PageMgmt_Nav data={subMenu} />
      <section className=" bg-white px-6 sm:px-12 pb-7 sm:pb-14 sm:pt-12 pt-6 rounded-sm drop-shadow-lg">
        <Outlet />
      </section>
    </div>
  );
};

export default TestPrepPage;
