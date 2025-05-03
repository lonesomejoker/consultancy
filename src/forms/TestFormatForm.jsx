import React, { useState } from "react";
import CustomButton from "../reusables/CustomButton";
import InputField from "../reusables/InputField";
import { IoSave } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { MdQuestionMark } from "react-icons/md";
import { testClasses } from "../utils/Elements";


const TestFormatForm = () => {
  const [value, setValue] = useState("FaUsers");
  const [testFormat, setTestFormat] = useState({
    testFormat_title: "",
    test_minutes: "",
    testClass_options: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const capitalizeFirstLetter = (text) => {
      return text.charAt(0).toUpperCase() + text.slice(1);
    };

    if (name === "testFormat_title" || name === "test_minutes") {
      setTestFormat({
        ...testFormat,
        [name]: capitalizeFirstLetter(value),
      });
    } else {
      setTestFormat({ ...testFormat, [name]: value });
    }
  };

  const [errors, setErrors] = useState({});
  const validate = () => {
    const tempErrors = {};

    if (
      testFormat.testFormat_title.length < 5 ||
      testFormat.testFormat_title.length > 20
    ) {
      tempErrors.testFormat_title =
        "Title must be between 5-50 characters.";
    }
    if (
      testFormat.test_minutes.length < 10 ||
      testFormat.test_minutes.length > 40
    ) {
      tempErrors.test_minutes =
        "Summary must be between 10-40 characters.";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
        const newFormat={
            ...testFormat, format_icon:value,
        }
      alert("Services Updated ");
      console.log("Services Data:", newFormat);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <section className=" flex flex-col md:flex-row gap-5 justify-between mb-[2.5rem] sm:mb-[3rem] items-center">
        <h5 className=" subheading  ">Test Format </h5>
        <div className=" flex justify-end gap-5 items-center w-full md:w-[60%] ">
          <CustomButton type="submit" color="bg-gray-400" width=" w-[50%] md:w-[25%] " icon={<RxCross2/>}>CANCEL</CustomButton>
          <CustomButton type="submit" color="bg-green-500" width="w-[50%] md:w-[25%] " icon={<IoSave/>}>POST</CustomButton>
          </div>
          </section>
      <section className=" space-y-6 md:w-[50%]">
        <div>
          <p className="mb-4 font-[500]">
            Select Test Class{" "}
            <span className="text-indigo-400 text-[1.3rem] ml-1">*</span>
          </p>
          <InputField
            type="select"
            rounded="rounded md:w-[50%] "
            name="testClass_options"
            options={testClasses.map((item) => item.title)}
            value={testFormat.testClass_options}
            onChange={handleChange}
            error={errors.testClass_options}
            required
          />
        </div>
        <section className=" flex justify-between gap-4 md:gap-8">
        <div className=" flex-1">
          <p className=" mb-4 font-[500] ">
            Format{" "}
            <span className="text-indigo-400 text-[1.3rem] ml-1">*</span>
          </p>
          <InputField
            rounded="rounded"
            type="text"
            name="testFormat_title"
            placeholder="Format Title"
            value={testFormat.testFormat_title}
            onChange={handleChange}
            error={errors.testFormat_title}
            required
          />
        </div>
        <div>
              <p className=" mb-[18.5px]">Icon <span className="text-indigo-400 text-[1.3rem] ml-1">*</span></p>
          
            </div>
        </section>
        <div>
          <p className=" mb-4 font-[500]">
            Minutes <span className="text-indigo-400 text-[1.3rem] ml-1">*</span>
          </p>
          <InputField
            icon={<MdQuestionMark />}
            rounded="rounded"
            type="text"
            name="test_minutes"
            placeholder="Duration in minutes"
            value={testFormat.test_minutes}
            onChange={handleChange}
            required
            error={errors.test_minutes}
          />
        </div>
      </section>
    </form>
  );
};

export default TestFormatForm;
