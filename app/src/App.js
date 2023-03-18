import logo from './logo.svg';
import './App.css';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
// import contacts data from db.json
import contacts from './db.json';

function App() {
  return (
    <div className="App">
      <ContactList contacts={contacts.contacts} />
      <ContactForm contacts={{}} setContact={e=>{}} />
    </div>
  );
}

export default App;
