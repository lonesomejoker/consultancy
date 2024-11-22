import React, { useCallback, useState } from "react";
import InputField from "../reusables/InputField";
import CustomButton from "../reusables/CustomButton";
import { RxCross1, RxCross2 } from "react-icons/rx";
import { IoSave } from "react-icons/io5";
import MultipleImage from "../reusables/MultipleImage";

const EventForm = () => {
  const [form, setForm] = useState({
  title: "",
  content: "",
  location: "",
  address: "",
  start_date: "",  
  start_time: "",  
  end_date: "",    
  end_time: "", 

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const capitalizeFirstLetter = (text) => {
      return text.charAt(0).toUpperCase() + text.slice(1);
    };
    
    if (
      name === "title" ||
      name === "content" ||
      name === "address" ||
      name === "location"
    ) {
      setForm({ ...form, [name]: capitalizeFirstLetter(value) });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const [errors, setErrors] = useState({});
  const validate = () => {
    const tempErrors = {};

    if (form.title.length < 5 || form.title.length > 25) {
      tempErrors.title = "Full Name must be between 5-25 characters.";
    }
    if (form.content.length < 15 ) {
      tempErrors.content = "Content must be at least 15 characters.";
    }
    if (form.location.length < 5 || form.location.length > 15) {
      tempErrors.location = "Location must be between 5-25 characters.";
    }
    if (form.address.length < 5 || form.address.length > 15) {
      tempErrors.address = "Address must be between 5-25 characters.";
    }
    if (!form.start_date) {
      tempErrors.start_date = "Start date is required.";
    }
    if (!form.start_time) {
      tempErrors.start_time = "Start time is required.";
    }
    if (!form.end_date) {
      tempErrors.end_date = "End date is required.";
    }
    if (!form.end_time) {
      tempErrors.end_time = "End time is required.";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Handling image files
  const [image, setImage] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const newEvent = {
        id: new Date().getTime(),
        ...form,
        images: image,
      };
      alert("New Event Posted");
      console.log("Event Details:", newEvent);
    }
    // setImage([]);
    // setForm({ title: "", content: "" });
  };

  return (
    <form onSubmit={handleSubmit} className=" bg-white px-6 sm:px-12 pb-7 sm:pb-14 sm:pt-12 pt-6 rounded-sm drop-shadow-lg">
    <section className=" flex flex-col md:flex-row gap-5 justify-between mb-[2.5rem] sm:mb-[3rem] items-center">
        <h5 className=" subheading  ">Add a Event </h5>
        <div className=" flex justify-end gap-5 items-center w-full md:w-[60%] ">
          <CustomButton type="submit" color="bg-gray-400" width=" w-[50%] md:w-[25%] " icon={<RxCross2/>}>CANCEL</CustomButton>
          <CustomButton type="submit" color="bg-green-500" width="w-[50%] md:w-[25%] " icon={<IoSave/>}>POST</CustomButton>
          </div>
          </section>
        <section className=" grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
        <section className=" space-y-6 ">
          <div>
          <p className=" mb-4 font-[500]">Title <span className="text-indigo-400 text-[1.3rem] ml-1">*</span></p>
            <InputField rounded="rounded"
              type="text"
              name="title"
              placeholder="Event Title"
              value={form.title}
              onChange={handleChange}
              required
              error={errors.title}
            />
          </div>

          <div>
          <p className=" mb-4 font-[500]">Content <span className="text-indigo-400 text-[1.3rem] ml-1">*</span></p>
            <InputField rounded="rounded"
              type="textarea"
              name="content"
              placeholder="Write your content here..."
              value={form.content}
              onChange={handleChange}
              error={errors.content}
              required
            />
          </div>
          </section>
          <div>
          <MultipleImage imageNum={5} image={image} setImage={setImage} title="Event"/>
        </div>
            <section className=" space-y-6 ">
            <div>
            <p className=" mb-4 font-[500]">Location <span className="text-indigo-400 text-[1.3rem] ml-1">*</span></p>
            <InputField rounded="rounded"
                type="text"
                name="location"
                placeholder=" Location"
                value={form.location}
                onChange={handleChange}
                required
                error={errors.location}
              />
            </div>

            <section>
            <p className=" mb-4 font-[500]">Address <span className="text-indigo-400 text-[1.3rem] ml-1">*</span></p>
            <InputField rounded="rounded"
                type="text"
                name="address"
                placeholder="Address"
                value={form.address}
                onChange={handleChange}
                required
                error={errors.address}
              />
            </section>
            <div className=" flex flex-col lg:flex-row gap-4 justify-between">
            <section>
            <p className=" mb-4 font-[500]">Event Starts <span className="text-indigo-400 text-[1.3rem] ml-1">*</span></p>
            <section className=" flex flex-col lg:flex-row justify-between gap-4">
              <InputField rounded="rounded" type="date" name="start_date" value={form.start_date} required error={errors.start_date} onChange={handleChange}/>
              <InputField rounded="rounded" type="time" name="start_time" value={form.start_time} required error={errors.start_time} onChange={handleChange}/>
              </section>
            </section>
            <section>
            <p className=" mb-4 font-[500]">Event Ends <span className="text-indigo-400 text-[1.3rem] ml-1">*</span></p>
            <section className=" flex justify-between flex-col lg:flex-row gap-4">
            <InputField rounded="rounded" type="date" name="end_date" value={form.end_date} required error={errors.end_date} placeholder="End time" onChange={handleChange}/>
            <InputField rounded="rounded" type="time" name="end_time" value={form.end_time} required error={errors.end_time} onChange={handleChange}/>
            </section>
            </section>

            </div>
            </section>

       
        </section>

        
    </form>
  );
};

export default EventForm;
