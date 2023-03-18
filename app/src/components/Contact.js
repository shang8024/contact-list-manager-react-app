// organize all the contact components together

import React from "react";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";

const Contact = (props) => {
    const {contacts, addContact, deleteContact} = props;
    const [isEditing, setIsEditing] = React.useState(false);
    const [contact, setContact] = React.useState({});

    const contactFormSubmit = (contact) => {
        // add contact to contacts
        addContact(contact);
        // close the form
        setIsEditing(false);
    };

    return (
        <div >
            <ContactList
                contacts={contacts}
                addContact={()=>setIsEditing(true)}
                deleteContact={deleteContact}
            />
            {isEditing &&<ContactForm contacts={{}} setContact={contactFormSubmit} />}
        </div>
    );
};

export default Contact;
