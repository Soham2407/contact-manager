import { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import ContactList from "./components/ContactList";
import AddContact from "./components/AddContact";
import ContactDetails from "./components/ContactDetails";

function App() {
  const LOCAL_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_KEY)) || []
  );
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, contact]);
  };

  const deleteContactHandler = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  const editContactHandler = (id, newContact) => {
    const updatedContacts = contacts.map((contact) => {
      if (contact.id === id) {
        return { id, ...newContact };
      } else {
        return contact;
      }
    });
    setContacts(updatedContacts);
    setIsEdit(false);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: (
            <ContactList
              contacts={contacts}
              deleteContactHandler={deleteContactHandler}
            />
          ),
        },
        {
          path: "add",
          element: (
            <AddContact
              addContactHandler={addContactHandler}
              contacts={contacts}
              isEdit={isEdit}
              setIsEdit={setIsEdit}
              editContactHandler={editContactHandler}
            />
          ),
        },
        {
          path: "contact/:id",
          element: <ContactDetails />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
