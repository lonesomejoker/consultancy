import React, { useState } from "react";
import { IoSave } from "react-icons/io5";
import CustomButton from "../reusables/CustomButton";
import InputField from "../reusables/InputField";
import { RxCross2 } from "react-icons/rx";
import { MdTitle } from "react-icons/md";


const WhyChooseUs = () => {
  const [chooseUsForm, setChooseUsForm] = useState({
    chooseus_content: "",
    chooseus_btntext: "",
    chooseus_options: "",
    chooseus_list_title: "",
    chooseus_list_desc: "",
  });
  const [value, setValue] = useState("FaUsers");

  const handleChange = (e) => {
    const { name, value } = e.target;
    const capitalizeFirstLetter = (text) => {
      return text.charAt(0).toUpperCase() + text.slice(1);
    };

    const capitalizeAll = (text) => {
      return text.toUpperCase();
    };

    if (name === "chooseus_content" || name === "goal_content") {
      setChooseUsForm({
        ...chooseUsForm,
        [name]: capitalizeFirstLetter(value),
      });
    } else {
      setChooseUsForm({ ...chooseUsForm, [name]: value });
    }

    if (name === "chooseus_btntext") {
      setChooseUsForm({ ...chooseUsForm, [name]: capitalizeAll(value) });
    } else {
      setChooseUsForm({ ...chooseUsForm, [name]: value });
    }
  };

  const [errors, setErrors] = useState({});
  const validate = () => {
    const tempErrors = {};

    if (
      chooseUsForm.chooseus_content.length < 5 ||
      chooseUsForm.chooseus_content.length > 25
    ) {
      tempErrors.chooseus_content =
        "Full Name must be between 5-25 characters.";
    }
    if (chooseUsForm.chooseus_btntext.length < 10) {
      tempErrors.chooseus_btntext = "Content must be at least 10 characters.";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
        const whyChoose = {
            ...chooseUsForm,
            icon: value,
          };
      alert("Why Choose Us Updated");
      console.log("Why choose us Details:", whyChoose);
    }
    // setImage([]);
    // setForm({ title: "", content: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <section className=" flex flex-col md:flex-row gap-5 justify-between mb-[2.5rem] sm:mb-[3rem] items-center">
        <h5 className=" subheading  ">Why Choose Us</h5>
        <div className=" flex justify-end gap-5 items-center w-full md:w-[60%] ">
          <CustomButton type="submit" color="bg-gray-400" width=" w-[50%] md:w-[25%] " icon={<RxCross2/>}>CANCEL</CustomButton>
          <CustomButton type="submit" color="bg-green-500" width="w-[50%] md:w-[25%] " icon={<IoSave/>}>POST</CustomButton>
          </div>
          </section>
      <section className=" grid md:grid-cols-2 gap-8 md:gap-12">
        <section>
          <div>
            <p className=" mb-4 font-[500]">Title <span className="text-indigo-400 text-[1.3rem] ml-1">*</span></p>
            <InputField
              icon={<MdTitle />}
              rounded="rounded"
              type="text"
              name="goal_title"
              placeholder="Title here..."
              value={chooseUsForm.chooseus_content}
              onChange={handleChange}
              required
              error={errors.chooseus_content}
            />
          </div>

          <div className=" mt-[2rem]">
            <p className=" mb-4">Brief Intro <span className="text-indigo-400 text-[1.3rem] ml-1">*</span></p>
            <InputField
              icon={<MdTitle />}
              rounded="rounded"
              type="textarea"
              name="chooseus_content"
              placeholder="Description"
              value={chooseUsForm.chooseus_content}
              onChange={handleChange}
              required
              error={errors.chooseus_content}
            />
          </div>
        </section>
        <section className=" space-y-6">
          <div className=" md:w-[47%]">
            <p className=" mb-4 font-[500] ">Select List <span className="text-indigo-400 text-[1.3rem] ml-1">*</span></p>
            <InputField
              rounded="rounded"
              type="select"
              options={["1st", "2nd", "3rd", "4th"]}
              name="chooseus_options"
              placeholder="Select List "
              value={chooseUsForm.chooseus_options}
              onChange={handleChange}
              error={errors.chooseus_options}
              required
            />
          </div>
          <section className="  flex justify-between gap-4 md:gap-6">
         
            <div className=" flex-1">
            <p className=" mb-4 font-[500]">Title {chooseUsForm.chooseus_options} <span className="text-indigo-400 text-[1.3rem] ml-1">*</span></p>
            <InputField
              icon={<MdTitle />}
              rounded="rounded"
              type="text"
              name="chooseus_list_title"
              placeholder="Title here..."
              value={chooseUsForm.chooseus_list_title}
              onChange={handleChange}
              required
              error={errors.chooseus_list_title}
            />
          </div>
          <div >
              <p className=" mb-[18px]">Icon {chooseUsForm.chooseus_options} <span className="text-indigo-400 text-[1.3rem] ml-1">*</span></p>
             
            </div>
          </section>
          
          <div className=" mt-[2rem]">
            <p className=" mb-4">Short Description {chooseUsForm.chooseus_options} <span className="text-indigo-400 text-[1.3rem] ml-1">*</span></p>
            <InputField
              icon={<MdTitle />}
              rounded="rounded"
              type="textarea"
              name="chooseus_list_desc"
              placeholder="Description"
              value={chooseUsForm.chooseus_list_desc}
              onChange={handleChange}
              required
              error={errors.chooseus_list_desc}
            />
          </div>
        </section>
      </section>
    </form>
  );
};

export default WhyChooseUs;
