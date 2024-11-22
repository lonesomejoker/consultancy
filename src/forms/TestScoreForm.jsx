import React, { useState } from "react";
import CustomButton from "../reusables/CustomButton";
import InputField from "../reusables/InputField";
import { IoSave } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { MdQuestionMark, MdScoreboard } from "react-icons/md";
import { testClasses } from "../utils/Elements";
import { GrScorecard } from "react-icons/gr";

const TestScoresForm = () => {
  const [testScores, setTestScores] = useState({
    ielts_score: "",
    pte_score: "",
    remarks:"",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const capitalizeFirstLetter = (text) => {
      return text.charAt(0).toUpperCase() + text.slice(1);
    };

    if (name === "ielts_score" || name === "pte_score") {
      setTestScores({
        ...testScores,
        [name]: capitalizeFirstLetter(value),
      });
    } else {
      setTestScores({ ...testScores, [name]: value });
    }
  };

  const [errors, setErrors] = useState({});
  const validate = () => {
    const tempErrors = {};

    if (
      testScores.ielts_score.length < 15 ||
      testScores.ielts_score.length > 50
    ) {
      tempErrors.ielts_score =
        "Title must be between 15-50 characters.";
    }
    if (
      testScores.pte_score.length < 15 ||
      testScores.pte_score.length > 40
    ) {
      tempErrors.pte_score =
        "Summary must be between 15-40 characters.";
    }
    if (
      testScores.remarks.length < 5 ||
      testScores.remarks.length > 20
    ) {
      tempErrors.remarks =
        "Summary must be between 5-20 characters.";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Services Updated ");
      console.log("Services Data:", testScores);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <section className=" flex flex-col md:flex-row gap-5 justify-between mb-[2.5rem] sm:mb-[3rem] items-center">
        <h5 className=" subheading  ">Test Scores </h5>
        <div className=" flex justify-end gap-5 items-center w-full md:w-[60%] ">
          <CustomButton type="submit" color="bg-gray-400" width=" w-[50%] md:w-[25%] " icon={<RxCross2/>}>CANCEL</CustomButton>
          <CustomButton type="submit" color="bg-green-500" width="w-[50%] md:w-[25%] " icon={<IoSave/>}>POST</CustomButton>
          </div>
          </section>
      <section className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div>
          <p className=" mb-4 font-[500] ">
           Ielts Scores {" "}
            <span className="text-indigo-400 text-[1.3rem] ml-1">*</span>
          </p>
          <InputField icon={<MdScoreboard/>}
            rounded="rounded"
            type="texta"
            name="ielts_score"
            placeholder="Score range..."
            value={testScores.ielts_score}
            onChange={handleChange}
            error={errors.ielts_score}
            required
          />
        </div>
        <div>
          <p className=" mb-4 font-[500]">
            PTE Scores <span className="text-indigo-400 text-[1.3rem] ml-1">*</span>
          </p>
          <InputField
            icon={<MdScoreboard />}
            rounded="rounded"
            type="text"
            name="pte_score"
            placeholder="Score range..."
            value={testScores.pte_score}
            onChange={handleChange}
            required
            error={errors.pte_score}
          />
        </div>
        <div>
          <p className=" mb-4 font-[500]">
            Remarks <span className="text-indigo-400 text-[1.3rem] ml-1">*</span>
          </p>
          <InputField
            icon={<GrScorecard />}
            rounded="rounded"
            type="text"
            name="remarks"
            placeholder="Remarks here..."
            value={testScores.remarks}
            onChange={handleChange}
            required
            error={errors.remarks}
          />
        </div>
      </section>
    </form>
  );
};

export default TestScoresForm;
