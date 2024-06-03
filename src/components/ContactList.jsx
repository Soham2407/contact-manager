import { useNavigate } from "react-router-dom";
import Contact from "./Contact";

const ContactList = ({ contacts, deleteContactHandler }) => {
  const navigate = useNavigate();

  return (
    <div className="mt-3">
      <div className="flex justify-between items-center m-1">
        <h2 className="text-xl font-semibold">Contact List</h2>
        <button
          onClick={() => navigate("/add")}
          className="bg-blue-500 text-white  py-2 px-3 rounded-md hover:bg-blue-400"
        >
          Add Contact
        </button>
      </div>
      <div className="m-1">
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteContactHandler={deleteContactHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
