import React, { useState } from "react";
import CustomButton from "../reusables/CustomButton";
import InputField from "../reusables/InputField";
import { IoSave } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { MdQuestionMark } from "react-icons/md";
import SingleImage from "../reusables/SingleImage";
import MultipleImage from "../reusables/MultipleImage";

const GreatService = () => {
  const [value, setValue] = useState("FaUsers");
  const [greatServices, setGreatServices] = useState({
    great_title: "",
    great_subtitle: "",
    subtitle_summary: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const capitalizeFirstLetter = (text) => {
      return text.charAt(0).toUpperCase() + text.slice(1);
    };

    if (name === "great_title" || name === "great_subtitle") {
      setGreatServices({
        ...greatServices,
        [name]: capitalizeFirstLetter(value),
      });
    } else {
      setGreatServices({ ...greatServices, [name]: value });
    }
  };
  const [serviceImage, setServiceImage] = useState([]);
  const [errors, setErrors] = useState({});
  const validate = () => {
    const tempErrors = {};

    if (
      greatServices.great_title.length < 8 ||
      greatServices.great_title.length > 30
    ) {
      tempErrors.great_title = "Title must be between 8-30 characters.";
    }
    if (
      greatServices.great_subtitle.length < 15 ||
      greatServices.great_subtitle.length > 30
    ) {
      tempErrors.great_subtitle = "Summary must be between 15-30 characters.";
    }
    if (
      greatServices.subtitle_summary.length < 20 ||
      greatServices.subtitle_summary.length > 50
    ) {
      tempErrors.subtitle_summary = "Summary must be between 20-50 characters.";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const newServices = {
        ...greatServices,
        service_image: serviceImage,
      };
      alert("Services Updated ");
      console.log("Services Data:", newServices);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
       <section className=" flex flex-col md:flex-row gap-5 justify-between mb-[2.5rem] sm:mb-[3rem] items-center">
        <h5 className=" subheading  ">Great Service </h5>
        <div className=" flex justify-end gap-5 items-center w-full md:w-[60%] ">
          <CustomButton type="submit" color="bg-gray-400" width=" w-[50%] md:w-[25%] " icon={<RxCross2/>}>CANCEL</CustomButton>
          <CustomButton type="submit" color="bg-green-500" width="w-[50%] md:w-[25%] " icon={<IoSave/>}>POST</CustomButton>
          </div>
          </section>

      <section className=" grid grid-cols-1 md:grid-cols-2 gap-8  md:gap-12 mt-[3rem]">
        <section className=" space-y-6">
          <div>
            <p className=" mb-4 font-[500] ">
              Title{" "}
              <span className="text-indigo-400 text-[1.3rem] ml-1">*</span>
            </p>
            <InputField
              rounded="rounded"
              type="text"
              name="great_title"
              placeholder="Great Service Title"
              value={greatServices.great_title}
              onChange={handleChange}
              error={errors.great_title}
              required
            />
          </div>
          <div>
            <MultipleImage
              title="Service"
              image={serviceImage}
              setImage={setServiceImage}
              height="h-[7rem] md:h-[8.5rem]"
              imageNum={3}
            />
          </div>
        </section>
        <section className=" space-y-6">
          <div>
            <p className=" mb-4 font-[500]">
              Sub Heading{" "}
              <span className="text-indigo-400 text-[1.3rem] ml-1">*</span>
            </p>
            <InputField
              rounded="rounded"
              type="textarea"
              name="great_subtitle"
              placeholder="Sub Heading"
              value={greatServices.great_subtitle}
              onChange={handleChange}
              required
              error={errors.great_subtitle}
            />
          </div>
          <div>
            <p className=" mb-4 font-[500]">
              Brief Description{" "}
              <span className="text-indigo-400 text-[1.3rem] ml-1">*</span>
            </p>
            <InputField
              rounded="rounded"
              type="textarea"
              name="subtitle_summary"
              placeholder="Brief Description"
              value={greatServices.subtitle_summary}
              onChange={handleChange}
              required
              error={errors.subtitle_summary}
            />
          </div>
        </section>
      </section>
    </form>
  );
};

export default GreatService;
