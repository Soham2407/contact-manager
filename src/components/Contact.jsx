import { Link, useNavigate } from "react-router-dom";

const Contact = ({ contact, deleteContactHandler }) => {
  const { id, name, email } = contact;
  const navigate = useNavigate();

  const editContact = () => {
    navigate("/add", { state: { id } });
  };

  return (
    <div className="flex justify-between my-2 border border-gray-200 p-2">
      <div className="flex gap-2">
        <i className="ri-user-line self-start border-2 border-gray-600 px-2 py-1 text-lg rounded-full"></i>
        <div>
          <Link to={`contact/${id}`} state={{ name, email }}>
            <p className="font-semibold">{name}</p>
            <p className="text-sm">{email}</p>
          </Link>
        </div>
      </div>
      <div className="flex gap-4">
        <i
          className="ri-pencil-line  text-2xl text-blue-500 cursor-pointer"
          onClick={editContact}
        ></i>
        <i
          className="ri-delete-bin-6-line text-2xl text-red-500 cursor-pointer"
          onClick={() => deleteContactHandler(id)}
        ></i>
      </div>
    </div>
  );
};

export default Contact;
