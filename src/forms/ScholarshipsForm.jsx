import React, { useCallback, useState } from "react";
import { RxCross1, RxCross2 } from "react-icons/rx";
import CustomButton from "../reusables/CustomButton";
import InputField from "../reusables/InputField";
import { IoSave } from "react-icons/io5";
import { useDropzone } from "react-dropzone";
import {  MdShortText } from "react-icons/md";
import { places } from "../utils/Elements";
import { LiaUniversitySolid } from "react-icons/lia";
import { GiGraduateCap } from "react-icons/gi";
import SingleImage from "../reusables/SingleImage";

const ScholarshipsForm = () => {
  const [scholarship, setScholarship] = useState({
    scholarship_name: "",
    scholarship_info: "",
    scholarship_options:"",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const capitalizeFirstLetter = (text) => {
      return text.charAt(0).toUpperCase() + text.slice(1);
    };

    if (name === "scholarship_name" || name === "fees" || name === "courses") {
      setScholarship({ ...scholarship, [name]: capitalizeFirstLetter(value) });
    } else {
      setScholarship({ ...scholarship, [name]: value });
    }
  };

  const [errors, setErrors] = useState({});
  const validate = () => {
    const tempErrors = {};
    if (
      scholarship.scholarship_name.length < 5 ||
      scholarship.scholarship_name.length > 40
    ) {
      tempErrors.scholarship_name =
        "Full Name must be between 5-25 characters.";
    }
    if (
      scholarship.scholarship_info.length < 5 ||
      scholarship.scholarship_info.length > 15
    ) {
      tempErrors.scholarship_info = " Text must be between 5-15 characters.";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const [scholarshipImage, setScholarshipImage] = useState([]);

  const onDrop = useCallback(
    (acceptedFiles) => {
      if (scholarshipImage.length + acceptedFiles.length > 1) {
        window.alert("You can only upload one scholarshipImage.");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setScholarshipImage([base64String]);
      };

      if (acceptedFiles[0]) {
        reader.readAsDataURL(acceptedFiles[0]);
      }
    },
    [scholarshipImage]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    "image/jpeg": [],
    "image/png": [],
    "image/gif": [],
    multiple: false,
  });

  const handleDeleteImage = (index) => {
    setScholarshipImage((prevImages) =>
      prevImages.filter((_, idx) => idx !== index)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const newUniversity = {
        ...scholarship,
        scholarshipImage: scholarshipImage[0] || null,
      };
      alert("New University Added ");
      console.log("University Data:", newUniversity);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <section className=" flex flex-col md:flex-row gap-5 justify-between mb-[2.5rem] sm:mb-[3rem] items-center">
        <h5 className=" subheading  ">Scholarship Details </h5>
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
          name="scholarship_options"
          options={places.map((item) => item.name)}
          value={scholarship.scholarship_options}
          onChange={handleChange}
          error={errors.scholarship_options}
          required
        />
      </div>
      <section className=" grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
        <section>
          <div className=" flex justify-between gap-8">
            <div className=" flex-1">
              <p className=" mb-4 font-[500]">
                Scholarship Name{" "}
                <span className="text-indigo-400 text-[1.3rem] ml-1">*</span>
              </p>
              <InputField
                icon={<GiGraduateCap />}
                rounded="rounded"
                type="text"
                name="scholarship_name"
                placeholder="Scholarship Name"
                value={scholarship.scholarship_name}
                onChange={handleChange}
                required
                error={errors.scholarship_name}
              />
            </div>
          </div>

          <div className=" mt-6">
            <p className=" mb-4 font-[500]">
              Scholarship Details{" "}
              <span className="text-indigo-400 text-[1.3rem] ml-1">*</span>
            </p>
            <InputField
              rounded="rounded"
              icon={<MdShortText />}
              type="textarea"
              name="scholarship_info"
              placeholder="Course Details..."
              value={scholarship.scholarship_info}
              onChange={handleChange}
              required
              error={errors.scholarship_info}
            />
          </div>
        </section>

      <div>
        <SingleImage image={scholarshipImage} setImage={setScholarshipImage} height="h-[7rem] h-[8.5rem]" title="Scholarship" />
      </div> 
      </section>
    </form>
  );
};

export default ScholarshipsForm;
