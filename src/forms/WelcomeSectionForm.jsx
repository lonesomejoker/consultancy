import React, { useCallback, useState } from "react";
import { IoSave } from "react-icons/io5";
import CustomButton from "../reusables/CustomButton";
import InputField from "../reusables/InputField";
import { useDropzone } from "react-dropzone";
import { RxCross1, RxCross2 } from "react-icons/rx";
import { CiCircleList } from "react-icons/ci";
import { MdTitle } from "react-icons/md";
import IconPicker from "react-icons-picker";
import "./WelcomeForm.css"
import MultipleImage from "../reusables/MultipleImage";

const WelcomeSectionForm = () => {
  const [value, setValue] = useState("FaUsers");
  const [welcomeForm, setWelcomeForm] = useState({
    title: "",
    content: "",
    list_1: "",
    list_2: "",
    list_3: "",
    list_4: "",
    icon_options:"",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const capitalizeFirstLetter = (text) => {
      return text.charAt(0).toUpperCase() + text.slice(1);
    };

    if (
      name === "title" ||
      name === "content" ||
      name === "list_1" ||
      name === "list_2" ||
      name == "list_3" ||
      name == "list_4"
    ) {
      setWelcomeForm({ ...welcomeForm, [name]: capitalizeFirstLetter(value) });
    } else {
      setWelcomeForm({ ...welcomeForm, [name]: value });
    }
  };

  const [errors, setErrors] = useState({});
  const validate = () => {
    const tempErrors = {};

    if (welcomeForm.title.length < 5 || welcomeForm.title.length > 25) {
      tempErrors.title = "Full Name must be between 5-25 characters.";
    }
    if (welcomeForm.content.length < 15) {
      tempErrors.content = "Content must be at least 15 characters.";
    }
    if (welcomeForm.list_1.length < 5 || welcomeForm.list_1.length > 25) {
      tempErrors.list_1 = "Text must be between 5-25 characters.";
    }
    if (welcomeForm.list_2.length < 5 || welcomeForm.list_2.length > 25) {
      tempErrors.list_2 = "Text must be between 5-25 characters.";
    }
    if (welcomeForm.list_3.length < 5 || welcomeForm.list_3.length > 25) {
      tempErrors.list_3 = "Text must be between 5-25 characters.";
    }
    if (welcomeForm.list_4.length < 5 || welcomeForm.list_4.length > 25) {
      tempErrors.list_4 = "Text must be between 5-25 characters.";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const [image, setImage] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const newWelcome = {
        id: new Date().getTime(),
        ...welcomeForm,
        images: image,
        icon:value,
      };
      alert("Welcome Section Updated");
      console.log("Welcome Section Details:", newWelcome);
    }
    // setImage([]);
    // setForm({ title: "", content: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
        <section className=" flex flex-col md:flex-row gap-5 justify-between mb-[2.5rem] sm:mb-[3rem] items-center">
        <h5 className=" subheading  ">Welcome Section</h5>
        <div className=" flex justify-end gap-5 items-center w-full md:w-[60%] ">
          <CustomButton type="submit" color="bg-gray-400" width=" w-[50%] md:w-[25%] " icon={<RxCross2/>}>CANCEL</CustomButton>
          <CustomButton type="submit" color="bg-green-500" width="w-[50%] md:w-[25%] " icon={<IoSave/>}>POST</CustomButton>
          </div>
          </section>
        <section className=" grid  grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <section className=" space-y-6">
          <div>
            <p className=" mb-4 font-[500]">Title <span className="text-indigo-400 text-[1.3rem] ml-1">*</span></p>
            <InputField
              icon={<MdTitle />}
              rounded="rounded"
              type="text"
              name="title"
              placeholder="Title"
              value={welcomeForm.title}
              onChange={handleChange}
              required
              error={errors.title}
            />
          </div>
          <div>
            <p className=" mb-4 font-[500] ">Content <span className="text-indigo-400 text-[1.3rem] ml-1">*</span></p>
            <InputField
              rounded="rounded"
              type="textarea"
              name="content"
              placeholder="Write your content here..."
              value={welcomeForm.content}
              onChange={handleChange}
              error={errors.content}
              required
            />
          </div>
          <section>
            <p className=" my-4 font-[500]">List <span className="text-indigo-400 text-[1.3rem] ml-1">*</span></p>
            <div className=" space-y-4">
              <InputField
                icon={<CiCircleList />}
                rounded="rounded"
                type="text"
                name="list_1"
                placeholder="1st list .."
                value={welcomeForm.list_1}
                onChange={handleChange}
                required
                error={errors.list_1}
              />
              <InputField
                icon={<CiCircleList />}
                rounded="rounded"
                type="text"
                name="list_2"
                placeholder="2nd list .."
                value={welcomeForm.list_2}
                onChange={handleChange}
                required
                error={errors.list_2}
              />
              <InputField
                icon={<CiCircleList />}
                rounded="rounded"
                type="text"
                name="list_3"
                placeholder="3rd list .."
                value={welcomeForm.list_3}
                onChange={handleChange}
                required
                error={errors.list_3}
              />
              <InputField
                icon={<CiCircleList />}
                rounded="rounded"
                type="text"
                name="list_4"
                placeholder="4th list .."
                value={welcomeForm.list_4}
                onChange={handleChange}
                required
                error={errors.list_4}
              />
            </div>
          </section>
          </section>
          <section className=" space-y-6">
          <div>
         <MultipleImage imageNum={2} image={image} setImage={setImage} title="Welcome Section"/>
         </div>

          <div className=" font-jamjure">
            <p className="mb-4 font-[500] caption">Select Svg<span className="text-indigo-400 text-[1.3rem] ml-1">*</span></p>
            <InputField placeholder="Select a SVG "
              type="select"
              rounded="rounded md:w-[50%] "
              name="icon_options"
              options={["1st", "2nd", "3rd","4th"]}
              value={welcomeForm.icon_options}
              onChange={handleChange}
              error={errors.icon_options}
              required
            />
          </div>
          <section className=" flex justify-between gap-4 md:gap-8">
           
            <div className=" flex-1">
              <p className=" mb-4">Description {welcomeForm.icon_options} <span className="text-indigo-400 text-[1.3rem] ml-1">*</span></p>
              <InputField
                icon={<MdTitle />}
                rounded="rounded"
                type="text"
                name="icon_desc"
                placeholder="Description"
                value={welcomeForm.icon_desc}
                onChange={handleChange}
                required
                error={errors.icon_desc}
              />
            </div>
            <div>
              <p className=" mb-[18.5px]">Icon {welcomeForm.icon_options} <span className="text-indigo-400 text-[1.3rem] ml-1">*</span></p>
              <IconPicker
                value={value}
                onChange={(v) => setValue(v)}
              />
            </div>
          </section>
                  </section>

         

          
        </section>
    </form>
  );
};

export default WelcomeSectionForm;
