// contact list that displays all contacts
import React from 'react';
import ContactInfo from './ContactInfo';

const ContactList = ({ contacts }) => {
    const [searchTerm, setSearchTerm] = React.useState('');
    const filteredContacts = contacts.filter((contact) => {
        let fullName = contact.first_name + ' ' + contact.last_name;
        return fullName.toLowerCase().includes(searchTerm.toLowerCase())
        || contact.email.toLowerCase().includes(searchTerm.toLowerCase())
        || contact.phone.toLowerCase().includes(searchTerm.toLowerCase())
        || contact.address.toLowerCase().includes(searchTerm.toLowerCase());
    });
    return (
        <div className='contactListContainer'>
            <div className='contactHeader'>
                <div className='searchContainer'>
                    <i className="fa fa-search" aria-hidden="true"></i>
                    <input className='searchField' type='text' placeholder='Search...' 
                        onChange={(event) => {setSearchTerm(event.target.value); }} 
                        value={searchTerm}
                    />
                </div>
                <div className='addBtn'>
                    <i className="fa fa-plus" aria-hidden="true"></i>
                </div>
            </div>
            <div className='contactList'>
            {filteredContacts.map((contact) => (
                <ContactInfo contact={contact} />
            ))}
            </div>
        </div>
    );
}

export default ContactList;