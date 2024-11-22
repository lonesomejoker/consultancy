import React, { useCallback, useState } from "react";
import { RxCross1, RxCross2 } from "react-icons/rx";
import CustomButton from "../reusables/CustomButton";
import InputField from "../reusables/InputField";
import { IoSave } from "react-icons/io5";
import { useDropzone } from "react-dropzone";
import { MdTitle } from "react-icons/md";
import { TbLocationPin } from "react-icons/tb";
import SingleImage from "../reusables/SingleImage";

const CountryInfoForm = () => {
  const [countryInfoForm, setCountryInfoForm] = useState({
    country_name: "",
    country_summary: "",
    country_intro:"",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const capitalizeFirstLetter = (text) => {
      return text.charAt(0).toUpperCase() + text.slice(1);
    };
    
    if (
      name === "country_name" ||
      name === "country_summary"
    ) {
      setCountryInfoForm({ ...countryInfoForm, [name]: capitalizeFirstLetter(value) });
    } else {
      setCountryInfoForm({ ...countryInfoForm, [name]: value });
    }
  };

  const [errors, setErrors] = useState({});
  const validate = () => {
    const tempErrors = {};

    if (countryInfoForm.country_name.length < 5 || countryInfoForm.country_name.length > 20) {
      tempErrors.country_name = "Full Name must be between 5-20 characters.";
    }
    if (countryInfoForm.country_summary.length < 20 || countryInfoForm.country_summary.length > 80 ) {
      tempErrors.country_summary = "Summary must be between 20-80 words.";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const [countryImage, setCountryImage] = useState([]);

  const onDrop = useCallback(
    (acceptedFiles) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setCountryImage([base64String]);
      };

      if (acceptedFiles[0]) {
        reader.readAsDataURL(acceptedFiles[0]);
      }
    },
    [countryImage]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    'image/jpeg': [],
    'image/png': [],
    'image/gif': [],
    multiple: false,
  });

  const handleDeleteImage = (index) => {
    setCountryImage((prevImages) => prevImages.filter((_, idx) => idx !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const newCountry = {
        ...countryInfoForm,
        image: countryImage[0] || null,
      };
      alert("New Banner Added");
      console.log("banner Data:", newCountry);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <section className=" flex flex-col md:flex-row gap-5 justify-between mb-[2.5rem] sm:mb-[3rem] items-center">
        <h5 className=" subheading  ">Country Details </h5>
        <div className=" flex justify-end gap-5 items-center w-full md:w-[60%] ">
          <CustomButton type="submit" color="bg-gray-400" width=" w-[50%] md:w-[25%] " icon={<RxCross2/>}>CANCEL</CustomButton>
          <CustomButton type="submit" color="bg-green-500" width="w-[50%] md:w-[25%] " icon={<IoSave/>}>POST</CustomButton>
          </div>
          </section>
        <section className=" grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <section>
        <div>
          <p className=" mb-4 font-[500]">Country Name <span className="text-indigo-400 text-[1.3rem] ml-1">*</span></p>
          <InputField rounded="rounded" icon={<TbLocationPin/>}
            type="text"
            name="country_name"
            placeholder="Country Name..."
            value={countryInfoForm.country_name}
            onChange={handleChange}
            required
            error={errors.country_name}
          />
          </div>
        
        <div className=" mt-[2rem]">
          <p className=" mb-4 font-[500] ">Country Summary <span className="text-indigo-400 text-[1.3rem] ml-1">*</span></p>
          <InputField rounded="rounded"
            type="textarea"
            name="country_summary"
            placeholder="Write country summary here..."
            value={countryInfoForm.country_summary}
            onChange={handleChange}
            error={errors.country_summary}
            required
          />
        </div>
        <div className=" mt-[2rem]">
          <p className=" mb-4 font-[500] ">Country Introduction <span className="text-indigo-400 text-[1.3rem] ml-1">*</span></p>
          <InputField rounded="rounded"
            type="textarea"
            name="country_intro"
            placeholder="Write country introduction here..."
            value={countryInfoForm.country_intro}
            onChange={handleChange}
            error={errors.country_intro}
            required
          />
        </div>
        </section>
         <div>
          <SingleImage image={countryImage} setImage={setCountryImage} height="h-[7rem] md:h-[8.5rem]" title="Country"/>
         </div>
          </section>
     
    </form>
  );
};

export default CountryInfoForm;
