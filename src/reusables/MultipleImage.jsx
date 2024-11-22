import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone';
import { RxCross1 } from 'react-icons/rx';

const MultipleImage = ({image,setImage,title,imageNum}) => {
    const onDrop = useCallback(
        (acceptedFiles) => {
          acceptedFiles.forEach((file) => {
            const reader = new FileReader();
            reader.onloadend = () => {
              const base64String = reader.result;
              setImage((prevImages) => [...prevImages, base64String]);
            };
    
            if (file) {
              reader.readAsDataURL(file);
            }
          });
        },
        [image]
      );
    
      const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { "image/jpeg": [], "image/png": [], "image/gif": [] },
        multiple: true,
      });
    
      const handleDeleteImage = (index) => {
        setImage((prevImages) => prevImages.filter((_, idx) => idx !== index));
      };
  return (
    <section>
          <p className=" mb-4 font-[500] ">
            {title} Images{" "}
            <span className="text-indigo-400 text-[1.3rem] ml-1">*</span>
          </p>

          {/* Conditionally render the Dropzone if no image has been uploaded */}
          {image.length < imageNum && (
            <div
              {...getRootProps()}
              className={`border-[2.5px] border-indigo-300 h-[8rem] border-dashed rounded-lg p-6 content-center text-center cursor-pointer ${
                isDragActive ? "bg-gray-100" : ""
              }`}
            >
              <input {...getInputProps()} required />
              <h6 className=" font-jamjure">
                Drop files here or click to upload.
              </h6>
            </div>
          )}

          {/* Preview Uploaded Image */}
          <div className="my-[1rem] grid grid-cols-2 gap-6">
            {image?.map((item, idx) => (
              <div key={idx} className="relative z-[20] h-[10rem] ">
                <img
                  src={item}
                  className="rounded-lg h-full w-full object-cover"
                  alt="Preview"
                />
                <RxCross1
                  className="text-[2.3rem] bg-white/40 backdrop-blur-lg absolute top-2 right-2 p-1.5 rounded-md cursor-pointer"
                  onClick={() => handleDeleteImage(idx)}
                />
              </div>
            ))}
          </div>
        </section>
  )
}

export default MultipleImage
