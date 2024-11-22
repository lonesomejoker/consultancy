import React, { useCallback, useState } from "react";
import { IoSave } from "react-icons/io5";
import CustomButton from "../reusables/CustomButton";
import InputField from "../reusables/InputField";
import { useDropzone } from "react-dropzone";
import { RxCross1, RxCross2 } from "react-icons/rx";
import { CiCircleList } from "react-icons/ci";
import { MdTitle } from "react-icons/md";
import MultipleImage from "../reusables/MultipleImage";

const WhyAbroadForm = () => {
  const [whyabroadForm, setWhyabroadForm] = useState({
    why_abroad_title: "",
    why_abroad_content: "",
    why_abroad_options: "",
    why_abroad_list: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const capitalizeFirstLetter = (text) => {
      return text.charAt(0).toUpperCase() + text.slice(1);
    };

    if (name === "why_abroad_title" || name === "why_abroad_content") {
      setWhyabroadForm({
        ...whyabroadForm,
        [name]: capitalizeFirstLetter(value),
      });
    } else {
      setWhyabroadForm({ ...whyabroadForm, [name]: value });
    }
  };

  const [errors, setErrors] = useState({});
  const validate = () => {
    const tempErrors = {};

    if (
      whyabroadForm.why_abroad_title.length < 5 ||
      whyabroadForm.why_abroad_title.length > 25
    ) {
      tempErrors.why_abroad_title =
        "Full Name must be between 5-25 characters.";
    }
    if (whyabroadForm.why_abroad_content.length < 15) {
      tempErrors.why_abroad_content =
        "Content must be at least 15 characters.";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Handling image files
  const [image, setImage] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const abroadChooseUS = {
        ...whyabroadForm,
        images: image,
      };
      alert("Why Choose Us Updated");
      console.log("Welcome Section Details:", abroadChooseUS);

      // setImage([]);
      // setForm({ title: "", content: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <section className=" flex flex-col md:flex-row gap-5 justify-between mb-[2.5rem] sm:mb-[3rem] items-center">
        <h5 className=" subheading  ">Why Study Abroad Section </h5>
        <div className=" flex justify-end gap-5 items-center w-full md:w-[60%] ">
          <CustomButton type="submit" color="bg-gray-400" width=" w-[50%] md:w-[25%] " icon={<RxCross2/>}>CANCEL</CustomButton>
          <CustomButton type="submit" color="bg-green-500" width="w-[50%] md:w-[25%] " icon={<IoSave/>}>POST</CustomButton>
          </div>
          </section>
      <section className=" grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
        <section className=" space-y-6">
          <div>
            <p className=" mb-4 font-[500]">
              Title{" "}
              <span className="text-indigo-400 text-[1.3rem] ml-1">*</span>
            </p>
            <InputField
              icon={<MdTitle />}
              rounded="rounded"
              type="text"
              name="why_abroad_title"
              placeholder="Title"
              value={whyabroadForm.why_abroad_title}
              onChange={handleChange}
              required
              error={errors.why_abroad_title}
            />
          </div>
          <div>
            <p className=" mb-4 font-[500] ">
              Content{" "}
              <span className="text-indigo-400 text-[1.3rem] ml-1">*</span>
            </p>
            <InputField
              rounded="rounded"
              type="textarea"
              name="why_abroad_content"
              placeholder="Write your content here..."
              value={whyabroadForm.why_abroad_content}
              onChange={handleChange}
              error={errors.why_abroad_content}
              required
            />
          </div>
         <div>
          <MultipleImage imageNum={2} image={image} setImage={setImage} title=" "/>
         </div>
        </section>
        <section className=" space-y-6">
          <div className=" md:w-[47%]">
            <p className=" mb-4 font-[500] ">
              Select List{" "}
              <span className="text-indigo-400 text-[1.3rem] ml-1">*</span>
            </p>
            <InputField
              rounded="rounded"
              type="select"
              options={["1st", "2nd", "3rd","4th","5th","6th"]}
              name="why_abroad_options"
              placeholder="Select List "
              value={whyabroadForm.why_abroad_options}
              onChange={handleChange}
              error={errors.why_abroad_options}
              required
            />
          </div>
          <section>
            <p className="font-[500] mb-4">
              List {whyabroadForm.abroad_chooseus_options}{" "}
              <span className="text-indigo-400 text-[1.3rem] ml-1">*</span>
            </p>
            <div className=" space-y-4">
              <InputField
                icon={<CiCircleList />}
                rounded="rounded"
                type="text"
                name="why_abroad_list"
                placeholder="1st list .."
                value={whyabroadForm.why_abroad_list}
                onChange={handleChange}
                required
                error={errors.why_abroad_list}
              />
            </div>
          </section>
        </section>
      </section>
    </form>
  );
};

export default WhyAbroadForm;
