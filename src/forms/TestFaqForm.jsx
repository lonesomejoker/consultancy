import React, { useState } from "react";
import CustomButton from "../reusables/CustomButton";
import InputField from "../reusables/InputField";
import { IoSave } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { MdQuestionMark } from "react-icons/md";
import { testClasses } from "../utils/Elements";

const TestFaqForm = () => {
  const [testFaqForm, settestFaqForm] = useState({
    testFaq_ques: "",
    testFaq_ans: "",
    testFaq_options: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const capitalizeFirstLetter = (text) => {
      return text.charAt(0).toUpperCase() + text.slice(1);
    };

    if (name === "testFaq_ques" || name === "testFaq_ans") {
      settestFaqForm({
        ...testFaqForm,
        [name]: capitalizeFirstLetter(value),
      });
    } else {
      settestFaqForm({ ...testFaqForm, [name]: value });
    }
  };

  const [errors, setErrors] = useState({});
  const validate = () => {
    const tempErrors = {};

    if (
      testFaqForm.testFaq_ques.length < 15 ||
      testFaqForm.testFaq_ques.length > 50
    ) {
      tempErrors.testFaq_ques =
        "Title must be between 15-50 characters.";
    }
    if (
      testFaqForm.testFaq_ans.length < 15 ||
      testFaqForm.testFaq_ans.length > 40
    ) {
      tempErrors.testFaq_ans =
        "Summary must be between 15-40 characters.";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Services Updated ");
      console.log("Services Data:", testFaqForm);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <section className=" flex flex-col md:flex-row gap-5 justify-between mb-[2.5rem] sm:mb-[3rem] items-center">
        <h5 className=" subheading  ">Test Requirements </h5>
        <div className=" flex justify-end gap-5 items-center w-full md:w-[60%] ">
          <CustomButton type="submit" color="bg-gray-400" width=" w-[50%] md:w-[25%] " icon={<RxCross2/>}>CANCEL</CustomButton>
          <CustomButton type="submit" color="bg-green-500" width="w-[50%] md:w-[25%] " icon={<IoSave/>}>POST</CustomButton>
          </div>
          </section>
      <section className=" space-y-6 md:w-[50%]">
        <div>
          <p className="mb-4 font-[500]">
            Select Test Class{" "}
            <span className="text-indigo-400 text-[1.3rem] ml-1">*</span>
          </p>
          <InputField
            type="select"
            rounded="rounded md:w-[50%] "
            name="testFaq_options"
            options={testClasses.map((item) => item.title)}
            value={testFaqForm.testFaq_options}
            onChange={handleChange}
            error={errors.testFaq_options}
            required
          />
        </div>
        <div>
          <p className=" mb-4 font-[500] ">
            Question{" "}
            <span className="text-indigo-400 text-[1.3rem] ml-1">*</span>
          </p>
          <InputField
            rounded="rounded"
            type="textarea"
            name="testFaq_ques"
            placeholder="Question here..."
            value={testFaqForm.testFaq_ques}
            onChange={handleChange}
            error={errors.testFaq_ques}
            required
          />
        </div>
        <div>
          <p className=" mb-4 font-[500]">
            Answer <span className="text-indigo-400 text-[1.3rem] ml-1">*</span>
          </p>
          <InputField
            icon={<MdQuestionMark />}
            rounded="rounded"
            type="textarea"
            name="testFaq_ans"
            placeholder="Answer here..."
            value={testFaqForm.testFaq_ans}
            onChange={handleChange}
            required
            error={errors.testFaq_ans}
          />
        </div>
      </section>
    </form>
  );
};

export default TestFaqForm;
