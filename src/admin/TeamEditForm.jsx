import React, { useCallback, useState } from "react";
import { RxCross1, RxCross2 } from "react-icons/rx";
import CustomButton from "../reusables/CustomButton";
import InputField from "../reusables/InputField";
import { IoPersonCircle, IoSave } from "react-icons/io5";
import { useDropzone } from "react-dropzone";
import { MdTitle } from "react-icons/md";
import { RiUserSettingsLine } from "react-icons/ri";
import SingleImage from "../reusables/SingleImage";

const TeamEditForm = () => {
  const [teamMember, setTeamMember] = useState({
    member_name: "",
    member_role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const capitalizeFirstLetter = (text) => {
      return text.charAt(0).toUpperCase() + text.slice(1);
    };
    
    if (
      name === "member_name" ||
      name === "member_role" 
     
    ) {
      setTeamMember({ ...teamMember, [name]: capitalizeFirstLetter(value) });
    } else {
      setTeamMember({ ...teamMember, [name]: value });
    }
  };

  const [errors, setErrors] = useState({});
  const validate = () => {
    const tempErrors = {};

    if (teamMember.member_name.length < 5 || teamMember.member_name.length > 40) {
      tempErrors.member_name = "Full Name must be between 5-25 characters.";
    }
    if (teamMember.member_role.length < 10 || teamMember.member_role.length > 30 ) {
      tempErrors.member_role = "Content must be between 10-30 characters.";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const [image, setImage] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const newMember = {
        id: new Date().getTime(),
        ...teamMember,
        image: image[0] || null,
      };
      alert("New Banner Added");
      console.log("banner Data:", newMember);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <section className=" flex flex-col md:flex-row gap-5 justify-between mb-[2.5rem] sm:mb-[3rem] items-center">
        <h5 className=" subheading  ">Team Members</h5>
        <div className=" flex justify-end gap-5 items-center w-full md:w-[60%] ">
          <CustomButton type="submit" color="bg-gray-400" width=" w-[50%] md:w-[25%] " icon={<RxCross2/>}>CANCEL</CustomButton>
          <CustomButton type="submit" color="bg-green-500" width="w-[50%] md:w-[25%] " icon={<IoSave/>}>POST</CustomButton>
          </div>
          </section>
        <section className=" grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
        <section >
        <div className=" flex-1">
          <p className=" mb-4 font-[500]">Full Name <span className="text-indigo-400 text-[1.3rem] ml-1">*</span></p>
          <InputField rounded="rounded" icon={<IoPersonCircle/>}
            type="text"
            name="member_name"
            placeholder="Name here..."
            value={teamMember.member_name}
            onChange={handleChange}
            required
            error={errors.member_name}
          />
          </div>        

        <div className=" mt-6">
          <p className=" mb-4 font-[500] ">Role <span className="text-indigo-400 text-[1.3rem] ml-1">*</span></p>
          <InputField rounded="rounded" icon={<RiUserSettingsLine/>}
            type="text"
            name="member_role"
            placeholder="Member role"
            value={teamMember.member_role}
            onChange={handleChange}
            error={errors.member_role}
            required
          />
        </div>
        </section>
        
         <div>
          <SingleImage image={image} setImage={setImage} title="Profile" height="h-[8.5rem]"/>
         </div>
          </section>
     
    </form>
  );
};

export default TeamEditForm;
