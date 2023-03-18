import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact';
// import contacts data from db.json
import data from './db.json';

function App() {

  const addContact = (contact) => {
    // add contact to contacts
    // if contact already exists, update contact
    // if contact does not exist, add contact
    if (contact.id) {
      const index = data.contacts.findIndex((c) => c.id === contact.id);
      data.contacts[index] = contact;
    }else {
      data.contacts.push({id: data.contacts.length + 1, ...contact});
    }
  }

  const deleteContact = (id) => {
    // delete contact from contacts
    const index = data.contacts.findIndex((c) => c.id === id);
    if (index !== -1){
      data.contacts.splice(index, 1);
    }
  }

  return (
    <div className="App">
      <Contact contacts={data.contacts} addContact={addContact} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
