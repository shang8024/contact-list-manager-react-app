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
        setContact({});
    };

    const editContact = (contact) => {
        // set contact to be edited
        setContact(contact);
        // open the form
        setIsEditing(true);
    };

    return (
        <div >
            <ContactList
                contacts={contacts}
                editContact={editContact}
                addContact={() => editContact()}
                deleteContact={deleteContact}
            />
            {isEditing &&<ContactForm contact={contact} setContact={contactFormSubmit} />}
        </div>
    );
};

export default Contact;
