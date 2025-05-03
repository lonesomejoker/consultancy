import React, { useState } from "react";
import CustomButton from "../reusables/CustomButton";
import InputField from "../reusables/InputField";
import { IoSave } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { MdQuestionMark } from "react-icons/md";
import SingleImage from "../reusables/SingleImage";


const OurServicesForm = () => {
  const [value, setValue] = useState("FaUsers");
  const [servicesForm, setServicesForm] = useState({
    service_title: "",
    service_summary: "",
    service_options: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const capitalizeFirstLetter = (text) => {
      return text.charAt(0).toUpperCase() + text.slice(1);
    };

    if (name === "service_title" || name === "service_summary") {
      setServicesForm({
        ...servicesForm,
        [name]: capitalizeFirstLetter(value),
      });
    } else {
      setServicesForm({ ...servicesForm, [name]: value });
    }
  };
  const [serviceImage,setServiceImage]=useState([]);
  const [errors, setErrors] = useState({});
  const validate = () => {
    const tempErrors = {};

    if (
      servicesForm.service_title.length < 8 ||
      servicesForm.service_title.length > 15
    ) {
      tempErrors.service_title = "Title must be between 8-15 characters.";
    }
    if (
      servicesForm.service_summary.length < 15 ||
      servicesForm.service_summary.length > 40
    ) {
      tempErrors.service_summary = "Summary must be between 15-40 characters.";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const newServices={
        ...servicesForm,
        service_image:serviceImage,
        service_icon:value,
      }
      alert("Services Updated ");
      console.log("Services Data:", newServices);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <section className=" flex flex-col md:flex-row gap-5 justify-between mb-[2.5rem] sm:mb-[3rem] items-center">
        <h5 className=" subheading  ">Services List </h5>
        <div className=" flex justify-end gap-5 items-center w-full md:w-[60%] ">
          <CustomButton type="submit" color="bg-gray-400" width=" w-[50%] md:w-[25%] " icon={<RxCross2/>}>CANCEL</CustomButton>
          <CustomButton type="submit" color="bg-green-500" width="w-[50%] md:w-[25%] " icon={<IoSave/>}>POST</CustomButton>
          </div>
          </section>
      <section className=" grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-[3rem]">
        <section className=" space-y-6">
        <div>
           <SingleImage title="Service" image={serviceImage} setImage={setServiceImage} height="h-[8.5rem]"/>
          </div>
        <div>
        <p className="mb-4 font-[500] ">Select Service *</p>
        <InputField
          type="select"
          rounded="rounded md:w-[50%] "
          name="service_options"
          options={["1st", "2nd", "3rd", "4th", "5th", "6th"]}
          value={servicesForm.service_options}
          onChange={handleChange}
          error={errors.service_options}
          required
        />
      </div>
      <section className=" flex justify-between gap-4 md:gap-8">
          <div className=" flex-1">
            <p className=" mb-4 font-[500] ">Title <span className="text-indigo-400 text-[1.3rem] ml-1">*</span></p>
            <InputField
              rounded="rounded"
              type="text"
              name="service_title"
              placeholder="Service Title"
              value={servicesForm.service_title}
              onChange={handleChange}
              error={errors.service_title}
              required
            />
          </div>
          <div>
            <p className=" mb-[18.5px]">
              Icon <span className="text-indigo-400 text-[1.3rem] ml-1">*</span>
            </p>
          </div>
          </section>
         
        </section>
       <section className=" space-y-6">
        <div>
          <p className=" mb-4 font-[500]">Summary *</p>
          <InputField
            icon={<MdQuestionMark />}
            rounded="rounded"
            type="textarea"
            name="service_summary"
            placeholder="Service Summary"
            value={servicesForm.service_summary}
            onChange={handleChange}
            required
            error={errors.service_summary}
          />
        </div>
        <div>
          <p className=" mb-4 font-[500]">Description *</p>
          <InputField
            icon={<MdQuestionMark />}
            rounded="rounded"
            type="textarea"
            name="service_desc"
            placeholder="Service Description"
            value={servicesForm.service_desc}
            onChange={handleChange}
            required
            error={errors.service_desc}
          />
        </div>
        </section>
      </section>
    </form>
  );
};

export default OurServicesForm;
