import React, { useEffect, useState } from "react";
import ContactsList from "./components/ContactsList";
import { fetchContacts } from "./services/BluetoothSyncAPI.Service.V2";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // Fetch contacts data and update the state
    fetchContacts()
      .then((data) => {
        setContacts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="app-container">
      <ContactsList contacts={contacts} />
    </div>
  );
}

export default App;
