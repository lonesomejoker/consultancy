import React, { useState } from "react";
import { IoSave } from "react-icons/io5";
import CustomButton from "../reusables/CustomButton";
import InputField from "../reusables/InputField";
import { RxCross2 } from "react-icons/rx";
import { MdTitle } from "react-icons/md";
import MultipleImage from "../reusables/MultipleImage";

const OurGoalsForm = () => {
  const [ourGoals, setOurGoals] = useState({
    goal_title: "",
    goal_content: "",
  });
  
  const [goalList, setGoalList] = useState({
    list_title: "",
    list_content: "",
    list_options:"",
  });  

  const handleChange = (e) => {
    const { name, value } = e.target;
    const capitalizeFirstLetter = (text) => {
      return text.charAt(0).toUpperCase() + text.slice(1);
    };

    if (
      name === "goal_title" ||
      name === "goal_content"

    ) {
      setOurGoals({ ...ourGoals, [name]: capitalizeFirstLetter(value) });
    } else {
      setOurGoals({ ...ourGoals, [name]: value });
    }

  };

  const handleChange2 = (e) => {
    const { name, value } = e.target;
    const capitalizeFirstLetter = (text) => {
      return text.charAt(0).toUpperCase() + text.slice(1);
    };

    if (
      name ==="list_title"||
      name ==="list_content"
    ) {
      setGoalList({ ...goalList, [name]: capitalizeFirstLetter(value) });
    } else {
      setGoalList({ ...ourGoals, [name]: value });
    }
  };

  const [errors, setErrors] = useState({});
  const validate = () => {
    const tempErrors = {};

    if (ourGoals.goal_title.length < 5 || ourGoals.goal_title.length > 25) {
      tempErrors.goal_title = "Full Name must be between 5-25 characters.";
    }
    if (ourGoals.goal_content.length < 50) {
      tempErrors.goal_content = "Content must be at least 50 characters.";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Handling image files
  const [image, setImage] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const newAbout = {
        ...ourGoals,
        images: image,
      };
      alert("Welcome Section Updated");
      console.log("About Us Details:", newAbout);
    }
    // setImage([]);
    // setForm({ title: "", content: "" });
  };

  const handleListSubmit = (e) => {
    e.preventDefault();
      alert("Our Goals list updated");
      console.log("List Details:", goalList);

  };

  return (
    <form onSubmit={handleSubmit}>
        <section className=" flex flex-col md:flex-row gap-5 justify-between mb-[2.5rem] sm:mb-[3rem] items-center">
        <h5 className=" subheading  ">Our Goals Section</h5>
        <div className=" flex justify-end gap-5 items-center w-full md:w-[60%] ">
          <CustomButton type="submit" color="bg-gray-400" width=" w-[50%] md:w-[25%] " icon={<RxCross2/>}>CANCEL</CustomButton>
          <CustomButton type="submit" color="bg-green-500" width="w-[50%] md:w-[25%] " icon={<IoSave/>}>POST</CustomButton>
          </div>
          </section>
        <section className=" grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        <section>
          <div>
            <p className=" mb-4 font-[500]">Title <span className="text-indigo-400 text-[1.3rem] ml-1">*</span></p>
            <InputField
              icon={<MdTitle />}
              rounded="rounded"
              type="text"
              name="goal_title"
              placeholder="Title here..."
              value={ourGoals.goal_title}
              onChange={handleChange}
              required
              error={errors.goal_title}
            />
          </div>
           
            <div className=" mt-[2rem]">
              <p className=" mb-4">Brief Intro <span className="text-indigo-400 text-[1.3rem] ml-1">*</span></p>
              <InputField
                icon={<MdTitle />}
                rounded="rounded"
                type="textarea"
                name="goal_content"
                placeholder="Description"
                value={ourGoals.goal_content}
                onChange={handleChange}
                required
                error={errors.goal_content}
              />
            </div> 
            </section>    
          <div>
           <MultipleImage imageNum={3} image={image} setImage={setImage} title="Welcome"/>
          </div>
        <section className=" space-y-6">
          <h6>Lists</h6>
        <div className=" md:w-[47%]">
          <p className=" mb-4 font-[500] ">Select List <span className="text-indigo-400 text-[1.3rem] ml-1">*</span></p>
          <InputField rounded="rounded"
            type="select"
            options={["1st","2nd","3rd"]}
            name="list_options"
            placeholder="Select List "
            value={goalList.list_options}
            onChange={handleChange2}
            error={errors.list_options}
            required
          />
        </div>
          <div>
            <p className=" mb-4 font-[500]">Title <span className="text-indigo-400 text-[1.3rem] ml-1">*</span></p>
            <InputField
              icon={<MdTitle />}
              rounded="rounded"
              type="text"
              name="list_title"
              placeholder="Title here..."
              value={goalList.list_title}
              onChange={handleChange2}
              required
              error={errors.list_title}
            />
          </div>
           
            <div className=" mt-[2rem]">
              <p className=" mb-4">Short Description <span className="text-indigo-400 text-[1.3rem] ml-1">*</span></p>
              <InputField
                icon={<MdTitle />}
                rounded="rounded"
                type="textarea"
                name="list_content"
                placeholder="Description"
                value={goalList.list_content}
                onChange={handleChange2}
                required
                error={errors.list_content}
              />
            </div> 
        </section>
        </section>

        </form>

  );
};

export default OurGoalsForm;
