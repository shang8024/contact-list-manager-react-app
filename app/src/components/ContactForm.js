// contact form for adding/editing contact

import React from 'react';

const ContactForm = ({ contact, setContact }) => {
  const [first_name, setFirstName] = React.useState(contact ? contact.first_name : '');
  const [last_name, setLastName] = React.useState(contact ? contact.last_name : '');
  const [email, setEmail] = React.useState(contact ? contact.email : '');
  const [phone, setPhone] = React.useState(contact ? contact.phone : '');
  const [address, setAddress] = React.useState(contact ? contact.address : '');
  const isEditing = contact ? true : false;
  const [isExpanded, setIsExpanded] = React.useState(true);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isEditing) {
      setContact({
        first_name,
        last_name,
        email,
        phone,
        address,
      });
    } else {
      setContact({
        first_name,
        last_name,
        email,
        phone,
        address,
      });
    }
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setAddress('');
  };

  return (
    <div className="contactFormContainer">
      <div className="contactFormExpanBtn" onClick={() => {setIsExpanded(!isExpanded);}}>
        <i className="fa fa-minus" aria-hidden="true"></i>
      </div>
      {isExpanded &&
      <form onSubmit={handleSubmit}>
        <div className="contactFormHeader">
          <p>{isEditing ? 'Edit Contact' : 'Add Contact'}</p>
        </div>
        <div className="contactFormBody">
          <div className="contactFormItem">
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              name="first_name"
              id="first_name"
              value={first_name}
              onChange={handleFirstNameChange}
            />
          </div>
          <div className="contactFormItem">
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              name="last_name"
              id="last_name"
              value={last_name}
              onChange={handleLastNameChange}
            />
          </div>
          <div className="contactFormItem">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
            />
            </div>
            <div className="contactFormItem">
                <label htmlFor="phone">Phone</label>
                <input
                    type="text"
                    name="phone"
                    id="phone"
                    value={phone}
                    onChange={handlePhoneChange}
                />
            </div>
            <div className="contactFormItem">
                <label htmlFor="address">Address</label>
                <input
                    type="text"
                    name="address"
                    id="address"
                    value={address}
                    onChange={handleAddressChange}
                />
            </div>
        </div>
        <div className="contactFormFooter">
            <button type="submit">{isEditing ? 'Save' : 'Add'}</button>
        </div>
      </form>
      }
    </div>
  );
};

export default ContactForm;