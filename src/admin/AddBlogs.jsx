import React, { useState } from "react";
import { blogItems } from "../utils/Elements";
import CustomButton from "../reusables/CustomButton";
import { RxPlus } from "react-icons/rx";
import { useSelector } from "react-redux";
import AdminBlogs from "./AdminBlogs";
import BlogStats from "./BlogStats";
import { useNavigate } from "react-router-dom";

const AddBlogs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Blogs");
  const { blogs } = useSelector((state) => state.blogslice);
  console.log("blog details:", blogs);

  // Filter blogs based on selected category
  const filteredBlogs =
    selectedCategory === "All Blogs"
      ? blogItems
      : blogItems.filter((blog) => blog.category === selectedCategory);

  const categoryList = [
    { id: 1, title: "All Blogs" },
    { id: 2, title: "Education" },
    { id: 3, title: "Destination" },
    { id: 4, title: "Careers" },
  ];
  const navigate=useNavigate();

  return (
    <section>
    <div className=" flex md:flex-row flex-col justify-between gap-8 items-center">
    <div className=" h-[14rem] md:h-[20rem] rounded-[1.5rem] relative group w-full flex items-end">
          <div
            className="absolute inset-0 bg-center bg-cover rounded-[1.5rem] bg-no-repeat brightness-75"
            style={{
              backgroundImage: `url("https://martech.org/wp-content/uploads/2014/07/blog-tablet-mobile-600.jpg")`,
            }}
          />
          <section className="space-y-2 relative w-full bg-gray-600 bg-opacity-50  backdrop-blur  py-4 px-3 md:px-6 rounded-b-[1.5rem] ">
          <h4 className=" font-jamjure text-white">Design in the age of AI: How to adapt easily.</h4>
          <p className=" text-white caption ">With slothUI you can unleash your inner GenZ and stop caring about anything else.</p>
          </section>
        </div>
          <BlogStats/>
        </div>
      <div className="mt-[2.5rem] md:mt-[3rem]">
        <div className=" flex flex-col-reverse md:flex-row gap-4 md:justify-between md:items-end"> {/* Adjust pb-1 to align */}
          <div className="flex gap-4 md:gap-6 items-end "> 
            {categoryList.map((item) => {
              return (
                <p
                  key={item.id}
                  className={`font-jamjure font-[500] cursor-pointer duration-300 pb-1 ${
                    selectedCategory === item.title
                      ? "border-b-2 border-indigo-500 text-indigo-500"
                      : ""
                  }`}
                  onClick={() => setSelectedCategory(item.title)} 
                >
                  {item.title}
                </p>
              );
            })}
          </div>

            <CustomButton color="bg-green-500" width="w-[50%] md:w-fit ml-auto " onClick={()=>navigate("/admin/blogform")} icon={<RxPlus/>}> Create New Blog
            </CustomButton>
        </div>
        <AdminBlogs data={filteredBlogs} />
      </div>
    </section>
  );
};

export default AddBlogs;
