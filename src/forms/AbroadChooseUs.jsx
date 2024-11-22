import React, { useState } from "react";
import { IoSave } from "react-icons/io5";
import CustomButton from "../reusables/CustomButton";
import InputField from "../reusables/InputField";
import { RxCross2 } from "react-icons/rx";
import { CiCircleList } from "react-icons/ci";
import { MdTitle } from "react-icons/md";
import IconPicker from "react-icons-picker";
import MultipleImage from "../reusables/MultipleImage";

const AbroadChooseUs = () => {
  const [value, setValue] = useState("FaUsers");
  const [abroadChooseForm, setAbroadChooseForm] = useState({
    abroad_choose_title: "",
    abroad_choose_content: "",
    svg_options: "",
    abroad_chooseus_options:"",
    svg_stats:"",
    svg_desc:"",
    abroad_choose_list:"",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const capitalizeFirstLetter = (text) => {
      return text.charAt(0).toUpperCase() + text.slice(1);
    };

    if (name === "abroad_choose_title" || name === "abroad_choose_content") {
      setAbroadChooseForm({
        ...abroadChooseForm,
        [name]: capitalizeFirstLetter(value),
      });
    } else {
      setAbroadChooseForm({ ...abroadChooseForm, [name]: value });
    }
  };

  const [errors, setErrors] = useState({});
  const validate = () => {
    const tempErrors = {};

    if (
      abroadChooseForm.abroad_choose_title.length < 5 ||
      abroadChooseForm.abroad_choose_title.length > 25
    ) {
      tempErrors.abroad_choose_title =
        "Full Name must be between 5-25 characters.";
    }
    if (abroadChooseForm.abroad_choose_content.length < 15) {
      tempErrors.abroad_choose_content =
        "Content must be at least 15 characters.";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Handling image files
  const [image, setImage] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validate()){
      const abroadChooseUS = {
        ...abroadChooseForm,
        images: image,
        icon: value,
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
        <h5 className=" subheading  ">Why Choose Us </h5>
        <div className=" flex justify-end gap-5 items-center w-full md:w-[60%] ">
          <CustomButton type="submit" color="bg-gray-400" width=" w-[50%] md:w-[25%] " icon={<RxCross2/>}>CANCEL</CustomButton>
          <CustomButton type="submit" color="bg-green-500" width="w-[50%] md:w-[25%] " icon={<IoSave/>}>POST</CustomButton>
          </div>
          </section>
      <section className=" grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
      <section className=" space-y-6">
        <div>
          <p className=" mb-4 font-[500]">
            Title <span className="text-indigo-400 text-[1.3rem] ml-1">*</span>
          </p>
          <InputField
            icon={<MdTitle />}
            rounded="rounded"
            type="text"
            name="abroad_choose_title"
            placeholder="Title"
            value={abroadChooseForm.abroad_choose_title}
            onChange={handleChange}
            required
            error={errors.abroad_choose_title}
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
            name="abroad_choose_content"
            placeholder="Write your content here..."
            value={abroadChooseForm.abroad_choose_content}
            onChange={handleChange}
            error={errors.abroad_choose_content}
            required
          />
        </div>
        <div>
        <MultipleImage image={image} setImage={setImage} title="Choose Us" imageNum={2}/>
        </div>
        </section>
        <section className=" space-y-6">
        <div className=" md:w-[47%]">
          <p className=" mb-4 font-[500] ">Select Svg <span className="text-indigo-400 text-[1.3rem] ml-1">*</span></p>
          <InputField rounded="rounded"
            type="select"
            options={["1st","2nd"]}
            name="svg_options"
            placeholder="Select Svg "
            value={abroadChooseForm.svg_options}
            onChange={handleChange}
            error={errors.svg_options}
            required
          />
        </div>
        <section className=" flex justify-between gap-4 md:gap-8">
        
          <div className=" flex-1">
            <p className=" mb-4">
              Stats{" "}
              <span className="text-indigo-400 text-[1.3rem] ml-1">*</span>
            </p>
            <InputField
              icon={<MdTitle />}
              rounded="rounded"
              type="text"
              name="svg_stats"
              placeholder="Description"
              value={abroadChooseForm.svg_stats}
              onChange={handleChange}
              required
              error={errors.svg_stats}
            />
          </div>
          <div>
            <p className=" mb-[18.5px]">
              Icon <span className="text-indigo-400 text-[1.3rem] ml-1">*</span>
            </p>
            <IconPicker value={value} onChange={(v) => setValue(v)} />
          </div>
        </section>
        <div>
            <p className=" mb-4">
              Short Description{" "}
              <span className="text-indigo-400 text-[1.3rem] ml-1">*</span>
            </p>
            <InputField
              rounded="rounded"
              type="textarea"
              name="svg_desc"
              placeholder=" Stat Description"
              value={abroadChooseForm.svg_desc}
              onChange={handleChange}
              required
              error={errors.svg_desc}
            />
            </div>
            <div className=" md:w-[47%]">
          <p className=" mb-4 font-[500] ">Select List <span className="text-indigo-400 text-[1.3rem] ml-1">*</span></p>
          <InputField rounded="rounded"
            type="select"
            options={["1st","2nd","3rd"]}
            name="abroad_chooseus_options"
            placeholder="Select List "
            value={abroadChooseForm.abroad_chooseus_options}
            onChange={handleChange}
            error={errors.abroad_chooseus_options}
            required
          />
        </div>
            <section>
          <p className="font-[500] mb-4">
            List {abroadChooseForm.abroad_chooseus_options} <span className="text-indigo-400 text-[1.3rem] ml-1">*</span>
          </p>
          <div className=" space-y-4">
            <InputField
              icon={<CiCircleList />}
              rounded="rounded"
              type="text"
              name="abroad_choose_list"
              placeholder="1st list .."
              value={abroadChooseForm.abroad_choose_list}
              onChange={handleChange}
              required
              error={errors.abroad_choose_list}
            />
          </div>
        </section>
        
        </section>
      
      </section>
    </form>
  );
};

export default AbroadChooseUs;
