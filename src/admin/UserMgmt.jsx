import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { MdDelete } from "react-icons/md";
import { TbUserEdit } from "react-icons/tb";
import TableButton from "../reusables/TableButton";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { removeUser, updateRole } from "../app/slices/RoleSlice";
import InputField from "../reusables/InputField";
import { FaSave } from "react-icons/fa";
import "./RecentApmt.css"

const UserMgmt = () => {
  const { details } = useSelector((state) => state.roleslice, shallowEqual);
  const { roles } = useSelector((state) => state.addroleslice);
  const dispatch = useDispatch();

  const [editableItems, setEditableItems] = useState({});
  const [selectedRole, setSelectedRole] = useState({});

  const toggleEdit = (id) => {
    setEditableItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Toggle the editable state for the specific item by id
    }));
  };

  const handleSave = (id) => {
    const newRole = selectedRole[id];
    if (newRole) {
      dispatch(updateRole({ id, newRole }));
      toggleEdit(id); 
    }
  };

  const handleRoleChange = (id, newRole) => {
    setSelectedRole((prevState) => ({
      ...prevState,
      [id]: newRole,
    }));
  };

  return (
    <div className="table-wrapper">
    <table className="w-full ">
      <thead className="border-b-2 border-gray-100">
        <tr>
          <th className=" text-left p-2 font-medium">NAME</th>
          <Th>ROLE</Th>
          <Th>ACTIONS</Th>
        </tr>
      </thead>
      <tbody>
        {details.length === 0 ? (
          <tr>
            <td colSpan={4} className="text-center py-3">
              No Any Users..
            </td>
          </tr>
        ) : (
          details?.map((item, idx) => {
            const isEditable = editableItems[item.id] || false;

            return (
              <tr
                key={idx}
                className={` py-1`}
              >
                <td className="px-3">
                  <div className="flex gap-2 items-center">
                    <p className="rounded-full bg-gray-600 text-white w-[2rem] h-fit py-2 px-5 flex justify-center">
                      {item.user_name.charAt(0).toUpperCase()}
                    </p>

                    <section className="space-y-0.5">
                      <p className="font-[600] text-[13px]">
                        {item.user_name}
                      </p>
                      <p className="font-[500] text-[12px]">
                        {item.email}
                      </p>
                    </section>
                  </div>
                </td>
                <Td>
                  {isEditable ? (
                    <InputField
                      required={false}
                      rounded="rounded-xl"
                      name="role"
                      type="select"
                      options={roles.map((role) => role.display_rolename)}
                      value={selectedRole[item.id] || item.user_role}
                      onChange={(e) => handleRoleChange(item.id, e.target.value)}
                    />
                  ) : (
                    <section
                      className=" text-[12px] bg-indigo-100 px-3.5 py-2 font-poppins  rounded-xl mx-auto w-fit"
                    >
                      {item.user_role}
                    </section>
                  )}
                </Td>
                <Td>
                  {isEditable ? (
                    <section className="flex items-center gap-6 justify-center">
                      <TableButton
                        textcolor="text-green-500"
                        icon={<FaSave />}
                        type="button"
                        onClick={() => handleSave(item.id)}
                      >
                        Save
                      </TableButton>
                      <TableButton
                        type="button"
                        textcolor="text-[#de163a]"
                        icon={<RxCross1 />}
                        onClick={() => toggleEdit(item.id)}
                      >
                        Cancel
                      </TableButton>
                    </section>
                  ) : (
                    <section className="flex items-center gap-4 justify-center">
                      <TableButton
                        type="button"
                        onClick={() => toggleEdit(item.id)}
                        textcolor=" text-indigo-500"
                        icon={<TbUserEdit />}
                      >
                        Edit Roles
                      </TableButton>
                      <TableButton
                        icon={<MdDelete />}
                        textcolor="text-[#de163a]"
                        onClick={() => dispatch(removeUser(item.id))}
                      >
                        Delete
                      </TableButton>
                    </section>
                  )}
                </Td>
              </tr>
            );
          })
        )}
      </tbody>
    </table>
    </div>
  );
};

export default UserMgmt;

const Th = ({ children, width }) => {
  return (
    <th className=" py-2 px-4  font-medium" style={{ width }}>
      {children}
    </th>
  );
};

const Td = ({ children }) => {
  return <td className="py-3 px-4  font-[400] font-noto_sans text-[14px]">{children}</td>;
};
