import React from "react";
import "../styles/contact.css";

function ContactInfo({ contact }) {
  const { name, phone, picture } = contact;

  const isValidName =
    name &&
    name.first &&
    name.last &&
    name.first.length <= 20 &&
    name.last.length <= 20;
  const validatedName = isValidName ? `${name.first} ${name.last}` : null;

  const isValidPhone = phone && phone.length >= 8 && phone.length <= 14;
  const validatedPhone = isValidPhone ? phone : null;

  const isValidPicture = picture && picture.thumbnail;
  const validatedPicture = isValidPicture ? picture.thumbnail : null;

  if (!validatedName || !validatedPhone || !validatedPicture) {
    return null;
  }

  return (
    <div id={contact.login.uuid} className="user">
      <img src={validatedPicture} alt={validatedName} className="photo" />
      <div className="user-info">
        <p>{validatedName}</p>
        <p>{validatedPhone}</p>
      </div>
    </div>
  );
}

export default ContactInfo;
