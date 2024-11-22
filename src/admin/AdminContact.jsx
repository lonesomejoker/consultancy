import React, { useState } from "react";
import CustomButton from "../reusables/CustomButton";
import { RxCross2 } from "react-icons/rx";
import { IoSave } from "react-icons/io5";
import InputField from "../reusables/InputField";
import { MdShareLocation } from "react-icons/md";
import { TbDeviceMobile } from "react-icons/tb";
import { IoIosMailUnread } from "react-icons/io";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const AdminContact = () => {
  const [contactInfo, setContactInfo] = useState({
    contact_desc: "",
    office_location: "",
    phone: "",
    email: "",
    toll_free: "",
  });
  const [socialLinks, setSocialLinks] = useState({
    facebook: "",
    linkedIn: "",
    insta: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const capitalizeFirstLetter = (text) => {
      return text.charAt(0).toUpperCase() + text.slice(1);
    };

    if (name === "contact_desc" || name === "office_location") {
      setContactInfo({ ...contactInfo, [name]: capitalizeFirstLetter(value) });
    } else {
      setContactInfo({ ...contactInfo, [name]: value });
      setSocialLinks({ ...socialLinks, [name]: value });
    }
  };

  const [errors, setErrors] = useState({});
  const validate = () => {
    const tempErrors = {};

    if (
      contactInfo.contact_desc.length < 20 ||
      contactInfo.contact_desc.length > 40
    ) {
      tempErrors.contact_desc = "Description must be between 20-40 words long.";
    }
    if (contactInfo.office_location.length < 10) {
      tempErrors.office_location = "Text must be at least 10 characters.";
    }
    if (contactInfo.toll_free.length < 4) {
      tempErrors.toll_free = "Number must be at least 4 characters.";
    }
    if (!/^[\w-\.]+@[\w-\.]+$/.test(contactInfo.email)) {
        tempErrors.email = "Email must have text after '@'.";
      }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const contactInformation = {
        ...contactInfo,
        links: socialLinks,
      };
      alert("New Banner Added");
      console.log("banner Data:", contactInformation);
    }
  };

  return (
    <form className=" bg-white p-6 md:p-12 drop-shadow-lg" onSubmit={handleSubmit}>
      <section className=" flex flex-col md:flex-row gap-5 justify-between mb-[2.5rem] sm:mb-[3rem] items-center">
        <h5 className=" subheading  ">Contact Info </h5>
        <div className=" flex justify-end gap-5 items-center w-full md:w-[60%] ">
          <CustomButton type="submit" color="bg-gray-400" width=" w-[50%] md:w-[25%] " icon={<RxCross2/>}>CANCEL</CustomButton>
          <CustomButton type="submit" color="bg-green-500" width="w-[50%] md:w-[25%] " icon={<IoSave/>}>POST</CustomButton>
          </div>
          </section>
      <div className=" mb-[2.5rem] md:mb-[3rem] md:w-[48.5%]">
        <p className=" mb-4 font-[500]">Short Description *</p>
        <InputField
          rounded="rounded "
          icon={<MdShareLocation />}
          type="textarea"
          name="contact_desc"
          placeholder="Short Description"
          value={contactInfo.contact_desc}
          onChange={handleChange}
          required
          error={errors.contact_desc}
        />
      </div>
      <section className=" grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        <div>
          <p className=" mb-4 font-[500]">Location *</p>
          <InputField
            rounded="rounded"
            icon={<MdShareLocation />}
            type="text"
            name="office_location"
            placeholder="Banner office_location"
            value={contactInfo.office_location}
            onChange={handleChange}
            required
            error={errors.office_location}
          />
        </div>
        <div>
          <p className=" mb-4 font-[500]">Phone Number *</p>
          <InputField
            rounded="rounded"
            icon={<TbDeviceMobile />}
            type="text"
            name="phone"
            placeholder="Phone Number.."
            value={contactInfo.phone}
            onChange={handleChange}
            required
            error={errors.phone}
          />
        </div>

        <div>
          <p className=" mb-4 font-[500] ">Email *</p>
          <InputField
            rounded="rounded"
            icon={<IoIosMailUnread />}
            type="text"
            name="email"
            placeholder="Write your email here..."
            value={contactInfo.email}
            onChange={handleChange}
            error={errors.email}
            required
          />
        </div>
        <div>
          <p className=" mb-4 font-[500] ">Toll-Free Number *</p>
          <InputField
            rounded="rounded"
            type="text"
            name="toll_free"
            placeholder="Write toll-free here..."
            value={contactInfo.toll_free}
            onChange={handleChange}
            error={errors.toll_free}
            required
          />
        </div>
      </section>
      <p className=" subheading mt-[2.5rem] md:mt-[3rem] mb-[1.5rem]">Social Links</p>
      <section className=" grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
        <div>
          <p className=" mb-4 font-[500]">Facebook *</p>
          <InputField
            icon={<FaFacebookF />}
            rounded="rounded"
            type="link"
            name="facebook"
            placeholder="Facebook Link"
            value={socialLinks.facebook}
            onChange={handleChange}
            required={false}
            error={errors.facebook}
          />
        </div>
        <div>
          <p className=" mb-4 font-[500]">Linked In *</p>
          <InputField
            required={false}
            rounded="rounded"
            icon={<FaLinkedinIn />}
            type="link"
            name="linkedIn"
            placeholder="LinkedIn link.."
            value={socialLinks.linkedIn}
            onChange={handleChange}
            error={errors.linkedIn}
          />
        </div>

        <div>
          <p className=" mb-4 font-[500] ">Instagram *</p>
          <InputField
            required={false}
            rounded="rounded"
            icon={<FaInstagram />}
            type="text"
            name="insta"
            placeholder="Write your insta here..."
            value={socialLinks.insta}
            onChange={handleChange}
            error={errors.insta}
          />
        </div>
      </section>
    </form>
  );
};

export default AdminContact;
