import React, { useState } from "react";
import InputField from "../reusables/InputField";
import { MdOutlineTitle } from "react-icons/md";
import CustomButton from "../reusables/CustomButton";
import { RxCross2 } from "react-icons/rx";
import { IoSave } from "react-icons/io5";
import { PiListNumbers } from "react-icons/pi";
import SingleImage from "../reusables/SingleImage";


const SummaryForm = () => {
  const [summaryForm, setSummaryForm] = useState({
    title_1: "",
    description_1: "",
    stats_1: "",
    content_1: "",
    statistic_options: "",
    summary_options: "",
  });
  const [value, setValue] = useState("FaUsers");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSummaryForm({ ...summaryForm, [name]: value });
  };

  const validate = () => {
    const tempErrors = {};

    if (
      summaryForm.content_1.length < 20 ||
      summaryForm.content_1.length > 60
    ) {
      tempErrors.content_1 = "Content must be between 20-60 characters.";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };
  const [image,setImage]=useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const newSummary={
        ...summaryForm,
        summaryImage:image[0]||null,
        summary_icon:value
      }
      alert("Summary Section Updated");
      console.log("Summary Data:", newSummary);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <section className=" flex flex-col md:flex-row gap-5 justify-between mb-[2.5rem] sm:mb-[3rem] items-center">
        <h5 className=" subheading  ">Summary Section</h5>
        <div className=" flex justify-end gap-5 items-center w-full md:w-[60%] ">
          <CustomButton type="submit" color="bg-gray-400" width=" w-[50%] md:w-[25%] " icon={<RxCross2/>}>CANCEL</CustomButton>
          <CustomButton type="submit" color="bg-green-500" width="w-[50%] md:w-[25%] " icon={<IoSave/>}>POST</CustomButton>
          </div>
          </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-x-10 sm:gap-x-16 gap-y-6 sm:gap-y-10 gap ">
        <section className=" space-y-8">
          <div className=" font-jamjure">
            <p className="mb-4 font-[500] caption">Select Statistic <span className="text-indigo-400 text-[1.3rem] ml-1">*</span></p>
            <InputField placeholder="Select a statistic"
              type="select"
              rounded="rounded md:w-[50%] "
              name="statistic_options"
              options={["1st", "2nd", "3rd"]}
              value={summaryForm.statistic_options}
              onChange={handleChange}
              error={errors.statistic_options}
              required
            />
          </div>
          <div>
            <p className="mb-4 font-[500]">
              Statistic {summaryForm.statistic_options} <span className="text-indigo-400 text-[1.3rem] ml-1">*</span>
            </p>
            <InputField 
              icon={<PiListNumbers />}
              rounded="rounded"
              type="number"
              name="stats_1"
              placeholder={`Only numbers...`}
              value={summaryForm.stats_1}
              onChange={handleChange}
              error={errors.stats_1}
              required
            />
          </div>
          <div>
            <p className="mb-4 font-[500]">
              Content {summaryForm.statistic_options} <span className="text-indigo-400 text-[1.3rem] ml-1">*</span>
            </p>
            <InputField
              rounded="rounded"
              type="textarea"
              name="content_1"
              placeholder={`Content`}
              value={summaryForm.content_1}
              onChange={handleChange}
              error={errors.content_1}
              required
            />
          </div>
        </section>

        <section className=" space-y-8">
         <div>
          <SingleImage image={image} setImage={setImage} height="h-[8.5rem]" title="Summary"/>
         </div>
          <div className=" font-jamjure">
            <p className="mb-4 font-[500] caption">Select Summary Title <span className="text-indigo-400 text-[1.3rem] ml-1">*</span></p>
            <InputField placeholder="Select a statistic"
              type="select"
              rounded="rounded md:w-[50%] "
              name="summary_options"
              options={["1st", "2nd", "3rd"]}
              value={summaryForm.summary_options}
              onChange={handleChange}
              error={errors.summary_options}
              required
            />
          </div>
          <section className=" flex justify-between gap-4 md:gap-8">
          <div className=" flex-1">
            <p className="mb-4 font-[500]">
              Title {summaryForm.summary_options} <span className="text-indigo-400 text-[1.3rem] ml-1">*</span>
            </p>
            <InputField
              icon={<MdOutlineTitle />}
              rounded="rounded"
              type="text"
              name="title_1"
              placeholder={`Content`}
              value={summaryForm.title_1}
              onChange={handleChange}
              error={errors.title_1}
              required
            />
          </div>
          <div>
            <p className=" mb-[18.5px]">
              Icon <span className="text-indigo-400 text-[1.3rem] ml-1">*</span>
            </p>
          </div>
          </section>
         
          <div className=" mt-7">
            <p className="mb-4 font-[500] ">
              Description {summaryForm.summary_options} <span className="text-indigo-400 text-[1.3rem] ml-1">*</span>
            </p>
            <InputField
              rounded="rounded"
              type="textarea"
              name="description_1"
              placeholder={`Content`}
              value={summaryForm.description_1}
              onChange={handleChange}
              error={errors.description_1}
              required
            />
          </div>
        </section>
      </section>
    </form>
  );
};

export default SummaryForm;
