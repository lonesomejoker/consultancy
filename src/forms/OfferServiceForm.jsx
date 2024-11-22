import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import CustomButton from "../reusables/CustomButton";
import InputField from "../reusables/InputField";
import { IoSave } from "react-icons/io5";
import { MdShortText } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import SingleImage from "../reusables/SingleImage";

const OfferServiceForm = () => {
  const [offerService, setOfferService] = useState({
    offer_heading: "",
    offer_options: "",
    offer_list_title: "",
    offer_list_info:"",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const capitalizeFirstLetter = (text) => {
      return text.charAt(0).toUpperCase() + text.slice(1);
    };

    if (name === "scholarship_name" || name === "fees" || name === "courses") {
      setOfferService({
        ...offerService,
        [name]: capitalizeFirstLetter(value),
      });
    } else {
      setOfferService({ ...offerService, [name]: value });
    }
  };

  const [errors, setErrors] = useState({});
  const validate = () => {
    const tempErrors = {};
    if (
      offerService.offer_heading.length < 5 ||
      offerService.offer_heading.length > 40
    ) {
      tempErrors.offer_heading = "Full Name must be between 5-25 characters.";
    }
    if (
      offerService.offer_list_title.length < 5 ||
      offerService.offer_list_title.length > 25
    ) {
      tempErrors.offer_list_title = " Text must be between 5-25 characters.";
    }
    if (
      offerService.offer_list_info.length < 15 ||
      offerService.offer_list_info.length > 35
    ) {
      tempErrors.offer_list_info = " Text must be between 15-35 characters.";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const [offerImage, setOfferImage] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const newUniversity = {
        ...offerService,
        offer_Image: offerImage[0] || null,
      };
      alert("New University Added ");
      console.log("University Data:", newUniversity);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <section className=" flex flex-col md:flex-row gap-5 justify-between mb-[2.5rem] sm:mb-[3rem] items-center">
        <h5 className=" subheading  ">Why Choose us </h5>
        <div className=" flex justify-end gap-5 items-center w-full md:w-[60%] ">
          <CustomButton type="submit" color="bg-gray-400" width=" w-[50%] md:w-[25%] " icon={<RxCross2/>}>CANCEL</CustomButton>
          <CustomButton type="submit" color="bg-green-500" width="w-[50%] md:w-[25%] " icon={<IoSave/>}>POST</CustomButton>
          </div>
          </section>

      <section className=" grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
        <section className=" space-y-6">
          <div>
            <p className=" mb-4 font-[500]">
              Heading{" "}
              <span className="text-indigo-400 text-[1.3rem] ml-1">*</span>
            </p>
            <InputField
              icon={<GiGraduateCap />}
              rounded="rounded"
              type="text"
              name="offer_heading"
              placeholder="Why choose us heading..."
              value={offerService.offer_heading}
              onChange={handleChange}
              required
              error={errors.offer_heading}
            />
          </div>
          <div>
            <SingleImage
              image={offerImage}
              setImage={setOfferImage}
              height="h-[7rem] md:h-[8.5rem]"
            />
          </div>
        </section>
        <section className=" space-y-6">
          <div>
            <p className="mb-4 font-[500] caption">
              Select List{" "}
              <span className="text-indigo-400 text-[1.3rem] ml-1">*</span>
            </p>
            <InputField
              type="select"
              rounded="rounded md:w-[27.5%] "
              name="offer_options"
              options={["1st", "2nd", "3rd", "4th"]}
              value={offerService.offer_options}
              onChange={handleChange}
              error={errors.offer_options}
              required
            />
          </div>
          <div>
            <p className=" mb-4 font-[500]">
              List {offerService.offer_options} Title{" "}
              <span className="text-indigo-400 text-[1.3rem] ml-1">*</span>
            </p>
            <InputField
              rounded="rounded"
              icon={<MdShortText />}
              type="text"
              name="offer_list_title"
              placeholder="Course Details..."
              value={offerService.offer_list_title}
              onChange={handleChange}
              required
              error={errors.offer_list_title}
            />
          </div>
          <div>
            <p className=" mb-4 font-[500]">
              List {offerService.offer_options} Info{" "}
              <span className="text-indigo-400 text-[1.3rem] ml-1">*</span>
            </p>
            <InputField
              rounded="rounded"
              icon={<MdShortText />}
              type="textarea"
              name="offer_list_info"
              placeholder="Course Details..."
              value={offerService.offer_list_info}
              onChange={handleChange}
              required
              error={errors.offer_list_info}
            />
          </div>
        </section>
      </section>
    </form>
  );
};

export default OfferServiceForm;
