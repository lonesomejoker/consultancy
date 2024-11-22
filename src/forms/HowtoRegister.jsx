import React, { useState } from "react";
import CustomButton from "../reusables/CustomButton";
import InputField from "../reusables/InputField";
import { IoSave } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { MdQuestionMark } from "react-icons/md";
import { testClasses } from "../utils/Elements";

const HowtoRegister = () => {
  const [registerTestForm, setRegisterTestForm] = useState({
    register_subheading: "",
    registerTest_content: "",
    registerTest_options: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const capitalizeFirstLetter = (text) => {
      return text.charAt(0).toUpperCase() + text.slice(1);
    };

    if (name === "register_subheading" || name === "registerTest_content") {
      setRegisterTestForm({
        ...registerTestForm,
        [name]: capitalizeFirstLetter(value),
      });
    } else {
      setRegisterTestForm({ ...registerTestForm, [name]: value });
    }
  };

  const [errors, setErrors] = useState({});
  const validate = () => {
    const tempErrors = {};

    if (
      registerTestForm.register_subheading.length < 15 ||
      registerTestForm.register_subheading.length > 50
    ) {
      tempErrors.register_subheading =
        "Title must be between 15-50 characters.";
    }
    if (
      registerTestForm.registerTest_content.length < 15 ||
      registerTestForm.registerTest_content.length > 40
    ) {
      tempErrors.registerTest_content =
        "Summary must be between 15-40 characters.";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Services Updated ");
      console.log("Services Data:", registerTestForm);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <section className=" flex flex-col md:flex-row gap-5 justify-between mb-[2.5rem] sm:mb-[3rem] items-center">
        <h5 className=" subheading  ">How to Register </h5>
        <div className=" flex justify-end gap-5 items-center w-full md:w-[60%] ">
          <CustomButton type="submit" color="bg-gray-400" width=" w-[50%] md:w-[25%] " icon={<RxCross2/>}>CANCEL</CustomButton>
          <CustomButton type="submit" color="bg-green-500" width="w-[50%] md:w-[25%] " icon={<IoSave/>}>POST</CustomButton>
          </div>
          </section>
      <section className=" space-y-6 lg:w-[50%]">
        <div>
          <p className="mb-4 font-[500]">
            Select Test Class{" "}
            <span className="text-indigo-400 text-[1.3rem] ml-1">*</span>
          </p>
          <InputField
            type="select"
            rounded="rounded lg:w-[50%] "
            name="registerTest_options"
            options={testClasses.map((item) => item.title)}
            value={registerTestForm.registerTest_options}
            onChange={handleChange}
            error={errors.registerTest_options}
            required
          />
        </div>
        <div>
          <p className=" mb-4 font-[500] ">
            Sub Heading{" "}
            <span className="text-indigo-400 text-[1.3rem] ml-1">*</span>
          </p>
          <InputField
            rounded="rounded"
            type="textarea"
            name="register_subheading"
            placeholder="Sub Heading"
            value={registerTestForm.register_subheading}
            onChange={handleChange}
            error={errors.register_subheading}
            required
          />
        </div>
        <div>
          <p className=" mb-4 font-[500]">
            Steps <span className="text-indigo-400 text-[1.3rem] ml-1">*</span>
          </p>
          <InputField
            icon={<MdQuestionMark />}
            rounded="rounded"
            type="textarea"
            name="registerTest_content"
            placeholder="Steps to register"
            value={registerTestForm.registerTest_content}
            onChange={handleChange}
            required
            error={errors.registerTest_content}
          />
        </div>
      </section>
    </form>
  );
};

export default HowtoRegister;
