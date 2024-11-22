import React, { useCallback, useState } from "react";
import { RxCross1, RxCross2 } from "react-icons/rx";
import CustomButton from "../reusables/CustomButton";
import InputField from "../reusables/InputField";
import { IoSave } from "react-icons/io5";
import { useDropzone } from "react-dropzone";
import { MdAttachMoney, MdShortText, MdTranslate } from "react-icons/md";
import { places } from "../utils/Elements";
import { HiCurrencyDollar, HiUserGroup } from "react-icons/hi";
import { FaUniversity } from "react-icons/fa";

const KeyFactsForm = () => {
  const [keyFact, setKeyFact] = useState({
    currency: "",
    population: "",
    language: "",
    total_university: " ",
    keyFact_options: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const capitalizeFirstLetter = (text) => {
      return text.charAt(0).toUpperCase() + text.slice(1);
    };

    if (name === "currency" || name === "language") {
      setKeyFact({ ...keyFact, [name]: capitalizeFirstLetter(value) });
    } else {
      setKeyFact({ ...keyFact, [name]: value });
    }
  };

  const [errors, setErrors] = useState({});
  const validate = () => {
    const tempErrors = {};

    if (keyFact.currency.length < 5 || keyFact.currency.length > 25) {
      tempErrors.currency = "Text must be between 5-25 characters.";
    }
    if (keyFact.population.length < 15) {
      tempErrors.population = "fees must be at least 15 characters.";
    }
    if (keyFact.language.length < 5 || keyFact.language.length > 15) {
      tempErrors.language = " Text must be between 5-15 characters.";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("New keyFact Added ");
      console.log("keyFact Data:", keyFact);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <section className=" flex flex-col md:flex-row gap-5 justify-between mb-[2.5rem] sm:mb-[3rem] items-center">
        <h5 className=" subheading  ">Key Facts </h5>
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
          name="keyFact_options"
          options={places.map((item) => item.name)}
          value={keyFact.keyFact_options}
          onChange={handleChange}
          error={errors.keyFact_options}
          required
        />
      </div>
      <section className=" grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-14 gap-y-6 md:gap-y-10">
        <div>
          <p className=" mb-4 font-[500]">
            Currency{" "}
            <span className="text-indigo-400 text-[1.3rem] ml-1">*</span>
          </p>
          <InputField
            icon={<HiCurrencyDollar />}
            rounded="rounded"
            type="text"
            name="currency"
            placeholder="Currency"
            value={keyFact.currency}
            onChange={handleChange}
            required
            error={errors.currency}
          />
        </div>
        <div>
          <p className=" mb-4 font-[500] ">
            Student Population{" "}
            <span className="text-indigo-400 text-[1.3rem] ml-1">*</span>
          </p>
          <InputField
            icon={<HiUserGroup />}
            rounded="rounded"
            type="text"
            name="population"
            placeholder="Total population..."
            value={keyFact.population}
            onChange={handleChange}
            error={errors.population}
            required
          />
        </div>

        <div>
          <p className=" mb-4 font-[500]">
            Language{" "}
            <span className="text-indigo-400 text-[1.3rem] ml-1">*</span>
          </p>
          <InputField
            rounded="rounded"
            icon={<MdTranslate />}
            type="text"
            name="language"
            placeholder="Languages..."
            value={keyFact.language}
            onChange={handleChange}
            required
            error={errors.language}
          />
        </div>
        <div>
          <p className=" mb-4 font-[500]">
           Total Universities{" "}
            <span className="text-indigo-400 text-[1.3rem] ml-1">*</span>
          </p>
          <InputField placeholder="Total Universities"
            rounded="rounded"
            icon={<FaUniversity />}
            type="text"
            name="total_university"
            value={keyFact.total_university}
            onChange={handleChange}
            required
            error={errors.total_university}
          />
        </div>
      </section>
    </form>
  );
};

export default KeyFactsForm;
