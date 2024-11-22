import React, { useCallback, useState } from "react";
import { RxCross1, RxCross2 } from "react-icons/rx";
import CustomButton from "../reusables/CustomButton";
import InputField from "../reusables/InputField";
import { IoSave } from "react-icons/io5";
import { useDropzone } from "react-dropzone";
import { MdShortText, MdTitle } from "react-icons/md";
import SingleImage from "../reusables/SingleImage";

const BannerForm = () => {
  const [bannerForm, setBannerForm] = useState({
    title: "",
    content: "",
    button_text:"",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const capitalizeFirstLetter = (text) => {
      return text.charAt(0).toUpperCase() + text.slice(1);
    };
    
    if (
      name === "title" ||
      name === "content" ||
      name ==="button_text"
     
    ) {
      setBannerForm({ ...bannerForm, [name]: capitalizeFirstLetter(value) });
    } else {
      setBannerForm({ ...bannerForm, [name]: value });
    }
  };

  const [errors, setErrors] = useState({});
  const validate = () => {
    const tempErrors = {};

    if (bannerForm.title.length < 5 || bannerForm.title.length > 40) {
      tempErrors.title = "Full Name must be between 5-25 characters.";
    }
    if (bannerForm.content.length < 15 ) {
      tempErrors.content = "Content must be at least 15 characters.";
    }
    if (bannerForm.button_text.length < 5 || bannerForm.button_text.length > 15 ) {
      tempErrors.button_text = " Text must be between 5-15 characters.";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const [image, setImage] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const newBanner = {
        id: new Date().getTime(),
        ...bannerForm,
        banner_image: image[0] || null,
      };
      alert("New Banner Added");
      console.log("banner Data:", newBanner);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <section className=" flex flex-col md:flex-row gap-5 justify-between mb-[2.5rem] sm:mb-[3rem] items-center">
        <h5 className=" subheading  ">Landing Banner</h5>
        <div className=" flex justify-end gap-5 items-center w-full md:w-[60%] ">
          <CustomButton type="submit" color="bg-gray-400" width=" w-[50%] md:w-[25%] " icon={<RxCross2/>}>CANCEL</CustomButton>
          <CustomButton type="submit" color="bg-green-500" width="w-[50%] md:w-[25%] " icon={<IoSave/>}>POST</CustomButton>
          </div>
          </section>
        <section className=" grid grid-cols-5 gap-8 md:gap-14">
        <section className=" col-span-5 md:col-span-3">
        <div className=" flex justify-between md:flex-row flex-col gap-8">
        <div className=" flex-1">
          <p className=" mb-4 font-[500]">Title <span className="text-indigo-400 text-[1.3rem] ml-1">*</span></p>
          <InputField rounded="rounded" icon={<MdTitle/>}
            type="text"
            name="title"
            placeholder="Banner Title"
            value={bannerForm.title}
            onChange={handleChange}
            required
            error={errors.title}
          />
          </div>
          <div className=" flex-1">
          <p className=" mb-4 font-[500]">Button Text <span className="text-indigo-400 text-[1.3rem] ml-1">*</span></p>
          <InputField rounded="rounded" icon={<MdShortText/>}
            type="text"
            name="button_text"
            placeholder="Button Text Here.."
            value={bannerForm.button_text}
            onChange={handleChange}
            required
            error={errors.button_text}
          />
          </div>
          </div>
        

        <div className=" mt-6">
          <p className=" mb-4 font-[500] ">Content <span className="text-indigo-400 text-[1.3rem] ml-1">*</span></p>
          <InputField rounded="rounded"
            type="textarea"
            name="content"
            placeholder="Write your content here..."
            value={bannerForm.content}
            onChange={handleChange}
            error={errors.content}
            required
          />
        </div>
        </section>
        
          <div className=" col-span-5 md:col-span-2">
          <SingleImage title="Banner" image={image} setImage={setImage} height="h-[8.5rem]" />
          </div>
          </section>
     
    </form>
  );
};

export default BannerForm;
