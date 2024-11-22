import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import CustomButton from "../reusables/CustomButton";
import InputField from "../reusables/InputField";
import { IoSave } from "react-icons/io5";
import { MdShortText, MdTitle } from "react-icons/md";
import SingleImage from "../reusables/SingleImage";

const AboutUsIntro = () => {
  const [aboutusIntro, setAboutusIntro] = useState({
    welcome_title: "",
    welcome_content: "",
    welcome_stat: "",
    stat_options: "",
    welcome_stat_details: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const capitalizeFirstLetter = (text) => {
      return text.charAt(0).toUpperCase() + text.slice(1);
    };

    if (
      name === "welcome_title" ||
      name === "welcome_content" ||
      name === "welcome_stat_details"
    ) {
      setAboutusIntro({
        ...aboutusIntro,
        [name]: capitalizeFirstLetter(value),
      });
    } else {
      setAboutusIntro({ ...aboutusIntro, [name]: value });
    }
  };

  const [errors, setErrors] = useState({});
  const validate = () => {
    const tempErrors = {};

    if (
      aboutusIntro.welcome_title.length < 5 ||
      aboutusIntro.welcome_title.length > 30
    ) {
      tempErrors.welcome_title = "Full Name must be between 5-30 characters.";
    }
    if (aboutusIntro.welcome_content.length < 100) {
      tempErrors.welcome_content = "Content must be at least 100 words.";
    }
    if (
      aboutusIntro.welcome_stat_details.length < 10 ||
      aboutusIntro.welcome_stat_details.length > 15
    ) {
      tempErrors.welcome_stat_details =
        " Text must be between 10-15 characters.";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const [image, setImage] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const welcomeDetails = {
        ...aboutusIntro,
        image: image[0] || null,
      };
      alert("New Banner Added");
      console.log("banner Data:", welcomeDetails);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
       <section className=" flex flex-col md:flex-row gap-5 justify-between mb-[2.5rem] sm:mb-[3rem] items-center">
        <h5 className=" subheading  ">About Us Intro</h5>
        <div className=" flex justify-end gap-5 items-center w-full md:w-[60%] ">
          <CustomButton type="submit" color="bg-gray-400" width=" w-[50%] md:w-[25%] " icon={<RxCross2/>}>CANCEL</CustomButton>
          <CustomButton type="submit" color="bg-green-500" width="w-[50%] md:w-[25%] " icon={<IoSave/>}>POST</CustomButton>
          </div>
          </section>
      <section className=" grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
        <section>
          <div>
            <p className=" mb-4 font-[500]">
              Title{" "}
              <span className="text-indigo-400 text-[1.3rem] ml-1">*</span>
            </p>
            <InputField
              rounded="rounded"
              icon={<MdTitle />}
              type="text"
              name="welcome_title"
              placeholder=" Title here..."
              value={aboutusIntro.welcome_title}
              onChange={handleChange}
              required
              error={errors.welcome_title}
            />
          </div>
          <div>
            <p className=" mb-4 font-[500] mt-[2rem]">
              Introduction{" "}
              <span className="text-indigo-400 text-[1.3rem] ml-1">*</span>
            </p>
            <InputField
              rounded="rounded"
              icon={<MdShortText />}
              type="textarea"
              name="welcome_content"
              placeholder="Brief Introduction"
              value={aboutusIntro.welcome_content}
              onChange={handleChange}
              required
              error={errors.welcome_content}
            />
          </div>
        </section>
        <div>
        <SingleImage height="h-[8.5rem]" image={image} setImage={setImage} title=""/>
        </div>
        <section>
          <div className=" md:w-[47%]">
            <p className=" mb-4 font-[500] ">
              Select Statistic{" "}
              <span className="text-indigo-400 text-[1.3rem] ml-1">*</span>
            </p>
            <InputField
              rounded="rounded"
              type="select"
              options={["1st", "2nd"]}
              name="stat_options"
              placeholder="Select a statistic..."
              value={aboutusIntro.stat_options}
              onChange={handleChange}
              error={errors.stat_options}
              required
            />
          </div>

          <section className=" flex md:flex-row flex-col gap-2 md:gap-8 ">
            <div className=" mt-6 flex-1">
              <p className=" mb-4 font-[500] ">
                Statistic {aboutusIntro.stat_options}{" "}
                <span className="text-indigo-400 text-[1.3rem] ml-1">*</span>
              </p>
              <InputField
                rounded="rounded"
                type="mumber"
                name="welcome_stat"
                placeholder="Write your numbers here..."
                value={aboutusIntro.welcome_stat}
                onChange={handleChange}
                error={errors.welcome_stat}
                required
              />
            </div>
            <div className=" mt-6 flex-1">
              <p className=" mb-4 font-[500] ">
                Statistic Details {aboutusIntro.stat_options}
                <span className="text-indigo-400 text-[1.3rem] ml-1">*</span>
              </p>
              <InputField
                rounded="rounded"
                type="text"
                name="welcome_stat_details"
                placeholder="Short Details..."
                value={aboutusIntro.welcome_stat_details}
                onChange={handleChange}
                error={errors.welcome_stat_details}
                required
              />
            </div>
          </section>
        </section>
      </section>
    </form>
  );
};

export default AboutUsIntro;
