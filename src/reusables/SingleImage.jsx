import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { RxCross1 } from "react-icons/rx";

const SingleImage = ({ image, setImage,title,height }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
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

  return (
    <>
      <p className=" mb-4 font-[500] ">
        {title} Image{" "}
        <span className="text-indigo-400 text-[1.3rem] ml-1">*</span>
      </p>

      {/* Conditionally render the Dropzone if no image has been uploaded */}
      {image.length === 0 && (
        <div
          {...getRootProps()}
          className={`border-[2.5px] ${height} border-indigo-300 border-dashed rounded-xl p-2 content-center text-center cursor-pointer ${
            isDragActive ? "bg-gray-100" : ""
          }`}
        >
          <input {...getInputProps()} required />
          <h6 className=" font-jamjure">Drop files here or click to upload.</h6>
        </div>
      )}

      {/* Preview Uploaded Image */}
      <div>
        {image?.map((item, idx) => (
          <div key={idx} className="relative z-[10] w-fit">
            <img src={item} className=" rounded-lg h-[10rem]" alt="Preview" />
            <RxCross1
              className="text-[2.3rem] bg-white/40 backdrop-blur-lg absolute top-2 right-2 p-1.5 rounded-md cursor-pointer"
              onClick={() => handleDeleteImage(idx)}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default SingleImage;
