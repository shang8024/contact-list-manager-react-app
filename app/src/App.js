import logo from './logo.svg';
import './App.css';
import ContactInfo from './components/ContactInfo';
import ContactList from './components/ContactList';
// import contacts data from db.json
import contacts from './db.json';

function App() {
  return (
    <div className="App">
      <ContactList contacts={contacts.contacts} />
    </div>
  );
}

export default App;
