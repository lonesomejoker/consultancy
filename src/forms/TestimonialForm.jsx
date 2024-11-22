import React, { useState } from 'react'
import InputField from '../reusables/InputField'
import CustomButton from '../reusables/CustomButton';
import { RxCross2 } from 'react-icons/rx';
import { IoSave } from 'react-icons/io5';
import { MdDriveFileRenameOutline, MdLocationOn } from 'react-icons/md';

const TestimonialForm = () => {
  const [testimonialForm, setTestimonialForm] = useState({
    reveiwer_name: "",
    review: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const capitalizeFirstLetter = (text) => {
      return text.charAt(0).toUpperCase() + text.slice(1);
    };
    
    if (
      name === "question" ||
      name === "review"  ||
      name ==="location"
     
    ) {
      setTestimonialForm({ ...testimonialForm, [name]: capitalizeFirstLetter(value) });
    } else {
      setTestimonialForm({ ...testimonialForm, [name]: value });
    }
  };

  const [errors, setErrors] = useState({});
  const validate = () => {
    const tempErrors = {};

    if (testimonialForm.reveiwer_name.length < 20 || testimonialForm.reveiwer_name.length > 60) {
      tempErrors.reveiwer_name = "Question must be between 20-60 characters.";
    }
    if (testimonialForm.location.length < 20 || testimonialForm.location.length > 60) {
      tempErrors.location = "Question must be between 20-60 characters.";
    }
    if (testimonialForm.review.length < 50 || testimonialForm.review.length > 100 ) {
      tempErrors.review = "Review must be at between 50-100 characters.";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("New Testimonial Added");
      console.log("Faq Data:", testimonialForm);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
   <section className=" flex flex-col md:flex-row gap-5 justify-between mb-[2.5rem] sm:mb-[3rem] items-center">
        <h5 className=" subheading  ">Testimonials</h5>
        <div className=" flex justify-end gap-5 items-center w-full md:w-[60%] ">
          <CustomButton type="submit" color="bg-gray-400" width=" w-[50%] md:w-[25%] " icon={<RxCross2/>}>CANCEL</CustomButton>
          <CustomButton type="submit" color="bg-green-500" width="w-[50%] md:w-[25%] " icon={<IoSave/>}>POST</CustomButton>
          </div>
          </section>
    <section className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 ">
    <div>
      <p className=" mb-4 font-[500] ">Name <span className="text-indigo-400 text-[1.3rem] ml-1">*</span></p>
      <InputField rounded="rounded" icon={<MdDriveFileRenameOutline/>}
        type="text"
        name="reveiwer_name"
        placeholder="Full Name"
        value={testimonialForm.reveiwer_name}
        onChange={handleChange}
        error={errors.reveiwer_name}
        required
      />
    </div>
    <div>
      <p className=" mb-4 font-[500] ">Location <span className="text-indigo-400 text-[1.3rem] ml-1">*</span></p>
      <InputField rounded="rounded" icon={<MdLocationOn/>}
        type="text"
        name="reveiwer_name"
        placeholder="Location"
        value={testimonialForm.location}
        onChange={handleChange}
        error={errors.location}
        required
      />
    </div>
    
    <div>
      <p className=" mb-4 font-[500]">Review <span className="text-indigo-400 text-[1.3rem] ml-1">*</span></p>
      <InputField rounded="rounded"
        type="textarea"
        name="question"
        placeholder="Question here..."
        value={testimonialForm.review}
        onChange={handleChange}
        required
        error={errors.review}
      />
      </div>
    </section>
</form>
  )
}

export default TestimonialForm
