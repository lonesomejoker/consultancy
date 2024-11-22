import React, { useState } from "react";
import CustomButton from "../reusables/CustomButton";
import InputField from "../reusables/InputField";
import { useDispatch, useSelector } from "react-redux";
import UserMgmt from "./UserMgmt";
import { addUser } from "../app/slices/RoleSlice";

const AddUserForm = () => {
  const [user, setUser] = useState({
    user_name: "",
    email: "",
    pass_word: "",
    confirm_pass: "",
    status: [],
    user_role: "",
  });
  
  const { roles } = useSelector((state) => state.addroleslice);
  const { details } = useSelector((state) => state.roleslice);
  console.log("user list:", details);
  console.log("roles:", roles);
  const dispatch=useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const [errors, setErrors] = useState({});
  const validate = () => {
    const tempErrors = {};

    if (user.user_name.length < 5 || user.user_name.length > 25) {
      tempErrors.user_name = "Username must be between 5-25 characters.";
    }
    if (!/^[\w-\.]+@gmail\.com$/.test(user.email)) {
      tempErrors.email = "Email must end with @gmail.com.";
    }
    if (!/(?=.*[A-Z])(?=.*[!@#$%^&*])/.test(user.pass_word)) {
      tempErrors.pass_word =
        "Password must contain at least one capital letter and one special character.";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const newUser = {
        id: new Date().getTime(),
        ...user,
      };
      alert("New User Posted");
      dispatch(addUser(newUser));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CustomButton type="submit" width=" ml-auto lg:w-[15%]">
        Create User
      </CustomButton>
      <section className="flex flex-col md:flex-row gap-10 my-6 w-full justify-between">
        <section className=" space-y-6 md:flex-1 bg-white p-7 lg:p-10 drop-shadow rounded-md">
          <h6 className=" mb-6 font-semibold">
            Create New User
          </h6>
          <div className="">
            <p className=" mb-4">User Name</p>
            <InputField
              rounded="rounded-sm"
              type="text"
              name="user_name"
              placeholder="User Name"
              value={user.user_name}
              onChange={handleChange}
              required
              error={errors.user_name}
            />
          </div>

          <div className="">
            <p className=" mb-4">Email</p>
            <InputField
              rounded="rounded-sm"
              type="email"
              name="email"
              placeholder="Email"
              value={user.email}
              onChange={handleChange}
              error={errors.email}
              required
            />
          </div>

          <section className="md:flex space-y-4 md:space-y-0 justify-between items-center gap-4 ">
            <div className="flex-1">
              <p className=" mb-4">Password</p>
              <InputField
                rounded="rounded-sm"
                type="password"
                name="pass_word"
                placeholder="Password"
                value={user.pass_word}
                onChange={handleChange}
                error={errors.pass_word}
                required
              />
            </div>
            <div className="flex-1">
              <p className=" mb-4">Confirm Password</p>
              <InputField
                rounded="rounded-sm"
                type="password"
                name="confirm_pass"
                placeholder="Password"
                value={user.confirm_pass}
                onChange={handleChange}
                error={errors.confirm_pass}
                required
              />
            </div>
          </section>

          <section className="flex gap-2 ">
            <InputField
              type="checkbox"
              options={["Active User"]}
              value={user.status}
              name="status"
              onChange={handleChange}
            />
          </section>

          <div className=" ">
            <p className=" mb-4">Select Role</p>
            <InputField
              type="radio"
              name="user_role"
              value={user.user_role}
              options={roles?.map((role) => role.display_rolename)}
              onChange={handleChange}
              error={errors.user_role}
              required
            />
          </div>
        </section>
        <div className=" bg-white p-7 md:p-10 drop-shadow rounded-md md:flex-1 h-fit">
          <h6 className=" mb-6 font-semibold ">Users List</h6>
          <UserMgmt />
        </div>
      </section>
    </form>
  );
};

export default AddUserForm;
