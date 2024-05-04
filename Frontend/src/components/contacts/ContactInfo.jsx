import { useState } from "react";
import EditContactModal from "./EditContactModal";

function ContactInfo({ name, role, company, met }) {
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);

  const showEditContactModal = () => {
    setIsEditModalVisible(true);
  }

  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full flex justify-between items-center h-12 border-b pb-4">
      <div className="size-12"></div>
        <h5 className="text-xl font-semibold">Contact Info</h5>
        <div className="size-12 flex items-center justify-center">
          <i
            onClick={showEditContactModal}
            className="material-icons hover:cursor-pointer text-3xl"
          >
            edit
          </i>
        </div>
      </div>

      <p className="font-semibold text-2xl ml-2 pt-4">{name}</p>
      <p className="text-xl pt-2 ml-2 border-b pb-4 text-slate-400">{role + " at " + company}</p>
      <p className="text-md pt-4 p-2"><em>{met}</em></p>

      {isEditModalVisible && <EditContactModal editModalSetter={setIsEditModalVisible} props={{ name, role, company, met }} />}

    </div>
  );
}

export default ContactInfo;
