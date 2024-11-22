import React, { useCallback, useState } from "react";
import { RxCross1, RxCross2 } from "react-icons/rx";
import CustomButton from "../reusables/CustomButton";
import InputField from "../reusables/InputField";
import { IoSave } from "react-icons/io5";
import { useDropzone } from "react-dropzone";
import { MdAttachMoney, MdShortText, MdTitle } from "react-icons/md";
import { places } from "../utils/Elements";
import { LiaUniversitySolid } from "react-icons/lia";
import SingleImage from "../reusables/SingleImage";

const University_Form = () => {
  const [university, setUniversity] = useState({
    university_name: "",
    fees: "",
    courses: "",
    university_options:"Australia",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const capitalizeFirstLetter = (text) => {
      return text.charAt(0).toUpperCase() + text.slice(1);
    };

    if (name === "university_name" || name === "fees" || name === "courses") {
      setUniversity({ ...university, [name]: capitalizeFirstLetter(value) });
    } else {
      setUniversity({ ...university, [name]: value });
    }
  };

  const [errors, setErrors] = useState({});
  const validate = () => {
    const tempErrors = {};

    if (
      university.university_name.length < 5 ||
      university.university_name.length > 40
    ) {
      tempErrors.university_name = "Full Name must be between 5-25 characters.";
    }
    if (university.fees.length < 15) {
      tempErrors.fees = "fees must be at least 15 characters.";
    }
    if (university.courses.length < 5 || university.courses.length > 15) {
      tempErrors.courses = " Text must be between 5-15 characters.";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const [universityImage, setUniversityImage] = useState([]);

  const onDrop = useCallback(
    (acceptedFiles) => {
      if (universityImage.length + acceptedFiles.length > 1) {
        window.alert("You can only upload one universityImage.");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setUniversityImage([base64String]);
      };

      if (acceptedFiles[0]) {
        reader.readAsDataURL(acceptedFiles[0]);
      }
    },
    [universityImage]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    "image/jpeg": [],
    "image/png": [],
    "image/gif": [],
    multiple: false,
  });

  const handleDeleteImage = (index) => {
    setUniversityImage((prevImages) => prevImages.filter((_, idx) => idx !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const newUniversity = {
        ...university,
        universityImage: universityImage[0] || null,
      };
      alert("New University Added ");
      console.log("University Data:", newUniversity);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <section className=" flex flex-col md:flex-row gap-5 justify-between mb-[2.5rem] sm:mb-[3rem] items-center">
        <h5 className=" subheading  ">University Details </h5>
        <div className=" flex justify-end gap-5 items-center w-full md:w-[60%] ">
          <CustomButton type="submit" color="bg-gray-400" width=" w-[50%] md:w-[25%] " icon={<RxCross2/>}>CANCEL</CustomButton>
          <CustomButton type="submit" color="bg-green-500" width="w-[50%] md:w-[25%] " icon={<IoSave/>}>POST</CustomButton>
          </div>
          </section>
      <div className=" mb-[2.5rem] md:mb-[3rem]">
            <p className="mb-4 font-[500] caption">Select Country <span className="text-indigo-400 text-[1.3rem] ml-1">*</span></p>
            <InputField
              type="select"
              rounded="rounded md:w-[27.5%] "
              name="university_options"
              options={places.map((item)=>item.name)}
              value={university.university_options}
              onChange={handleChange}
              error={errors.university_options}
              required
            />
            </div>
      <section className=" grid grid-cols-5 gap-8 md:gap-14">
        <section className="col-span-5 md:col-span-3">
          <div className=" flex justify-between flex-col lg:flex-row gap-8">
            <div className=" flex-1">
              <p className=" mb-4 font-[500]">University Name <span className="text-indigo-400 text-[1.3rem] ml-1">*</span></p>
              <InputField icon={<LiaUniversitySolid/>}
                rounded="rounded"
                type="text"
                name="title"
                placeholder="University Name"
                value={university.title}
                onChange={handleChange}
                required
                error={errors.title}
              />
            </div>
            <div className=" flex-1">
              <p className=" mb-4 font-[500] ">Fees <span className="text-indigo-400 text-[1.3rem] ml-1">*</span></p>
              <InputField icon={<MdAttachMoney/>}
                rounded="rounded"
                type="text"
                name="fees"
                placeholder="Fees details here..."
                value={university.fees}
                onChange={handleChange}
                error={errors.fees}
                required
              />
            </div>
          </div>

          <div className=" mt-6">
            <p className=" mb-4 font-[500]">Course Details <span className="text-indigo-400 text-[1.3rem] ml-1">*</span></p>
            <InputField 
              rounded="rounded"
              icon={<MdShortText />}
              type="textarea"
              name="courses"
              placeholder="Course Details..."
              value={university.courses}
              onChange={handleChange}
              required
              error={errors.courses}
            />
          </div>
        </section>
        <div className="col-span-5 md:col-span-2 ">
        <SingleImage image={universityImage} setImage={setUniversityImage} height="h-7rem md:h-[8.5rem]" title="University"/>
        </div>
      </section>
    </form>
  );
};

export default University_Form;
