import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AddContact = ({
  addContactHandler,
  editContactHandler,
  isEdit,
  setIsEdit,
  contacts,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = location?.state || "";

  useEffect(() => {
    if (id) {
      setIsEdit(true);
      const editedContact = contacts.find((contact) => contact?.id === id);
      setName(editedContact?.name);
      setEmail(editedContact?.email);
    }
  }, [id]);

  useEffect(() => {
    return () => setIsEdit(false);
  }, []);

  const addContact = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("Please fill all fields");
    } else {
      if (isEdit) {
        const newContact = {
          name,
          email,
        };
        editContactHandler(id, newContact);
      } else {
        const contact = {
          id: Math.floor(Math.random() * 100000),
          name,
          email,
        };
        addContactHandler(contact);
      }

      setName("");
      setEmail("");
      navigate("/");
    }
  };

  return (
    <section className="m-2">
      <h2 className="text-xl font-medium">
        {isEdit ? "Edit Contact" : "Add Contact"}
      </h2>
      <form className="p-2" onSubmit={addContact}>
        <div className="flex flex-col">
          <label htmlFor="username" className="font-semibold">
            Name
          </label>
          <input
            className="border p-1 text-base"
            type="text"
            id="username"
            placeholder="Enter Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col mt-2">
          <label htmlFor="email" className="font-semibold">
            Email
          </label>
          <input
            className="border p-1 text-base"
            type="email"
            id="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="bg-blue-500 py-1 px-3 mt-3 hover:bg-blue-400 text-white">
          Submit
        </button>
      </form>
      <hr className="mt-2" />
    </section>
  );
};

export default AddContact;
