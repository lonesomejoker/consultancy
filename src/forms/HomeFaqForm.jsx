import React, { useState } from "react";
import CustomButton from "../reusables/CustomButton";
import InputField from "../reusables/InputField";
import { IoSave } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { MdQuestionMark } from "react-icons/md";

const HomeFaqForm = () => {
  const [homeFaq, setHomeFaq] = useState({
    question: "",
    answer: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const capitalizeFirstLetter = (text) => {
      return text.charAt(0).toUpperCase() + text.slice(1);
    };
    
    if (
      name === "question" ||
      name === "answer" 
     
    ) {
      setHomeFaq({ ...homeFaq, [name]: capitalizeFirstLetter(value) });
    } else {
      setHomeFaq({ ...homeFaq, [name]: value });
    }
  };

  const [errors, setErrors] = useState({});
  const validate = () => {
    const tempErrors = {};

    if (homeFaq.question.length < 20 || homeFaq.question.length > 60) {
      tempErrors.question = "Question must be between 20-60 characters.";
    }
    if (homeFaq.answer.length < 15 ) {
      tempErrors.answer = "answer must be at least 15 characters.";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("New FAQ Added");
      console.log("Faq Data:", homeFaq);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <section className=" flex flex-col md:flex-row gap-5 justify-between mb-[2.5rem] sm:mb-[3rem] items-center">
        <h5 className=" subheading  ">Home FAQ's</h5>
        <div className=" flex justify-end gap-5 items-center w-full md:w-[60%] ">
          <CustomButton type="submit" color="bg-gray-400" width=" w-[50%] md:w-[25%] " icon={<RxCross2/>}>CANCEL</CustomButton>
          <CustomButton type="submit" color="bg-green-500" width="w-[50%] md:w-[25%] " icon={<IoSave/>}>POST</CustomButton>
          </div>
          </section>
        <section className=" space-y-7 md:w-[50%]">
        <div>
          <p className=" mb-4 font-[500]">Question *</p>
          <InputField icon={<MdQuestionMark/>} rounded="rounded"
            type="text"
            name="question"
            placeholder="Question here..."
            value={homeFaq.question}
            onChange={handleChange}
            required
            error={errors.question}
          />
          </div>

        <div>
          <p className=" mb-4 font-[500] ">Answer *</p>
          <InputField rounded="rounded"
            type="textarea"
            name="answer"
            placeholder="Write answer here..."
            value={homeFaq.answer}
            onChange={handleChange}
            error={errors.answer}
            required
          />
        </div>
        </section>
    </form>
  );
};

export default HomeFaqForm;
