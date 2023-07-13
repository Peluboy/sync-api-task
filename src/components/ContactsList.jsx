import React, { useState } from "react";
import ContactInfo from "./ContactInfo";
import Navbar from "./Navbar";

function ContactsList({ contacts }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("");

  const contactsPerPage = 5;

  const filteredContacts = contacts.filter((contact) => {
    const { name, email } = contact;
    const contactName =
      name.first.toLowerCase() + " " + name.last.toLowerCase();
    return (
      contactName.includes(filter.toLowerCase()) ||
      email.toLowerCase().includes(filter.toLowerCase())
    );
  });

  const totalPages = Math.ceil(filteredContacts.length / contactsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    setCurrentPage(1);
  };

  const renderPagination = () => {
    return (
      <div className="pagination">
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <div className="pagination-btns">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1 || filteredContacts.length === 0}
          >
            Prev
          </button>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={
              currentPage === totalPages || filteredContacts.length === 0
            }
          >
            Next
          </button>
        </div>
      </div>
    );
  };

  const startIndex = (currentPage - 1) * contactsPerPage;
  const endIndex = startIndex + contactsPerPage;
  const currentContacts = filteredContacts.slice(startIndex, endIndex);

  return (
    <div>
      {/* <input
        type="text"
        placeholder="Filter by name or email"
        value={filter}
        onChange={handleFilterChange}
      /> */}
      <Navbar handleFilterChange={handleFilterChange} />

      {currentContacts.length > 0 ? (
        currentContacts.map((contact) => {
          if (contact.login && contact.login.uuid) {
            return <ContactInfo key={contact.login.uuid} contact={contact} />;
          }
          return null;
        })
      ) : (
        <p>No contacts found.</p>
      )}
      {renderPagination()}
    </div>
  );
}

export default ContactsList;
