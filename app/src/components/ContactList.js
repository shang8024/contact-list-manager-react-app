// contact list that displays all contacts
import React from 'react';
import ContactInfo from './ContactInfo';

const ContactList = ({ contacts, editContact, deleteContact, addContact}) => {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [filteredContacts, setFilteredContacts] = React.useState(contacts);

    const searchContact = (event) => {
        let string = event.target.value;
        setSearchTerm(string);
        setFilteredContacts(contacts.filter((contact) => {
            let fullName = contact.first_name + ' ' + contact.last_name;
            return fullName.toLowerCase().includes(string.toLowerCase())
            || contact.email.toLowerCase().includes(string.toLowerCase())
            || contact.phone.toLowerCase().includes(string.toLowerCase())
            || contact.address.toLowerCase().includes(string.toLowerCase());
        }));
    };

    const deleteId = (e,id) => {
        e.stopPropagation();
        let newContacts = filteredContacts.filter((contact) => contact.id !== id);
        setFilteredContacts(newContacts);
        deleteContact(id);
    };
    
    return (
        <div className='contactListContainer'>
            <div className='contactHeader'>
                <div className='searchContainer'>
                    <i className="fa fa-search" aria-hidden="true"></i>
                    <input className='searchField' type='text' placeholder='Search...' 
                        onChange={(event) => searchContact(event)}
                        value={searchTerm}
                    />
                </div>
                <div className='addBtn' onClick={addContact}>
                    <i className="fa fa-plus" aria-hidden="true"></i>
                </div>
            </div>
            <div className='contactList'>
            {filteredContacts.map((contact) => (
                <ContactInfo contact={contact}
                    editContact={(e)=> {
                        e.stopPropagation();
                        editContact(contact);}}
                    deleteContact={(e) => deleteId(e,contact.id)}
                    key={contact.id}
                />
            ))}
            </div>
        </div>
    );
}

export default ContactList;