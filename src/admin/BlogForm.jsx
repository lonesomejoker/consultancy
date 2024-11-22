import React, { useState, useCallback } from "react";
import InputField from "../reusables/InputField";
import { RxCross1, RxCross2 } from "react-icons/rx";
import { useDropzone } from "react-dropzone";
import CustomButton from "../reusables/CustomButton";
import { IoSave } from "react-icons/io5";
import SingleImage from "../reusables/SingleImage";

const BlogForm = () => {
  const [form, setForm] = useState({
    title: "",
    category: "",
    content: "",
    meta_content: "",
    meta_title: "",
    meta_keywords: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const [errors, setErrors] = useState({});
  const validate = () => {
    const tempErrors = {};

    if (form.title.length < 5 || form.title.length > 25) {
      tempErrors.title = "Title must be between 5-25 characters.";
    }
    if (form.content.length < 15 || form.content.length > 200) {
      tempErrors.content = "Content must be between 15-200 characters.";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const [image, setImage] = useState([]);

  const onDrop = useCallback(
    (acceptedFiles) => {
      if (image.length + acceptedFiles.length > 1) {
        window.alert("You can only upload one image.");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setImage([base64String]);
      };

      if (acceptedFiles[0]) {
        reader.readAsDataURL(acceptedFiles[0]);
      }
    },
    [image]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    "image/jpeg": [],
    "image/png": [],
    "image/gif": [],
    multiple: false,
  });

  const handleDeleteImage = (index) => {
    setImage((prevImages) => prevImages.filter((_, idx) => idx !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const newBlog = {
        id: new Date().getTime(),
        ...form,
        image: image[0] || null,
      };
      alert("New Blog Posted");
      console.log("blogs Data:", newBlog);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white px-5 sm:px-12 pb-7 sm:pb-14 sm:pt-12 pt-6 rounded-sm drop-shadow-lg"
    >
      <section className=" flex flex-col md:flex-row gap-5 justify-between mb-[2.5rem] sm:mb-[3rem] items-center">
        <h5 className=" subheading  ">Add a Blog </h5>
        <div className=" flex justify-end gap-5 items-center w-full md:w-[60%] ">
          <CustomButton type="submit" color="bg-gray-400" width=" w-[50%] md:w-[25%] " icon={<RxCross2/>}>CANCEL</CustomButton>
          <CustomButton type="submit" color="bg-green-500" width="w-[50%] md:w-[25%] " icon={<IoSave/>}>POST</CustomButton>
          </div>
          </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
        <section className="  space-y-6">
          <div>
            <p className=" mb-4 font-[500]">
              Blog Title{" "}
              <span className="text-indigo-400 text-[1.3rem] ml-1">*</span>
            </p>
            <InputField rounded="rounded"
              type="text"
              name="title"
              placeholder="Post Title"
              value={form.title}
              onChange={handleChange}
              required
              error={errors.title}
            />
          </div>

          <div>
          <p className=" mb-4 font-[500]">Category <span className="text-indigo-400 text-[1.3rem] ml-1">*</span></p>
            <InputField rounded="rounded"
              type="select"
              name="category"
              placeholder="Select Category"
              value={form.category}
              onChange={handleChange}
              options={["Careers", "Education", "Destination", "Visa"]}
              required
              error={errors.category}
            />
          </div>

          <div>
          <p className=" mb-4 font-[500]">Blog Content <span className="text-indigo-400 text-[1.3rem] ml-1">*</span></p>
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
          <SingleImage
            height="h-[8.5rem]"
            image={image}
            setImage={setImage}
            title="Blog"
          />
        </div>
        <section className=" space-y-6 ">
          <div>
          <p className=" mb-4 font-[500]">Meta Title <span className="text-indigo-400 text-[1.3rem] ml-1">*</span></p>
            <InputField rounded="rounded"
              type="text"
              name="meta_title"
              placeholder="Meta Title"
              value={form.meta_title}
              onChange={handleChange}
              required
              error={errors.meta_title}
            />
          </div>

          <section>
          <p className=" mb-4 font-[500]">Meta Keywords <span className="text-indigo-400 text-[1.3rem] ml-1">*</span></p>
            <InputField rounded="rounded"
              type="text"
              name="meta_keywords"
              placeholder="Meta Keywords"
              value={form.meta_keywords}
              onChange={handleChange}
              required
              error={errors.meta_keywords}
            />
          </section>

          <section>
          <p className=" mb-4 font-[500]">Meta Description <span className="text-indigo-400 text-[1.3rem] ml-1">*</span></p>
            <InputField rounded="rounded"
              type="textarea"
              name="meta_content"
              placeholder="Write your content here..."
              value={form.meta_content}
              onChange={handleChange}
              error={errors.meta_content}
              required
            />
          </section>
        </section>
      </section>
    </form>
  );
};

export default BlogForm;
