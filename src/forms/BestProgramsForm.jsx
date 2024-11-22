import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import CustomButton from "../reusables/CustomButton";
import InputField from "../reusables/InputField";
import { IoSave } from "react-icons/io5";
import {  MdShortText } from "react-icons/md";
import { places } from "../utils/Elements";


const BestProgramsForm = () => {
  const [bestprograms, setBestprograms] = useState({
    programs_info: "",
    programs_options:"",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const capitalizeFirstLetter = (text) => {
      return text.charAt(0).toUpperCase() + text.slice(1);
    };

    if (name === "programs_info") {
      setBestprograms({ ...bestprograms, [name]: capitalizeFirstLetter(value) });
    } else {
      setBestprograms({ ...bestprograms, [name]: value });
    }
  };

  const [errors, setErrors] = useState({});
  const validate = () => {
    const tempErrors = {};
    if (
      bestprograms.programs_info.length < 20 ||
      bestprograms.programs_info.length > 50
    ) {
      tempErrors.programs_info = " Text must be between 20-50 words.";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Program Details Updated ");
      console.log("Program Details:", bestprograms);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <section className=" flex flex-col md:flex-row gap-5 justify-between mb-[2.5rem] sm:mb-[3rem] items-center">
        <h5 className=" subheading  ">Program Details </h5>
        <div className=" flex justify-end gap-5 items-center w-full md:w-[60%] ">
          <CustomButton type="submit" color="bg-gray-400" width=" w-[50%] md:w-[25%] " icon={<RxCross2/>}>CANCEL</CustomButton>
          <CustomButton type="submit" color="bg-green-500" width="w-[50%] md:w-[25%] " icon={<IoSave/>}>POST</CustomButton>
          </div>
          </section>
      <div className=" mb-[2.5rem] md:mb-[3rem]">
        <p className="mb-4 font-[500] caption">
          Select Country{" "}
          <span className="text-indigo-400 text-[1.3rem] ml-1">*</span>
        </p>
        <InputField
          type="select"
          rounded="rounded md:w-[27.5%] "
          name="programs_options"
          options={places.map((item) => item.name)}
          value={bestprograms.programs_options}
          onChange={handleChange}
          error={errors.programs_options}
          required
        />
      </div>
        <section className=" md:w-[50%]">
          <div className=" mt-6">
            <p className=" mb-4 font-[500]">
              Programs Details{" "}
              <span className="text-indigo-400 text-[1.3rem] ml-1">*</span>
            </p>
            <InputField
              rounded="rounded w-[55.5%]" 
              icon={<MdShortText />}
              type="textarea"
              name="programs_infos"
              placeholder="Course Details..."
              value={bestprograms.programs_info}
              onChange={handleChange}
              required
              error={errors.programs_info}
            />
          </div>
        </section>
    </form>
  );
};

export default BestProgramsForm;
