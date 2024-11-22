import React, { useState } from "react";
import CustomButton from "../reusables/CustomButton";
import InputField from "../reusables/InputField";
import { IoSave } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { MdQuestionMark } from "react-icons/md";
import { places } from "../utils/Elements";

const RequirementsForm = () => {
  const [reqFaq, setReqFaq] = useState({
    req_question: "",
    req_answer: "",
    req_options: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const capitalizeFirstLetter = (text) => {
      return text.charAt(0).toUpperCase() + text.slice(1);
    };

    if (name === "req_question" || name === "req_answer") {
      setReqFaq({ ...reqFaq, [name]: capitalizeFirstLetter(value) });
    } else {
      setReqFaq({ ...reqFaq, [name]: value });
    }
  };

  const [errors, setErrors] = useState({});
  const validate = () => {
    const tempErrors = {};

    if (reqFaq.req_question.length < 20 || reqFaq.req_question.length > 60) {
      tempErrors.req_question = "Question must be between 20-60 characters.";
    }
    if (reqFaq.req_answer.length < 30) {
      tempErrors.req_answer = "Answer must be at least 30 characters.";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("New FAQ Added");
      console.log("Faq Data:", reqFaq);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
     <section className=" flex flex-col md:flex-row gap-5 justify-between mb-[2.5rem] sm:mb-[3rem] items-center">
        <h5 className=" subheading  ">Country's Requirements</h5>
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
          value={reqFaq.req_options}
          onChange={handleChange}
          error={errors.req_options}
          required
        />
      </div>
      <section className=" space-y-7 md:w-[50%]">
        <div>
          <p className=" mb-4 font-[500]">
            Question{" "}
            <span className="text-indigo-400 text-[1.3rem] ml-1">*</span>
          </p>
          <InputField
            icon={<MdQuestionMark />}
            rounded="rounded"
            type="text"
            name="question"
            placeholder="Question here..."
            value={reqFaq.req_question}
            onChange={handleChange}
            required
            error={errors.req_question}
          />
        </div>

        <div>
          <p className=" mb-4 font-[500] ">
            Answer <span className="text-indigo-400 text-[1.3rem] ml-1">*</span>
          </p>
          <InputField
            rounded="rounded"
            type="textarea"
            name="answer"
            placeholder="Write answer here..."
            value={reqFaq.req_answer}
            onChange={handleChange}
            error={errors.req_answer}
            required
          />
        </div>
      </section>
    </form>
  );
};

export default RequirementsForm;
