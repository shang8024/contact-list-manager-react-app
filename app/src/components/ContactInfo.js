// display single person's contact info
import React from 'react';

const ContactInfo = ({ contact,editContact,deleteContact }) => {
  const { first_name, last_name, email, phone, address } = contact;
  const [isExpanded, setIsExpanded] = React.useState(false);
  return (
    <div className='contactInfoContainer'>
        <div className='contactInfoHeader' onClick={() => {setIsExpanded(!isExpanded);}}>
            <div className='contactIcon'>
                <i className="fa fa-user-circle-o" aria-hidden="true"></i>
            </div>
            <div className='basicInfo'>
                <p>{first_name} {last_name}</p>
                <i>{email}</i>
            </div>
            <div className='operationContainer'>
                <div className='editBtn' onClick={editContact}>
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                </div>
                <div className='deleteBtn' onClick={deleteContact}>
                    <i className="fa fa-trash" aria-hidden="true"></i>
                </div>
            </div>
        </div>
        {isExpanded &&
        <div className='contactInfoBody'>
            <div className='contactInfoItem'>
                <i className="fa fa-phone" aria-hidden="true"></i>
                <p>{phone}</p>
            </div>
            <div className='contactInfoItem'>
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <p>{address}</p>
            </div>
        </div>}
    </div>
  );
}

export default ContactInfo;