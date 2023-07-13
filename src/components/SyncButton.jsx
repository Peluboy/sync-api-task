import React, { useState } from "react";
import { fetchContacts } from "../services/BluetoothSyncAPI.Service.V2";

function SyncButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSync = () => {
    setIsLoading(true);
    fetchContacts()
      .then((contacts) => {
        // Handle the received contacts data
        console.log(contacts);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  };

  return (
    <button onClick={handleSync} disabled={isLoading}>
      {isLoading ? "Syncing..." : "Sync"}
    </button>
  );
}

export default SyncButton;
