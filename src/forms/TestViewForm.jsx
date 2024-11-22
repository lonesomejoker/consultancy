import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import CustomButton from "../reusables/CustomButton";
import InputField from "../reusables/InputField";
import { IoSave } from "react-icons/io5";
import SingleImage from "../reusables/SingleImage";

const TestViewForm = () => {
  const [testOverview, setTestOverview] = useState({
    test_title: "",
    test_content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const capitalizeFirstLetter = (text) => {
      return text.charAt(0).toUpperCase() + text.slice(1);
    };

    if (name === "test_title" || name === "test_content") {
      setTestOverview({
        ...testOverview,
        [name]: capitalizeFirstLetter(value),
      });
    } else {
      setTestOverview({ ...testOverview, [name]: value });
    }
  };

  const [errors, setErrors] = useState({});
  const validate = () => {
    const tempErrors = {};

    if (
      testOverview.test_title.length < 5 ||
      testOverview.test_title.length > 40
    ) {
      tempErrors.test_title = "Full Name must be between 5-25 characters.";
    }
    if (testOverview.test_content.length < 15) {
      tempErrors.test_content = "test_content must be at least 15 characters.";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const [image, setImage] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const newTest = {
        id: new Date().getTime(),
        ...testOverview,
        test_image: image[0] || null,
      };
      alert("New Banner Added");
      console.log("banner Data:", newTest);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <section className=" flex flex-col md:flex-row gap-5 justify-between mb-[2.5rem] sm:mb-[3rem] items-center">
        <h5 className=" subheading  ">Test Prep Overview </h5>
        <div className=" flex justify-end gap-5 items-center w-full md:w-[60%] ">
          <CustomButton type="submit" color="bg-gray-400" width=" w-[50%] md:w-[25%] " icon={<RxCross2/>}>CANCEL</CustomButton>
          <CustomButton type="submit" color="bg-green-500" width="w-[50%] md:w-[25%] " icon={<IoSave/>}>POST</CustomButton>
          </div>
          </section>
      <section className=" grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
        <section>
          <div>
            <p className=" mb-4 font-[500]">
              Test Name{" "}
              <span className="text-indigo-400 text-[1.3rem] ml-1">*</span>
            </p>
            <InputField
              rounded="rounded"
              type="text"
              name="test_title"
              placeholder="Test name"
              value={testOverview.test_title}
              onChange={handleChange}
              required
              error={errors.test_title}
            />
          </div>

          <div className=" mt-6">
            <p className=" mb-4 font-[500] ">
              Test Description{" "}
              <span className="text-indigo-400 text-[1.3rem] ml-1">*</span>
            </p>
            <InputField
              rounded="rounded"
              type="textarea"
              name="test_content"
              placeholder="Write description here..."
              value={testOverview.test_content}
              onChange={handleChange}
              error={errors.test_content}
              required
            />
          </div>
        </section>

        <div>
          <SingleImage
            title="Test"
            image={image}
            setImage={setImage}
            height="h-[9rem]"
          />
        </div>
      </section>
    </form>
  );
};

export default TestViewForm;
