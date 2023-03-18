// contact form for adding/editing contact

import React, { useEffect } from 'react';

const ContactForm = ({ contact, setContact }) => {
  const [first_name, setFirstName] = React.useState(contact ? contact.first_name : '');
  const [last_name, setLastName] = React.useState(contact ? contact.last_name : '');
  const [email, setEmail] = React.useState(contact ? contact.email : '');
  const [phone, setPhone] = React.useState(contact ? contact.phone : '');
  const [address, setAddress] = React.useState(contact ? contact.address : '');
  const isEditing = contact ? true : false;
  const [isExpanded, setIsExpanded] = React.useState(true);

  const allInputsFilled = () => {
    if (!first_name) {
        return false;
    }
    if (!last_name) {
        return false;
    }
    if (!email) {
        return false;
    }
    if (!phone) {
        return false;
    }
    if (!address) {
        return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // check all fields are filled
    if (!allInputsFilled()) {
        alert('Please fill all the fields');
        return;
    }
    // add/update contact to contacts
    if (isEditing) {
      setContact({
        id: contact.id,
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
    // clear all the fields
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setAddress('');
  };

  useEffect(() => {
    setIsExpanded(true);
    // set contact to be edited
    if (contact) {
        setFirstName(contact.first_name);
        setLastName(contact.last_name);
        setEmail(contact.email);
        setPhone(contact.phone);
        setAddress(contact.address);
    } else {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setAddress('');
    }
    }, [contact]);


  return (
    <div className="contactFormContainer">
      <div className="contactFormExpanBtn" onClick={() => {setIsExpanded(!isExpanded);}}>
        <i className="fa fa-minus" aria-hidden="true"></i>
      </div>
      {isExpanded &&
      <form onSubmit={handleSubmit}>
        <div className="contactFormHeader">
          <h1>{isEditing ? 'Edit Contact' : 'Add Contact'}</h1>
        </div>
        <div className="contactFormBody">
          <div className="contactFormItem" style={{width:"50%"}}>
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              name="first_name"
              id="first_name"
              required
              value={first_name}
              onChange={(e)=>setFirstName(e.target.value)}
            />
          </div>
          <div className="contactFormItem" style={{width:"50%"}}>
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              name="last_name"
              required
              id="last_name"
              value={last_name}
              onChange={(e)=>setLastName(e.target.value)}
            />
          </div>
          <div className="contactFormItem">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              required
                id="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
            />
            </div>
            <div className="contactFormItem">
                <label htmlFor="phone">Phone</label>
                <input
                    required
                    type="text"
                    name="phone"
                    id="phone"
                    pattern="[0-9]{10}"
                    title="Phone number should be 10 digits"
                    value={phone}
                    onChange={(e)=>setPhone(e.target.value)}
                />
            </div>
            <div className="contactFormItem">
                <label htmlFor="address">Address</label>
                <input
                    type="text"
                    name="address"
                    id="address"
                    required
                    value={address}
                    onChange={(e)=>setAddress(e.target.value)}
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