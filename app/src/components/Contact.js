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

    const deleteItem = (id) => {
        // delete contact from contacts
        if (window.confirm("Are you sure you want to delete this contact?")) {
            // if contact is currently being edited, close the form
            if (contact && contact.id === id) {
                setIsEditing(false);
                setContact({});
            }
            deleteContact(id);
        }
    };

    return (
        <>
            <ContactList
                contacts={contacts}
                editContact={editContact}
                addContact={() => editContact()}
                deleteContact={deleteItem}
            />
            {isEditing &&<ContactForm contact={contact} setContact={contactFormSubmit} />}
        </>
    );
};

export default Contact;
