import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import CustomButton from "../reusables/CustomButton";
import InputField from "../reusables/InputField";
import { IoSave } from "react-icons/io5";
import StarRating from "../reusables/StarRating";
import SingleImage from "../reusables/SingleImage";

const SuccessStoriesForm = () => {
  const [rating, setRating] = useState(""); // State to store the selected rating
  const [successStories, setSuccessStories] = useState({
    teller_name: "",
    teller_location: "",
    story: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const capitalizeFirstLetter = (text) => {
      return text.charAt(0).toUpperCase() + text.slice(1);
    };

    if (
      name === "teller_location" ||
      name === "teller_name" ||
      name === "teller_name"
    ) {
      setSuccessStories({
        ...successStories,
        [name]: capitalizeFirstLetter(value),
      });
    } else {
      setSuccessStories({ ...successStories, [name]: value });
    }
  };

  const [errors, setErrors] = useState({});
  const validate = () => {
    const tempErrors = {};

    if (
      successStories.teller_location.length < 5 ||
      successStories.teller_location.length > 40
    ) {
      tempErrors.teller_location = "Full Name must be between 5-25 characters.";
    }
    if (successStories.story.length < 30) {
      tempErrors.story = "story must be at least 30 words long.";
    }
    if (
      successStories.teller_name.length < 5 ||
      successStories.teller_name.length > 25
    ) {
      tempErrors.teller_name = " Text must be between 5-25 characters.";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const [image, setImage] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const newStory = {
        id: new Date().getTime(),
        ...successStories,
        profile_image: image[0] || null,
        star_rating: rating,
      };
      alert("New Banner Added");
      console.log("banner Data:", newStory);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
       <section className=" flex flex-col md:flex-row gap-5 justify-between mb-[2.5rem] sm:mb-[3rem] items-center">
        <h5 className=" subheading  ">Success Stories </h5>
        <div className=" flex justify-end gap-5 items-center w-full md:w-[60%] ">
          <CustomButton type="submit" color="bg-gray-400" width=" w-[50%] md:w-[25%] " icon={<RxCross2/>}>CANCEL</CustomButton>
          <CustomButton type="submit" color="bg-green-500" width="w-[50%] md:w-[25%] " icon={<IoSave/>}>POST</CustomButton>
          </div>
          </section>
      <section className=" grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <section className=" space-y-6">
          <div>
            <p className=" mb-4 font-[500]">
              Username{" "}
              <span className="text-indigo-400 text-[1.3rem] ml-1">*</span>
            </p>
            <InputField
              rounded="rounded"
              type="text"
              name="teller_name"
              placeholder="Destination"
              value={successStories.teller_name}
              onChange={handleChange}
              required
              error={errors.teller_name}
            />
          </div>

          <div className=" flex md:flex-row flex-col justify-between gap-8">
            <div className=" flex-1">
              <p className=" mb-4 font-[500]">
                Destination{" "}
                <span className="text-indigo-400 text-[1.3rem] ml-1">*</span>
              </p>
              <InputField
                rounded="rounded"
                type="text"
                name="teller_location"
                placeholder="Destination"
                value={successStories.teller_location}
                onChange={handleChange}
                required
                error={errors.teller_location}
              />
            </div>
            <div className=" flex-1">
              <p className=" mb-4 font-[500]">
                Rating{" "}
                <span className="text-indigo-400 text-[1.3rem] ml-1">*</span>
              </p>
              <StarRating rating={rating} setRating={setRating} />
            </div>
          </div>

          <div className=" mt-6">
            <p className=" mb-4 font-[500] ">
              Story{" "}
              <span className="text-indigo-400 text-[1.3rem] ml-1">*</span>
            </p>
            <InputField
              rounded="rounded"
              type="textarea"
              name="story"
              placeholder="Write story here..."
              value={successStories.story}
              onChange={handleChange}
              error={errors.story}
              required
            />
          </div>
        </section>
        <div>
        <SingleImage title="Profile" image={image} setImage={setImage} height="h-[9rem]" />
        </div>
      </section>
    </form>
  );
};

export default SuccessStoriesForm;
